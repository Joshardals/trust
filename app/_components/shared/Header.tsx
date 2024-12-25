"use client";

import { TbSettingsFilled } from "react-icons/tb";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { useEffect, useState } from "react";

interface HeaderProps {
  amount: number | string;
  activeTab: "Crypto" | "NFTs";
  onTabChange: (tab: "Crypto" | "NFTs") => void;
}

export function Header({ amount, activeTab, onTabChange }: HeaderProps) {
  const [showAmount, setShowAmount] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const tabs = ["Crypto", "NFTs"] as const;

  useEffect(() => {
    const handleScroll = () => {
      const amountThreshold = 52;
      const tabsThreshold = 80;

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
        <div className="flex items-center justify-between px-4 py-3">
          <button
            title="settings"
            className="p-2 hover:bg-slateGray/5 rounded-full transition-colors"
          >
            <TbSettingsFilled className="text-darkSlateGray size-5" />
          </button>

          <h1 className="text-charcoalGray text-md font-semibold select-none">
            {showAmount ? amount : "Home"}
          </h1>

          <button
            title="manage crypto"
            className="p-2 hover:bg-slateGray/5 rounded-full transition-colors"
          >
            <SiGooglecampaignmanager360 className="text-darkSlateGray size-5" />
          </button>
        </div>

        {showTabs && (
          <div className="flex justify-around border-b border-slateGray/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`py-3 px-6 relative font-medium ${
                  activeTab === tab ? "text-charcoalGray" : "text-slateGray"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 w-[22.2%] mx-auto bg-seaGreen rounded-full" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
