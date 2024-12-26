"use client";
import { MdHomeFilled } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoCompass } from "react-icons/io5";
import { RiCopperCoinFill } from "react-icons/ri";
import { useState } from "react";

export function Footer() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    {
      name: "Home",
      icon: <MdHomeFilled className="size-6" />,
    },
    {
      name: "Swap",
      icon: <FaArrowRightArrowLeft className="size-5" />,
    },
    {
      name: "Earn",
      icon: <RiCopperCoinFill className="size-6" />,
    },
    {
      name: "Discover",
      icon: <IoCompass className="size-6" />,
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slateGray/10 z-50">
      <div className="max-w-[520px] mx-auto px-4">
        <nav className="flex items-center justify-between">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center gap-1 py-2 px-4 ${
                activeTab === item.name ? "text-electricBlue" : "text-slateGray"
              }`}
            >
              {item.icon}
              <span className="text-[11px] font-normal">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </footer>
  );
}
