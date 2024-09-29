// /src/app/api/auth/github/route.js
import { signIn } from "next-auth/react";

export async function GET(request) {
  const url = new URL(request.url);
  const callbackUrl = url.searchParams.get("callbackUrl") || "/";

  return signIn("github", {
    callbackUrl,
    redirect: true, // Ensures the user is redirected after sign-in
  });
}
