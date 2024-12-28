import Image from "next/image";
import Link from "next/link";
import { cryptoData } from "@/lib/data";

export default async function CryptoDetail({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const slug = (await params).symbol;

  const getCryptoData = (symbol: string) => {
    return cryptoData.find((crypto) => crypto.name === symbol.toUpperCase());
  };

  const crypto = getCryptoData(slug.toUpperCase());

  if (!crypto) {
    return <div>Cryptocurrency not found</div>;
  }

  // const numericPrice = parseFloat(
  //   crypto.price.props.children[1].replace(/,/g, "")
  // );

  return (
    <>
      <header className="bg-white sticky top-0 left-0 right-0 z-50 [overscroll-behavior-y:none]">
        <div className="max-w-[520px] mx-auto">
          <div className="flex items-center justify-between px-4 py-2">
            <Link href="/">
              <Image
                src="/arrow-back.jpg"
                width={50}
                height={50}
                alt="home"
                className="size-4"
                quality={100}
              />
            </Link>

            <div className="ml-10 flex-1 flex flex-col items-center">
              <span>{crypto.name}</span>
              <div className="text-blueSteel font-normal text-sm divide-x divide-blueSteel/30">
                <span className="px-2">COIN</span>
                <span className="px-2">{crypto.name}</span>
              </div>
            </div>

            <div className="space-x-4">
              <button title="nofitifcation">
                <Image
                  src="/notif-off.jpg"
                  width={50}
                  height={50}
                  alt="notification"
                  className="size-4"
                  quality={100}
                />
              </button>

              <button title="info">
                <Image
                  src="/info-light.jpg"
                  width={50}
                  height={50}
                  alt="info"
                  className="size-4"
                  quality={100}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen max-w-[520px] mx-auto px-4 pb-20">
        <div className="bg-[#fdfbee] flex items-start px-4 py-2 space-x-2">
          <div>
            <Image
              src="/info-orange.jpg"
              width={50}
              height={50}
              alt="warning"
              quality={100}
              className="size-4"
            />
          </div>
          <div className="text-xs text-[#c1a94f] font-normal space-y-2 flex flex-col">
            <span>
              The {crypto.name} network requires a one-time fee of 1{" "}
              {crypto.name} for <br /> account activation
            </span>
            <span>
              <Link href="#" className="text-[#0701ff] font-medium">
                Learn more &gt;
              </Link>
            </span>
          </div>
        </div>

        {/* Crypto Info */}
        <div className="mt-4 flex flex-col items-center">
          <Image src={crypto.icon} width={50} height={150} alt={crypto.icon} />
          <div className="text-[32px] font-semibold">
            <span>{crypto.amount}</span> <span>{crypto.name}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between px-8 border-b border-blueSteel/30 pb-10">
          <button className="flex flex-col items-center space-y-2">
            <div className="bg-softWhite p-4 rounded-full">
              <Image
                src="/send.jpg"
                width={50}
                height={50}
                alt="Send"
                className="size-5"
                quality={100}
              />
            </div>
            <span className="text-sm">Send</span>
          </button>

          <button className="flex flex-col items-center space-y-2">
            <div className="bg-softWhite p-4 rounded-full">
              <Image
                src="/receive.jpg"
                width={50}
                height={50}
                alt="Receive"
                className="size-5"
                quality={100}
              />
            </div>
            <span className="text-sm">Receive</span>
          </button>

          <button className="flex flex-col items-center space-y-2">
            <div className="bg-softWhite p-4 rounded-full">
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

          <button className="flex flex-col items-center space-y-2">
            <div className="bg-softWhite p-4 rounded-full">
              <Image
                src="/bank.jpg"
                width={50}
                height={50}
                alt="sell"
                className="size-5"
                quality={100}
              />
            </div>
            <span className="text-sm">Sell</span>
          </button>
        </div>

        {/* Transactions Section */}
        <div className="mt-12 flex flex-col items-center text-center text-blueSteel font-normal text-sm">
          <Image
            src="/search-doc.jpg"
            width={100}
            height={100}
            alt="No transactions"
            className="mb-4"
          />
          <p className="mb-1">Transactions will appear here.</p>
          <p>
            Can&apos;t find your transaction?{" "}
            <Link href="#" className="text-blue-600">
              Check explorer
            </Link>
          </p>
        </div>

        {/* Buy Button */}
        <div className="mt-8 mb-8 flex justify-center">
          <button className=" bg-blue-600 text-white py-2 px-8 rounded-xl">
            Buy {crypto.name}
          </button>
        </div>

        {/* Price Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-[520px] mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Current {crypto.name} price
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">${crypto.price}</span>
                <span className="text-green-500 text-sm">
                  +{crypto.change}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
