"use client";

import { cn } from "@/lib/utils";
import Amenities from "@/widgets/ship-settings/amenities";
import Photos from "@/widgets/ship-settings/photos";
import ShipProfile from "@/widgets/ship-settings/ship-profile";
import TechnicalDetails from "@/widgets/ship-settings/technical-details";
import { useState } from "react";

const tabs = ["Ship", "Cabins", "Managers"];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Ship");
  return (
    <div>
      <div className="flex items-center sticky top-0 bg-white py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn([
              "px-2 py-2 text-[#9B9B9B] relative overflow-hidden after:absolute after:bottom-0 after:h-0.5 after:bg-black after:w-full after:rounded after:-left-full after:duration-300",
              selectedTab === tab && "text-[#171717] after:left-0",
            ])}
            onClick={() => setSelectedTab(tab)}
          >
            <p>{tab}</p>
          </button>
        ))}
      </div>
      <div className="mt-8">
        {selectedTab === "Ship" ? (
          <div className="md:w-[680px] mx-auto space-y-12">
            <ShipProfile />
            <Photos />
            <Amenities />
            <TechnicalDetails />
          </div>
        ) : null}
      </div>
    </div>
  );
}
