"use client";
import { IoHomeOutline } from "react-icons/io5";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { useState } from "react";

export function Footer() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    {
      name: "Home",
      icon: <IoHomeOutline className="size-6" />,
    },
    {
      name: "Swap",
      icon: <HiArrowsRightLeft className="size-6" />,
    },
    {
      name: "Earn",
      icon: <IoWalletOutline className="size-6" />,
    },
    {
      name: "Discover",
      icon: <IoCompassOutline className="size-6" />,
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
              className={`flex flex-col items-center gap-1 py-3 px-4 relative ${
                activeTab === item.name ? "text-seaGreen" : "text-slateGray"
              }`}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.name}</span>
              {activeTab === item.name && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-seaGreen rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* iPhone Safe Area */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </footer>
  );
}
