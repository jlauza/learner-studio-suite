`use server`;
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import AppShell from "@/components/ui-application/app-shell";
import { Button } from "@radix-ui/themes";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

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

  const title = "Dashboard";

  return (
    <>
      <AppShell title={title} session={session}>
        <h1>Welcome to dashboard, {session.user?.name}!</h1>
        <Button>
          <BookmarkBorderIcon />
          Bookmark
        </Button>
      </AppShell>
    </>
  );
}
