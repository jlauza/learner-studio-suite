import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AppHeader from "./app-header-title";

const userNavigation = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/api/auth/signout" },
];

const AppNavbar = ({ title, session }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Flyover/Slide Panel */}
      <Transition show={sidebarOpen} as={React.Fragment}>
        {/* Overlay */}
        <TransitionChild
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={React.Fragment}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        {/* Sidebar Panel */}
        <TransitionChild
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          as={React.Fragment}
        >
          <div className="fixed inset-y-0 left-0 flex max-w-full">
            <div className="w-screen max-w-xs bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  className="text-gray-400"
                  onClick={() => setSidebarOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-6">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </TransitionChild>
      </Transition>

      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button onClick={() => setSidebarOpen(true)}>
                  <Bars3Icon className="block h-6 w-6 text-white" />
                </button>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-gray-800 p-1 text-gray-400 hover:text-white"
                >
                  <BellIcon className="h-6 w-6" />
                </button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session?.user.image}
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      <AppHeader title={title} />
    </>
  );
};

export default AppNavbar;
