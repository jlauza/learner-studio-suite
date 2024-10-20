"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GitHubSignIn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <>
      <button
        className="bg-white border border-zinc-300 py-2 rounded-md w-full text-zinc-700 hover:bg-zinc-50 transition"
        onClick={() =>
          signIn("github", {
            callbackUrl,
          })
        }
      >
        <GitHubLogoIcon /> Sign in with GitHub
      </button>
    </>
  );
};

export default GitHubSignIn;
