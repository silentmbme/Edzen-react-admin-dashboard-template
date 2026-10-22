import headphones from "@/assets/images/products/wireless-headphones-pro.png";
import lamp from "@/assets/images/products/aurora-desk-lamp.png";
import backpack from "@/assets/images/products/leather-backpack.png";
import watch from "@/assets/images/products/smart-watch-series-x.png";

export const commerceProducts = [
  {
    name: "Wireless Headphones Pro",
    sku: "AUD-104",
    image: headphones,
    price: 149,
    units: 284,
    margin: 58,
    stock: 42,
    category: "Audio",
    color: 0,
  },
  {
    name: "Aurora Desk Lamp",
    sku: "LGT-208",
    image: lamp,
    price: 89,
    units: 196,
    margin: 64,
    stock: 18,
    category: "Lighting",
    color: 1,
  },
  {
    name: "Leather Backpack",
    sku: "BAG-312",
    image: backpack,
    price: 129,
    units: 142,
    margin: 46,
    stock: 8,
    category: "Accessories",
    color: 2,
  },
  {
    name: "Smart Watch Series X",
    sku: "WCH-416",
    image: watch,
    price: 199,
    units: 168,
    margin: 52,
    stock: 64,
    category: "Wearables",
    color: 3,
  },
];
export const commerceOrders = [
  {
    id: "#NV-10482",
    customer: "Olivia Chen",
    value: 548,
    items: 3,
    status: "New",
    time: "2 min ago",
    method: "Express",
  },
  {
    id: "#NV-10481",
    customer: "Marcus Rivera",
    value: 249,
    items: 1,
    status: "Paid",
    time: "7 min ago",
    method: "Standard",
  },
  {
    id: "#NV-10480",
    customer: "Ava Patel",
    value: 1290,
    items: 4,
    status: "Packed",
    time: "12 min ago",
    method: "Express",
  },
  {
    id: "#NV-10479",
    customer: "Ryan Cooper",
    value: 326,
    items: 2,
    status: "Paid",
    time: "18 min ago",
    method: "Standard",
  },
];
export const commerceAccents = [
  {
    bg: "bg-[var(--chart-1)]",
    text: "text-[var(--chart-1)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-1)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-2)]",
    text: "text-[var(--chart-2)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-2)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-3)]",
    text: "text-[var(--chart-3)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-3)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-4)]",
    text: "text-[var(--chart-4)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-4)_10%,transparent)]",
  },
] as const;
