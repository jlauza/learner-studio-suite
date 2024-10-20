"use client";
import * as React from "react";
import AppNavbar from "./app-navbar";

export default function AppShell({ children, title, session }) {
  return (
    <>
      <div className="min-h-full flex flex-row">
        <div className="flex-1">
          <AppNavbar title={title} session={session} />
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
