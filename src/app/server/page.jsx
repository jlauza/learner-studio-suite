import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <>
      <h1>You are logged in. This is the server page.</h1>
      {/* This is your guide to the server page. */}
      {/* <ComponentName user={session?.user} pagetype={"Server"} /> */}
    </>
  );
}
