`use server`;

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Shell from "@/components/dashboard/shell";

export default async function Dashboard() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <>
      <Shell />
    </>
  );
}

export async function Content() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <>
      <h1>Welcome to dashboard, {session.user?.name}!</h1>
    </>
  );
}
