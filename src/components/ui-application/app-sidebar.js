import { Disclosure, DisclosurePanel } from "@headlessui/react";
import React from "react";

export default function AppSidebar({ open }) {
  console.log(open);
  return (
    <>
      <div
        style={{
          display: open ? "block" : "none",
        }}
      >
        Yay! It works.
      </div>
      {/* <Disclosure as="sidebar" className="bg-gray-300">
        <DisclosurePanel>Sidebar</DisclosurePanel>
      </Disclosure> */}
    </>
  );
}
