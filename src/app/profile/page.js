`use server`;
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import AppShell from "@/components/ui-application/app-shell";
import LayoutHeader from "@/components/profile/layout-header";
import LayoutContent from "@/components/profile/layout-content";

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
        <LayoutHeader session={session} />
        <LayoutContent session={session} />
      </AppShell>
    </>
  );
}
