"use client";

import { TbSettingsFilled } from "react-icons/tb";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { IoCopyOutline } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);
  const amount = "$0.00";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayAmount = hideBalance ? "●●●●●●" : amount;

  return (
    <header className="bg-white border-b border-slateGray/10 px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[520px] mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button
            title="settings"
            className="p-2 hover:bg-slateGray/5 rounded-full transition-colors"
          >
            <TbSettingsFilled className="text-darkSlateGray size-4" />
          </button>

          <h1 className="text-charcoalGray text-md font-semibold select-none">
            {scrolled ? displayAmount : "Home"}
          </h1>

          <button
            title="manage crypto"
            className="p-2 hover:bg-slateGray/5 rounded-full transition-colors"
          >
            <SiGooglecampaignmanager360 className="text-darkSlateGray size-4" />
          </button>
        </div>

        {/* Wallet Section */}
        <div className="mt-4">
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
      </div>
    </header>
  );
}
