"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <>
      <h1>You are logged in. This is the client page.</h1>
      {/* This is your guide to the client page. */}
      {/* <ComponentName user={session?.user} pagetype={"Client"} /> */}
    </>
  );
}
