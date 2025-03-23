"use client"

import * as React from "react"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Type definitions based on OpenSanctions Match API response
interface MatchResult {
  id: string
  schema: string
  name: string
  match: number
  score: number
  features: Record<string, any>
  properties: {
    name?: string[]
    country?: string[]
    birthDate?: string[]
    position?: string[]
    topics?: string[]
    sanctions?: string[]
    [key: string]: any
  }
}

interface SanctionsResponse {
  responses: {
    qt: {
      results: MatchResult[]
    }
  }
}

export function Sanctions() {
    const [name, setName] = useState("")
    const [results, setResults] = useState<MatchResult[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSearch = async () => {
        if (!name.trim()) return
        setLoading(true)
        setError(null)
        setResults(null)

        try {
            const response = await axios.get(`/api/sanctions-check`, {
                params: { q: name }
            })

            const data = response.data as SanctionsResponse
            setResults(data.responses.qt.results)
        } catch (err) {
            setError("Error fetching data. Please try again.")
            console.error("Error in sanctions check:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle>Sanctions Screening</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Person or Entity Name</Label>
                        <div className="flex gap-2">
                            <Input
                                id="name"
                                placeholder="Enter name to search"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1"
                            />
                            <Button 
                                onClick={handleSearch} 
                                disabled={loading || !name.trim()}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Searching
                                    </>
                                ) : "Search"}
                            </Button>
                        </div>
                    </div>
                </div>
                
                {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-600 rounded border border-red-200">
                        {error}
                    </div>
                )}
                
                {results && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-lg">Results</h3>
                            <span className="text-sm text-gray-500">
                                Found {results.length} {results.length === 1 ? "match" : "matches"}
                            </span>
                        </div>
                        
                        {results.length > 0 ? (
                            <div className="space-y-4">
                                {results.map((entity) => (
                                    <div key={entity.id} className="border p-4 rounded-md bg-white shadow-sm">
                                        <div className="flex justify-between mb-2">
                                            <h4 className="font-bold text-lg">{entity.name}</h4>
                                            <div className="flex items-center">
                                                <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-md">
                                                    Match: {(entity.match * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            {entity.properties.name && entity.properties.name.length > 0 && (
                                                <div>
                                                    <span className="font-semibold">Name(s): </span>
                                                    <span>{entity.properties.name.join(", ")}</span>
                                                </div>
                                            )}
                                            
                                            {entity.properties.country && entity.properties.country.length > 0 && (
                                                <div>
                                                    <span className="font-semibold">Country: </span>
                                                    <span>{entity.properties.country.join(", ")}</span>
                                                </div>
                                            )}
                                            
                                            {entity.properties.birthDate && entity.properties.birthDate.length > 0 && (
                                                <div>
                                                    <span className="font-semibold">Birth Date: </span>
                                                    <span>{entity.properties.birthDate.join(", ")}</span>
                                                </div>
                                            )}
                                            
                                            {entity.properties.position && entity.properties.position.length > 0 && (
                                                <div>
                                                    <span className="font-semibold">Position: </span>
                                                    <span>{entity.properties.position.join(", ")}</span>
                                                </div>
                                            )}
                                            
                                            {entity.properties.topics && entity.properties.topics.length > 0 && (
                                                <div>
                                                    <span className="font-semibold">Listed For: </span>
                                                    <span>{entity.properties.topics.join(", ")}</span>
                                                </div>
                                            )}
                                            
                                            <div>
                                                <span className="font-semibold">Schema: </span>
                                                <span>{entity.schema}</span>
                                            </div>
                                            
                                            <div>
                                                <span className="font-semibold">Score: </span>
                                                <span>{entity.score.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        
                                        {entity.features && Object.keys(entity.features).length > 0 && (
                                            <div className="mt-2 pt-2 border-t">
                                                <details className="text-sm">
                                                    <summary className="cursor-pointer font-semibold">Match Features</summary>
                                                    <div className="mt-2 pl-2">
                                                        {Object.entries(entity.features).map(([key, value]) => (
                                                            <div key={key}>
                                                                <span className="font-medium">{key}: </span>
                                                                <span>{value.toString()}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </details>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4 bg-gray-50 rounded-md text-center">
                                No sanctions matches found for `{name}`
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-gray-500">
                Data provided by the OpenSanctions API
            </CardFooter>
        </Card>
    )
}

export default Sanctions