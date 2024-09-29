import React from "react";
import Github from "next-auth/providers/github";
import { signIn, getProviders } from "next-auth/react";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function SignInForm({ providers }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="mx-auto p-8 w-full max-w-lg bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-center text-2xl text-blue-400 mb-8 font-bold">
          <img
            src="https://next-auth.js.org/img/logo/logo-xs.png"
            width={80}
            // height={500}
            alt="Logo"
            style={{
              margin: "auto",
            }}
          />
        </h2>
        <div>
          <p className="mb-4 text-center">
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
              <label className="block text-sm font-medium mb-2" htmlFor="email">
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
                className="block text-sm font-medium mb-2"
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

          <button
            className="bg-white border border-zinc-300 py-2 rounded-md w-full text-zinc-700 hover:bg-zinc-50 transition"
            onClick={signIn("github")}
          >
            <GithubOutlined /> Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
