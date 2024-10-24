`use server`;

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import AppShell from "@/components/ui-application/app-shell";

export default async function Dashboard() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  const title = "Team Members";

  return (
    <>
      <AppShell title={title} session={session}>
        <h1>
          Welcome to {title}, {session.user?.name}!
        </h1>
      </AppShell>
    </>
  );
}
