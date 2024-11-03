import { User, Chip, user } from "@nextui-org/react";
import React from "react";
import { AlertUser } from "./data";

interface Props {
  user: AlertUser;
  columnKey: React.Key;
}

export const RenderCell: React.FC<Props> = ({ user, columnKey }) => {
  const key = String(columnKey).toLowerCase(); // Convert to lowercase for case-insensitive matching
  
  switch (key) {
    
    case "time_date":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.time}</span>
          <span className="text-xs text-gray-500">{user.date}</span>
        </div>
      );

    case "alertid":
      return (
          <span className="text-sm font-medium">{user.alertId}</span>
      );

    case "amount":
      return (
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user.amount}</span>
          <span className="text-xs text-gray-500">{user.transactionType}</span>
        </div>
      );
      case "transactionType":
        return (
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">{user.transactionType}</span>
          </div>
        );
    case "customerId":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.customerId}</span>
        </div>
      );
      case "transactionId":
      return (
        <div className="flex flex-col">
          <span className="text-sm">{user.transactionId}</span>
        </div>
      );

    case "riskscore":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            parseInt(user.riskScore) >= 60
              ? "danger"
              : parseInt(user.riskScore) <= 59
              ? "warning"
              : "success"
          }
        >
          <span className="capitalize text-xs">{user.riskScore}</span>
        </Chip>
      );

    case "alertstatus":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            user.alertStatus === "flagged"
              ? "danger"
              : user.alertStatus === "pending"
              ? "warning"
              : "success"
          }
        >
          <span className="capitalize text-xs">{user.alertStatus}</span>
        </Chip>
      );

    default:
      return <span className="text-sm">{user[key as keyof AlertUser]}</span>;
  }
};
