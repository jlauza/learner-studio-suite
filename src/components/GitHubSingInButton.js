"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { GithubOutlined } from "@ant-design/icons";

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
        <GithubOutlined /> Sign in with GitHub
      </button>
    </>
  );
};

export default GitHubSignIn;
