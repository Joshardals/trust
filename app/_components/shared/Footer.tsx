"use client";
import { useState } from "react";
import Image from "next/image";

export function Footer() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    {
      name: "Home",
      activeIcon: "/home-active.jpg",
      inactiveIcon: "/home.jpg",
    },
    {
      name: "Swap",
      activeIcon: "/swap-active.jpg",
      inactiveIcon: "/swap.jpg",
    },
    {
      name: "Earn",
      activeIcon: "/earn-active.jpg",
      inactiveIcon: "/earn.jpg",
    },
    {
      name: "Discover",
      activeIcon: "/discover-active.jpg",
      inactiveIcon: "/discover.jpg",
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
              <Image
                src={
                  activeTab === item.name ? item.activeIcon : item.inactiveIcon
                }
                width={50}
                height={50}
                alt={item.name}
                className="size-5"
                priority={true}
              />
              <span className="text-[11px] font-normal">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </footer>
  );
}
