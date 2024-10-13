"use client";
import * as React from "react";
import AppNavbar from "./app-navbar";
import AppSidebar from "./app-sidebar";

export default function AppShell({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function clickMe() {
    setSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="min-h-full">
        <AppSidebar open={sidebarOpen} />
        <AppNavbar title={title} />
        <main>
          <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">{children}</div>
          <button onClick={clickMe}>Click me</button>
        </main>
      </div>
    </>
  );
}
