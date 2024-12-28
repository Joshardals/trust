"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cryptoData } from "@/lib/data";

interface CryptoDetailProps {
  params: {
    symbol: string;
  };
}

export default function CryptoDetail({ params }: CryptoDetailProps) {
//   const [timeFrame, setTimeFrame] = useState("1D");

  const getCryptoData = (symbol: string) => {
    return cryptoData.find((crypto) => crypto.name === symbol.toUpperCase());
  };

  const crypto = getCryptoData(params.symbol.toUpperCase());

  if (!crypto) {
    return <div>Cryptocurrency not found</div>;
  }

  const numericPrice = parseFloat(
    crypto.price.props.children[1].replace(/,/g, "")
  );

  return (
    <div className="min-h-screen bg-white max-w-[520px] mx-auto">
      {/* Header */}
      <div className="p-4 flex items-center gap-4 border-b border-gray-100">
        <Link href="/" className="text-gray-600">
          <Image
            src="/arrow-back.jpg"
            alt="Back"
            width={50}
            height={50}
            className="size-5"
            quality={100}
          />
        </Link>
        <div className="flex-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[15px] text-gray-500">COIN</span>
            <span className="text-[15px] text-gray-500">{crypto.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button title="notification">
            <Image
              src="/notif-off.jpg"
              alt="Refresh"
              width={50}
              height={50}
              className="size-4"
              quality={100}
            />
          </button>
          <button title="Information">
            <Image
              src="/info-light.jpg"
              alt="Info"
              width={50}
              height={50}
              className="size-4"
              quality={100}
            />
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-[#FFF9E6] mx-4 mt-4 p-3 rounded-lg">
        <div className="flex gap-2">
          <Image
            src="/warning.jpg"
            alt="Warning"
            width={20}
            height={20}
            className="size-5 flex-shrink-0"
          />
          <div>
            <p className="text-[#B78103] text-[13px]">
              The {crypto.name} network requires a one-time fee of 1{" "}
              {crypto.name} for account activation.
            </p>
            <button className="text-[#0052FF] text-[13px] mt-1">
              Learn more ›
            </button>
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="mt-8 text-center">
        <Image
          src={crypto.icon}
          alt={crypto.name}
          width={48}
          height={48}
          className="mx-auto mb-4"
        />
        <h2 className="text-[32px] font-semibold">0 {crypto.name}</h2>
        <p className="text-gray-500 text-[15px]">≈ $0.00</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-8 px-6">
        {[
          { name: "Send", icon: "/send.jpg" },
          { name: "Receive", icon: "/receive.jpg" },
          { name: "Buy", icon: "/card.jpg" },
          { name: "Sell", icon: "/bank.jpg" },
        ].map((action) => (
          <button key={action.name} className="flex flex-col items-center">
            <div className="bg-[#F5F7F9] p-4 rounded-full mb-2">
              <Image
                src={action.icon}
                alt={action.name}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <span className="text-[13px]">{action.name}</span>
          </button>
        ))}
      </div>

      {/* Transactions Section */}
      <div className="mt-12 text-center px-4">
        <Image
          src="/search-doc.jpg"
          alt="No transactions"
          width={48}
          height={48}
          className="mx-auto mb-2"
        />
        <p className="text-gray-500 text-[15px]">
          Transactions will appear here.
        </p>
        <p className="text-[13px] mt-1">
          Can't find your transaction?{" "}
          <button className="text-[#0052FF]">Check explorer</button>
        </p>
      </div>

      {/* Price Section */}
      <div className="mt-8 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[15px]">Current {crypto.name} price</h3>
          <button title="close">
            <Image src="/close.jpg" alt="Close" width={20} height={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[24px] font-semibold">
            ${numericPrice.toFixed(2)}
          </span>
          <span className="text-[#098551] text-[15px]">{crypto.change}</span>
        </div>
      </div>
    </div>
  );
}
