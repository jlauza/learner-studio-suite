"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <div className="text-xl font-bold">Dashboard</div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome, {session?.user?.email}!</h1>
      </main>

      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
