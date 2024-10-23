// This page is equevalent to _app.js
import React from "react";
import AuthProvider from "./context/AuthProvider";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dance Studio Suite",
  description: "A dance studio suite app for bookings and enrollments.",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-white">
      <body
        className={
          (`${geistSans.variable} ${geistMono.variable} antialiased`, "h-full")
        }
      >
        <AuthProvider>
          <Theme>{children}</Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
