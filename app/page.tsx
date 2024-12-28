// Homepage.tsx
"use client";

import { Header } from "./_components/shared/Header";
import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { Footer } from "./_components/shared/Footer";
import Link from "next/link";

interface CryptoData {
  id: string;
  icon: string;
  name: string;
  fullName: string;
  price: number;
  price_formatted: JSX.Element;
  change_24h: number;
  amount: string;
  value: JSX.Element;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export default function Home() {
  const tabs = ["Crypto", "NFTs"] as const;
  const [activeTab, setActiveTab] = useState<"Crypto" | "NFTs">("Crypto");
  const [hideBalance, setHideBalance] = useState(false);
  const [showHomeTabs, setShowHomeTabs] = useState(true);
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  // const [totalBalance, setTotalBalance] = useState(0);

  const totalBalance = 0;
  const formatWithCustomDollarSign = (amount: string) => {
    return (
      <span>
        <span className="font-sans">$</span>
        {amount.replace("$", "")}
      </span>
    );
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,solana,tether&vs_currencies=usd&include_24hr_change=true",
          { next: { revalidate: 60 } }
        );
        const data = await response.json();

        const cryptoMapping = [
          { id: "bitcoin", name: "BTC", fullName: "Bitcoin", icon: "/btc.jpg" },
          {
            id: "ethereum",
            name: "ETH",
            fullName: "Ethereum",
            icon: "/ethereum.jpg",
          },
          {
            id: "binancecoin",
            name: "BNB",
            fullName: "BNB Smart Chain",
            icon: "/bnb.jpg",
          },
          { id: "ripple", name: "XRP", fullName: "XRP", icon: "/xrp.jpg" },
          {
            id: "solana",
            name: "SOL",
            fullName: "Solana",
            icon: "/solana.jpg",
          },
          { id: "tether", name: "USDT", fullName: "Tether", icon: "/usdt.jpg" },
        ];

        const formattedData = cryptoMapping.map((coin) => ({
          id: coin.id,
          icon: coin.icon,
          name: coin.name,
          fullName: coin.fullName,
          price: data[coin.id].usd,
          price_formatted: formatWithCustomDollarSign(
            formatCurrency(data[coin.id].usd)
          ),
          change_24h: data[coin.id].usd_24h_change,
          amount: "0",
          value: formatWithCustomDollarSign(formatCurrency(0)),
        }));

        setCryptoData(formattedData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

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
        amount={
          hideBalance
            ? "*****"
            : formatWithCustomDollarSign(formatCurrency(totalBalance))
        }
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="min-h-screen bg-white pb-20 overflow-auto">
        <div className="max-w-[520px] mx-auto px-4">
          <div className="relative mt-2">
            <Image
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blueSteel size-4"
              src="/search.jpg"
              width={50}
              height={50}
              alt="Search Icon"
              quality={100}
              priority={true}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-softWhite rounded-full py-2 pl-12 pr-4 text-[15px] outline-none"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div className="">
                <div className="flex items-center gap-2">
                  <button
                    title="hide balance"
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
                    priority={true}
                  />
                </div>
                <div>
                  <span className="text-[32px] font-semibold">
                    {hideBalance
                      ? "*****"
                      : formatWithCustomDollarSign(
                          formatCurrency(totalBalance)
                        )}
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
                    priority={true}
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
                    priority={true}
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
                    priority={true}
                  />
                </button>
              </div>
            </div>
          </div>

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
                  priority={true}
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
                  priority={true}
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
                  priority={true}
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
                  priority={true}
                />
              </div>
              <span className="text-sm">Sell</span>
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
                  priority={true}
                />
              </div>
              <span className="text-sm">History</span>
            </button>
          </div>

          {showHomeTabs && (
            <div className="flex justify-around mt-6">
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
                        priority={true}
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
                          {crypto.price_formatted}
                        </span>
                        <span
                          className={`text-xs ${
                            crypto.change_24h >= 0
                              ? "text-positiveGreen"
                              : "text-negativeRed"
                          }`}
                        >
                          {crypto.change_24h.toFixed(2)}%
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
