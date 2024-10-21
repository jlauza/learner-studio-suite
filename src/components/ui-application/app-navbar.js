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
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import AppHeader from "./app-header-title";
import {
  EnterIcon,
  PersonIcon,
  GearIcon,
  ExitIcon,
  HomeIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";
import { Box, Strong } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import { Fragment } from "react";

const userNavigation = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/api/auth/signout" },
];

const sideNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Team Members", href: "/team" },
];

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
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
                  {/* Flyout menu for "Marketing" */}
                  <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      <a
                        href="#"
                        className="flex items-center justify-start text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        <MagicWandIcon className="mr-2" /> Solutions
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        />
                      </a>
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {solutions.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                            >
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                />
                              </div>
                              <div>
                                <a
                                  href={item.href}
                                  className="font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                          {callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon
                                aria-hidden="true"
                                className="h-5 w-5 flex-none text-gray-400"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
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
