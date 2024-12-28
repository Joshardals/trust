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

  //   const numericPrice = parseFloat(
  //     crypto.price.props.children[1].replace(/,/g, "")
  //   );

  return (
    <>
      <header className="bg-white sticky top-0 left-0 right-0 z-50 [overscroll-behavior-y:none]">
        <div className="max-w-[520px] mx-auto">
          <div className="flex items-center justify-between px-4 py-2">
            <Link
              href="/"
              className="p-2 hover:bg-lightGray rounded-full transition-colors"
            >
              <Image
                src="/arrow-back.jpg"
                width={50}
                height={50}
                alt="home"
                className="size-4"
                quality={100}
              />
            </Link>

            <div className="ml-4 flex-1 flex flex-col items-center">
              <span>{crypto.name}</span>
              <div className="text-blueSteel text-sm divide-x divide-blueSteel/30">
                <span className="px-2">COIN</span>
                <span className="px-2">{crypto.name}</span>
              </div>
            </div>

            <div className="space-x-4">
              <button
                title="nofitifcation"
                className="p-2 hover:bg-lightGray rounded-full transition-colors"
              >
                <Image
                  src="/notif-off.jpg"
                  width={50}
                  height={50}
                  alt="notification"
                  className="size-4"
                  quality={100}
                />
              </button>

              <button
                title="manage crypto"
                className="p-2 hover:bg-lightGray rounded-full transition-colors"
              >
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
      <main className="min-h-screen max-w-[520px] mx-auto"></main>
    </>
  );
}
