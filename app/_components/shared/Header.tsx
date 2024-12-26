// Header.tsx
"use client";

import { useEffect, useState } from "react";
import GearIcon from "../ui/GearIcon";
import DuoToggleIcon from "../ui/DuoToggle";

interface HeaderProps {
  amount: string | any;
  activeTab: "Crypto" | "NFTs";
  onTabChange: (tab: "Crypto" | "NFTs") => void;
}

export function Header({ amount, activeTab, onTabChange }: HeaderProps) {
  const [showAmount, setShowAmount] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const tabs = ["Crypto", "NFTs"] as const;

  useEffect(() => {
    const handleScroll = () => {
      const amountThreshold = 105;
      const tabsThreshold = 250;

      console.log(window.scrollY);

      if (window.scrollY > amountThreshold) {
        setShowAmount(true);
      } else {
        setShowAmount(false);
      }

      if (window.scrollY > tabsThreshold) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-50">
      <div className="max-w-[520px] mx-auto">
        <div className="flex items-center justify-between px-4 py-2">
          <button
            title="settings"
            className="p-2 hover:bg-lightGray rounded-full transition-colors"
          >
            {/* <TbSettingsFilled className="text-blueSteel size-6" /> */}
            <GearIcon
              width={32}
              height={32}
              color="#929aa8"
              className="size-6"
            />
          </button>

          <h1 className="text-lg font-bold">{showAmount ? amount : "Home"}</h1>

          <button
            title="manage crypto"
            className="p-2 hover:bg-lightGray rounded-full transition-colors"
          >
            {/* <SiGooglecampaignmanager360 className="text-blueSteel size-5" /> */}

            <DuoToggleIcon
              width={32}
              height={32}
              color="#929aa8"
              className="size-6"
            />
          </button>
        </div>

        {showTabs && (
          <div className="flex justify-around border-b border-blueSteel/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`py-3 px-6 relative ${
                  activeTab === tab ? "text-charcoalGray" : "text-blueSteel"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] w-[25%] mx-auto bg-electricBlue" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
