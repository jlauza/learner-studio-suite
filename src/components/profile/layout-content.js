import React from "react";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function LayoutContent({ session }) {
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24">
            <img
              className="w-full h-full rounded-full object-cover"
              src={session?.user.image || "https://via.placeholder.com/150"}
              alt="Avatar"
            />
          </div>
          <h2 className="mt-4 text-lg font-medium">Profile Picture</h2>
        </div>
        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              value={session?.user.name || ""}
            />
          </div>
        </div>
        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              value={session?.user.email || ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
