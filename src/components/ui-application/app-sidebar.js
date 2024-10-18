import { Button, Disclosure, DisclosurePanel } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function AppSidebar({ open }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen border border-gray-200 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } sm:w-100 md:w-50`}
      >
        Yay! It works.
      </div>
      {/* <Disclosure as="sidebar" className="bg-gray-300">
        <DisclosurePanel>Sidebar</DisclosurePanel>
      </Disclosure> */}
    </>
  );
}
