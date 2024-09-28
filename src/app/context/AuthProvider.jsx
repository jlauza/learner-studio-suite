"use client";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const session = getServerSession(options);

export default function AuthProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
