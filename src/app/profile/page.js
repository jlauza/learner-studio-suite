`use server`;
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import AppShell from "@/components/ui-application/app-shell";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=/server",
        permanent: false,
      },
    };
  }

  const title = "User Profile";

  return (
    <>
      <AppShell title={title} session={session}>
        <p>Full Name: {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
      </AppShell>
    </>
  );
}
