"use client";
import * as React from "react";
import AppNavbar from "./app-navbar";
import AppSidebar from "./app-sidebar";

export default function AppShell({ children, title, session }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function clickMe() {
    setSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="min-h-full flex flex-row">
        <AppSidebar open={sidebarOpen} />
        <div className="flex-1">
          <AppNavbar title={title} clickMe={clickMe} session={session} />
          <main>
            <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
