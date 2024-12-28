export const formatWithCustomDollarSign = (amount: string) => {
  return (
    <span>
      <span className="font-sans">$</span>
      {amount.replace("$", "")}
    </span>
  );
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const cryptoData = [
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
