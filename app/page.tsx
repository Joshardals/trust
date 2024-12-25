"use client";

import { Header } from "./_components/shared/Header";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { cryptoData } from "@/lib/data";

export default function Home() {
  const tabs = ["Crypto", "NFTs"] as const;
  const [activeTab, setActiveTab] = useState<"Crypto" | "NFTs">("Crypto");
  const [hideBalance, setHideBalance] = useState(false);
  const [showHomeTabs, setShowHomeTabs] = useState(true);
  const amount = "$0.00";
  const displayAmount = hideBalance ? "*****" : amount;

  useEffect(() => {
    const handleScroll = () => {
      const tabsThreshold = 80;
      setShowHomeTabs(window.scrollY <= tabsThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        amount={displayAmount}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="min-h-[200vh] bg-white pb-20">
        {/* Wallet Section */}
        <div className="max-w-[520px] mx-auto px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHideBalance(!hideBalance)}
              className="p-1 hover:bg-slateGray/5 rounded-full transition-colors"
            >
              {hideBalance ? (
                <IoEyeOffOutline className="text-darkSlateGray size-5" />
              ) : (
                <IoEyeOutline className="text-darkSlateGray size-5" />
              )}
            </button>
            <span className="text-darkSlateGray text-sm">Main Wallet</span>
            <span className="text-slateGray">▼</span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="text-charcoalGray text-3xl font-semibold">
                {displayAmount}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                title="copy address"
                className="p-2 bg-slateGray/5 rounded-lg transition-colors"
              >
                <IoCopyOutline className="text-darkSlateGray size-5" />
              </button>
              <button
                title="scan QR"
                className="p-2 bg-slateGray/5 rounded-lg transition-colors"
              >
                <LuScanLine className="text-darkSlateGray size-5" />
              </button>
              <button
                title="notifications"
                className="p-2 bg-slateGray/5 rounded-lg transition-colors"
              >
                <IoNotificationsOutline className="text-darkSlateGray size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-[520px] mx-auto px-4 mt-4">
          {showHomeTabs && (
            <div className="flex justify-around gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 relative font-medium ${
                    activeTab === tab ? "text-charcoalGray" : "text-slateGray"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 w-[40%] mx-auto bg-seaGreen rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Crypto Listings */}
          {activeTab === "Crypto" && (
            <div className="mt-4 space-y-4">
              {cryptoData.map((crypto) => (
                <div
                  key={crypto.name}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{crypto.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-charcoalGray">
                          {crypto.name}
                        </span>
                        <span className="text-slateGray bg-darkSlateGray/5 text-sm rounded-md p-[0.15rem]">
                          {crypto.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slateGray">{crypto.price}</span>
                        <span className="text-seaGreen">{crypto.change}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-charcoalGray">{crypto.amount}</div>
                    <div className="text-slateGray text-sm">{crypto.value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* NFTs Tab Content */}
          {activeTab === "NFTs" && (
            <div className="mt-4 text-center text-slateGray">No NFTs found</div>
          )}
        </div>
      </main>
    </>
  );
}
