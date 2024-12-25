"use client";

import { Header } from "./_components/shared/Header";
import { useState } from "react";
import Image from "next/image";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Crypto");

  const cryptoData = [
    {
      icon: <FaBitcoin className="text-[#F7931A] size-8" />,
      name: "BTC",
      fullName: "Bitcoin",
      price: "$98,623.51",
      change: "+4.08%",
      amount: "0",
      value: "$0.00",
    },
    {
      icon: <FaEthereum className="text-[#627EEA] size-8" />,
      name: "ETH",
      fullName: "Ethereum",
      price: "$3,489.55",
      change: "+2.16%",
      amount: "0",
      value: "$0.00",
    },
    {
      icon: <SiBinance className="text-[#F3BA2F] size-8" />,
      name: "BNB",
      fullName: "BNB Smart Chain",
      price: "$696.52",
      change: "+0.40%",
      amount: "0",
      value: "$0.00",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-[140px] pb-20">
      <Header />

      {/* Tabs */}
      <div className="max-w-[520px] mx-auto px-4 mt-4">
        <div className="flex gap-6 border-b border-slateGray/10">
          {["Crypto", "NFTs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 relative ${
                activeTab === tab ? "text-charcoalGray" : "text-slateGray"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-seaGreen rounded-full" />
              )}
            </button>
          ))}
        </div>

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
                      <span className="text-slateGray text-sm">
                        {crypto.fullName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-charcoalGray">{crypto.price}</span>
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
  );
}
