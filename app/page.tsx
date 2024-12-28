// Homepage.tsx
"use client";

import { Header } from "./_components/shared/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Footer } from "./_components/shared/Footer";
import { formatCurrency } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const tabs = ["Crypto", "NFTs"] as const;
  const [activeTab, setActiveTab] = useState<"Crypto" | "NFTs">("Crypto");
  const [hideBalance, setHideBalance] = useState(false);
  const [showHomeTabs, setShowHomeTabs] = useState(true);

  const formatWithCustomDollarSign = (amount: string) => {
    return (
      <span>
        <span className="font-sans">$</span>
        {amount.replace("$", "")}
      </span>
    );
  };

  const amount = formatCurrency(0);
  const displayAmount = hideBalance
    ? "*****"
    : formatWithCustomDollarSign(amount);

  const cryptoData = [
    {
      icon: "/btc.jpg",
      name: "BTC",
      fullName: "Bitcoin",
      price: formatWithCustomDollarSign(formatCurrency(98994.1)),
      change: "+1.34%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
    {
      icon: "/ethereum.jpg",
      name: "ETH",
      fullName: "Ethereum",
      price: formatWithCustomDollarSign(formatCurrency(3463.49)),
      change: "+0.12%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
    {
      icon: "/bnb.jpg",
      name: "BNB",
      fullName: "BNB Smart Chain",
      price: formatWithCustomDollarSign(formatCurrency(700.73)),
      change: "+1.17%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
    {
      icon: "/xrp.jpg",
      name: "XRP",
      fullName: "XRP",
      price: formatWithCustomDollarSign(formatCurrency(0.64)),
      change: "+0.85%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
    {
      icon: "/solana.jpg",
      name: "SOL",
      fullName: "Solana",
      price: formatWithCustomDollarSign(formatCurrency(112.45)),
      change: "+2.31%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
    {
      icon: "/usdt.jpg",
      name: "USDT",
      fullName: "Tron",
      price: formatWithCustomDollarSign(formatCurrency(1.0)),
      change: "+0.01%",
      amount: "0",
      value: formatWithCustomDollarSign(formatCurrency(0)),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const tabsThreshold = 250;
      setShowHomeTabs(window.scrollY <= tabsThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        amount={hideBalance ? "*****" : formatWithCustomDollarSign(amount)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="min-h-screen bg-white pb-20 overflow-auto">
        <div className="max-w-[520px] mx-auto px-4">
          {/* Search Bar */}
          <div className="relative mt-2">
            {/* <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-blueSteel size-5" /> */}

            <Image
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blueSteel size-4"
              src="/search.jpg"
              width={50}
              height={50}
              alt="Search Icon"
              quality={100}
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full bg-softWhite rounded-full py-2 pl-12 pr-4 text-[15px] outline-none"
            />
          </div>

          {/* Wallet Section */}
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div className="">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHideBalance(!hideBalance)}
                    className="hover:bg-lightGray rounded-full transition-colors"
                  >
                    <Image
                      src={hideBalance ? "/eye-slash.jpg" : "/eye.jpg"}
                      width={50}
                      height={50}
                      alt="toggle balance visibility"
                      className="h-4 w-5"
                      priority={true}
                      quality={100}
                    />
                    {/* Preload the other state of the image */}
                    <Image
                      src={!hideBalance ? "/eye-slash.jpg" : "/eye.jpg"}
                      width={50}
                      height={50}
                      alt="toggle balance visibility"
                      className="hidden"
                      priority={true}
                      quality={100}
                    />
                  </button>
                  <span className="text-[15px]">Main Wallet</span>
                  <Image
                    src="/arrow-down.jpg"
                    width={50}
                    height={50}
                    alt="arrow-down"
                    className="w-2.5 h-1.5"
                    quality={100}
                  />
                </div>
                <div>
                  <span className="text-[32px] font-semibold">
                    {displayAmount}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <button title="copy" className="icons-container">
                  <Image
                    src="/copy.jpg"
                    width={50}
                    height={50}
                    alt="copy"
                    className="size-4"
                    quality={100}
                  />
                </button>
                <button title="scan" className="icons-container">
                  <Image
                    src="/qr.jpg"
                    width={50}
                    height={50}
                    alt="qr"
                    className="size-4"
                    quality={100}
                  />
                </button>
                <button title="notification" className="icons-container">
                  <Image
                    src="/notifs.jpg"
                    width={50}
                    height={50}
                    alt="notification"
                    className="size-4"
                    quality={100}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-5 mt-6 px-4">
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/send.jpg"
                  width={50}
                  height={50}
                  alt="send"
                  className="size-5"
                  quality={100}
                />
              </div>
              <span className="text-sm">Send</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/receive.jpg"
                  width={50}
                  height={50}
                  alt="receive"
                  className="size-5"
                  quality={100}
                />
              </div>
              <span className="text-sm">Receive</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/card.jpg"
                  width={50}
                  height={50}
                  alt="buy"
                  className="size-5"
                  quality={100}
                />
              </div>
              <span className="text-sm">Buy</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/bank.jpg"
                  width={50}
                  height={50}
                  alt="sell"
                  className="size-5"
                  quality={100}
                />
              </div>
              <span className="text-sm ">Sell</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/history.jpg"
                  width={50}
                  height={50}
                  alt="history"
                  className="size-5"
                  quality={100}
                />
              </div>
              <span className="text-sm ">History</span>
            </button>
          </div>

          {/* Tabs */}
          {showHomeTabs && (
            <div className="flex justify-around  mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 relative ${
                    activeTab === tab ? "text-charcoalBlue" : "text-blueSteel"
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

          {/* Crypto List */}
          {activeTab === "Crypto" && (
            <div className="mt-4 space-y-4">
              {cryptoData.map((crypto) => (
                <Link
                  href={`/crypto/${crypto.name.toLowerCase()}`}
                  key={crypto.name}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={crypto.icon}
                        width={50}
                        height={50}
                        alt={crypto.name}
                        className="size-10"
                        quality={100}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span>{crypto.name}</span>
                        <span className="text-blueSteel text-xs bg-softWhite px-1 py-0.5 rounded">
                          {crypto.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-blueSteel text-xs">
                          {crypto.price}
                        </span>
                        <span className="text-positiveGreen text-xs">
                          {crypto.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>{crypto.amount}</div>
                    <div className="text-blueSteel text-xs mt-0.5">
                      {crypto.value}
                    </div>
                  </div>
                </Link>
              ))}

              <p className="text-electricBlue text-center text-sm cursor-pointer">
                Manage crypto
              </p>
            </div>
          )}

          {activeTab === "NFTs" && (
            <div className="mt-4 text-center text-blueSteel">No NFTs found</div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
