// Homepage.tsx
"use client";

import { Header } from "./_components/shared/Header";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaBitcoin, FaCreditCard } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import EthereumIcon from "./_components/ui/EthereumIcon";

export default function Home() {
  const tabs = ["Crypto", "NFTs"] as const;
  const [activeTab, setActiveTab] = useState<"Crypto" | "NFTs">("Crypto");
  const [hideBalance, setHideBalance] = useState(false);
  const [showHomeTabs, setShowHomeTabs] = useState(true);
  const amount = "$0.00";
  const displayAmount = hideBalance ? "*****" : amount;

  useEffect(() => {
    const handleScroll = () => {
      const tabsThreshold = 250;
      setShowHomeTabs(window.scrollY <= tabsThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cryptoData = [
    {
      icon: <FaBitcoin className="text-btcOrange size-10" />,
      name: "BTC",
      fullName: "Bitcoin",
      price: "$98,994.10",
      change: "+1.34%",
      amount: "0",
      value: "$0.00",
    },
    {
      // icon: <FaEthereum className="text-ethBlue size-10" />,
      icon: <EthereumIcon className="size-10" />,
      name: "ETH",
      fullName: "Ethereum",
      price: "$3,463.49",
      change: "+0.12%",
      amount: "0",
      value: "$0.00",
    },
    {
      icon: <SiBinance className="text-bnbYellow size-10" />,
      name: "BNB",
      fullName: "BNB Smart Chain",
      price: "$700.73",
      change: "+1.17%",
      amount: "0",
      value: "$0.00",
    },
  ];

  return (
    <>
      <Header
        amount={displayAmount}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="min-h-screen bg-white pb-20">
        <div className="max-w-[520px] mx-auto px-4">
          {/* Search Bar */}
          <div className="relative mt-2">
            {/* <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-blueSteel size-5" /> */}

            <Image
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blueSteel size-5"
              src="/search.png"
              width={64}
              height={64}
              alt="Search Icon"
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
                    {hideBalance ? (
                      <BsEyeSlashFill className="text-blueSteel size-5" />
                    ) : (
                      <BsEyeFill className="text-blueSteel size-5" />
                    )}
                  </button>
                  <span className="text-[15px]">Main Wallet</span>
                  <TiArrowSortedDown className="text-blueSteel size-4" />
                </div>
                <div className="">
                  <span className="text-[32px] font-semibold">
                    {displayAmount}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <button title="copy" className="icons-container">
                  <Image
                    src="/copy.png"
                    width={50}
                    height={50}
                    alt="copy"
                    className="size-4"
                  />
                </button>
                <button title="scan" className="icons-container">
                  <Image
                    src="/qr.png"
                    width={50}
                    height={50}
                    alt="qr"
                    className="size-4"
                  />
                </button>
                <button title="notification" className="icons-container">
                  <Image
                    src="/notifs.png"
                    width={50}
                    height={50}
                    alt="notification"
                    className="size-4"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-5 mt-6 px-4">
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <FaArrowUp className="size-5" />
              </div>
              <span className="text-sm ">Send</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <FaArrowDown className="size-5 " />
              </div>
              <span className="text-sm">Receive</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <FaCreditCard className="size-5 " />
              </div>
              <span className="text-sm">Buy</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                <Image
                  src="/bank.png"
                  width={50}
                  height={50}
                  alt="transaction history"
                  className="size-5"
                />
              </div>
              <span className="text-sm ">Sell</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="p-4 bg-softWhite rounded-full">
                {/* <MdHistory className="size-6 " /> */}
                <Image
                  src="/deadline.png"
                  width={50}
                  height={50}
                  alt="transaction history"
                  className="size-5"
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
                <div
                  key={crypto.name}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{crypto.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{crypto.name}</span>
                        <span className="text-blueSteel text-[13px] bg-softWhite px-1 py-0.5 rounded">
                          {crypto.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-blueSteel text-[15px]">
                          {crypto.price}
                        </span>
                        <span className="text-positiveGreen text-[15px]">
                          {crypto.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{crypto.amount}</div>
                    <div className="text-blueSteel text-[15px] mt-0.5">
                      {crypto.value}
                    </div>
                  </div>
                </div>
              ))}

              <p className="text-electricBlue text-center cursor-pointer">
                Manage crypto
              </p>
            </div>
          )}

          {activeTab === "NFTs" && (
            <div className="mt-4 text-center text-blueSteel">No NFTs found</div>
          )}
        </div>
      </main>
    </>
  );
}
