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
import {
  EnterIcon,
  PersonIcon,
  GearIcon,
  ExitIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";
import { Box, Strong } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

const userNavigation = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/api/auth/signout" },
];

const sideNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Team Members", href: "/team" },
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
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40" />
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
          <div className="fixed inset-y-0 left-0 flex max-w-full z-50">
            <div className="w-screen max-w-xs bg-white p-0">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  className="text-gray-400"
                  onClick={() => setSidebarOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-6">
                <NavigationMenu />
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
                    className="flex items-center justify-start text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <HomeIcon className="mr-2" /> Dashboard
                  </a>
                  <a
                    href="/team"
                    className="flex items-center justify-start text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <PersonIcon className="mr-2" /> Team
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
                      {!session?.user.image ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={session?.user.image}
                          alt={session?.user.name}
                        />
                      ) : (
                        <Box className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <Text size="4">
                            <Strong>{session?.user.name.charAt(0)}</Strong>
                          </Text>
                        </Box>
                      )}
                    </MenuButton>
                  </div>
                  {/* Menu Items for User */}
                  <UserMenu />
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

const UserMenu = () => {
  return (
    <>
      <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          <a
            href={userNavigation[0].href}
            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700"
          >
            <PersonIcon className="mr-2" /> {userNavigation[0].name}
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={userNavigation[1].href}
            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700"
          >
            <GearIcon className="mr-2" /> {userNavigation[1].name}
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={userNavigation[2].href}
            className="flex items-center justify-start px-4 py-2 text-sm text-gray-700"
          >
            <ExitIcon className="mr-2" /> {userNavigation[2].name}
          </a>
        </MenuItem>
      </MenuItems>
    </>
  );
};

const NavigationMenu = () => {
  return (
    <>
      <a
        href={sideNavigation[0].href}
        className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <HomeIcon className="mr-2" /> {sideNavigation[0].name}
      </a>
      <a
        href={sideNavigation[1].href}
        className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <PersonIcon className="mr-2" /> {sideNavigation[1].name}
      </a>
    </>
  );
};

export default AppNavbar;
