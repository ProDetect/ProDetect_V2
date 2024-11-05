import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { SupportIcon } from "../icons/navbar/support-icon";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full shadow-md"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        {/* Mobile Burger Menu */}
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>

        {/* Search Bar */}
        <NavbarContent className="w-full max-md:hidden justify-center">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full max-w-lg shadow-lg rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition"
            classNames={{
              input: "w-full px-4 py-2",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
            aria-label="Search"
          />
        </NavbarContent>

        {/* Right Side Icons and User Dropdown */}
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0 gap-4"
        >
          <NotificationsDropdown />

          <UserDropdown />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
