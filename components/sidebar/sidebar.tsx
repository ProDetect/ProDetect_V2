import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CompanySidebarLogo } from "./company-sidebar-logo";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "../icons/sidebar/dashboard-icon";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">

      <div
        className={Sidebar({
        })}
      >
        <div className={Sidebar.Header()}>
          <CompanySidebarLogo />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<DashboardIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarItem
              isActive={pathname === "/accounts"}
              title="Alerts"
              icon={<AccountsIcon />}
              href="Alerts"
            />
            <SidebarItem
            icon={<BalanceIcon />}
              isActive={pathname === ""}
              title="Sanctions Check"
            />
            <SidebarItem
              isActive={pathname === "/payments"}
              title="Transactions"
              icon={<PaymentsIcon />}
            />
            <SidebarItem
              isActive={pathname === "/customers"}
              title="Customers"
              icon={<CustomersIcon />}
            />
            <SidebarItem
              isActive={pathname === "/reports"}
              title="Reports"
              icon={<ReportsIcon />}
            />
            <SidebarItem
              isActive={pathname === "/settings"}
              title="Settings"
              icon={<SettingsIcon />}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
