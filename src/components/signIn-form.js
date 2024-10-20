import React from "react";
import Link from "next/link";
import GitHubSignIn from "./GitHubSingInButton";

export default function SignInForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="mx-auto p-8 w-full max-w-lg bg-gray-700 shadow-md rounded-lg">
        <h2 className="text-center text-2xl text-blue-400 mb-8 font-bold">
          Welcome back!
        </h2>
        <div>
          <p className="mb-4 text-center text-white">
            Sign in to your account or{" "}
            <Link
              href="/register"
              className="underline text-blue-500 hover:text-blue-600"
            >
              create a new account.
            </Link>
          </p>
          {/* [Form goes here] */}
          <form action="/api/auth/callback/credentials">
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2 text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2 text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-300"></div>
            </div>
            <div className="relative text-center">
              <span className="bg-white px-4 text-zinc-400">or</span>
            </div>
          </div>
          <GitHubSignIn />
        </div>
      </div>
    </div>
  );
}
