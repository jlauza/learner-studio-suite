import { Disclosure, DisclosurePanel } from "@headlessui/react";
import React from "react";

export default function AppSidebar({ open }) {
  return (
    <>
      <div
        style={{
          display: open ? "block" : "none",
          height: "100vh",
          width: "280px",
          border: "1px solid #eee",
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
