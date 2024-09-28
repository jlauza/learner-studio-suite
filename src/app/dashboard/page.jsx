`use server`;

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(options);

  console.log("server: ", session);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <>
      <h1>Welcome to dashboard, {session.user?.name}</h1>
    </>
  );
}
