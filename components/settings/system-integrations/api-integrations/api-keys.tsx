"use client";
import React, { useState } from 'react';

const ApiKeys = () => {
    const [testMode, setTestMode] = useState(true);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <div className="api-keys-container">
            <h2>API Keys</h2>
            <div className="api-header">
                <div className="test-mode">
                    <input
                        type="checkbox"
                        id="testModeToggle"
                        checked={testMode}
                        onChange={() => setTestMode(!testMode)}
                    />
                    <label htmlFor="testModeToggle">Test Mode</label>
                </div>
                <button className="documentation-btn">Documentation</button>
            </div>
            <div className="key-container">
                <label>Public Key</label>
                <div className="key-box">
                    <span>5b7a1ad8-0122-4820-b51f-dda82115de6c</span>
                    <button onClick={() => handleCopy("5b7a1ad8-0122-4820-b51f-dda82115de6c")}>📋</button>
                </div>
            </div>
            <div className="key-container">
                <label>Private Key</label>
                <div className="key-box">
                    <span>f06f2599-52ff-4734-b741-e745096e5084</span>
                    <button onClick={() => handleCopy("f06f2599-52ff-4734-b741-e745096e5084")}>📋</button>
                </div>
            </div>
        </div>
    );
};

export default ApiKeys;
