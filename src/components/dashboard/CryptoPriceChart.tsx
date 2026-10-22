import { useId } from "react";
import type { CryptoAsset, CryptoRange } from "@/data/crypto-dashboard-data";
import {
  getCryptoHistory,
  cryptoMoney,
  cryptoCompact,
} from "@/data/crypto-dashboard-data";

export function CryptoPriceChart({
  asset,
  range,
}: {
  asset: CryptoAsset;
  range: CryptoRange;
}) {
  const id = useId();
  const history = getCryptoHistory(asset, range);
  // Build illustrative OHLC candles around the existing sample closing prices.
  const candles = history.prices.map((point, i) => {
    const open = history.prices[i - 1]?.y ?? point.y * 0.997;
    const spread = asset.price * (0.0015 + (i % 3) * 0.0006);
    return {
      x: point.x,
      open,
      close: point.y,
      high: Math.max(open, point.y) + spread,
      low: Math.min(open, point.y) - spread,
    };
  });
  const min = Math.min(...candles.map((c) => c.low)),
    max = Math.max(...candles.map((c) => c.high));
  const y = (value: number) => 30 + ((max - value) / (max - min)) * 225;
  const maxVolume = Math.max(...history.volume.map((v) => v.y));
  const step = 600 / candles.length,
    width = Math.min(18, step * 0.55);
  return (
    <div className="min-w-0">
      <svg
        viewBox="0 0 710 350"
        className="block h-auto w-full"
        role="img"
        aria-labelledby={id}
      >
        <title id={id}>
          {`${asset.name} illustrative OHLC price and volume for ${range}. Closing price ${cryptoMoney(asset.price)}.`}
        </title>
        {Array.from({ length: 5 }, (_, i) => {
          const value = max - ((max - min) * i) / 4;
          return (
            <g key={i}>
              <line
                x1="20"
                x2="625"
                y1={y(value)}
                y2={y(value)}
                stroke="var(--border)"
                strokeDasharray="5 5"
              />
              <text
                x="638"
                y={y(value) + 4}
                fill="var(--muted-foreground)"
                fontSize="11"
              >
                ${cryptoCompact(value)}
              </text>
            </g>
          );
        })}
        {candles.map((c, i) => {
          const x = 30 + i * step + step / 2,
            color = c.close >= c.open ? "var(--chart-1)" : "var(--chart-2)";
          return (
            <g key={c.x}>
              <title>
                {`${new Date(c.x).toISOString().slice(0, 16).replace("T", " ")} UTC · Open ${cryptoMoney(c.open)} · High ${cryptoMoney(c.high)} · Low ${cryptoMoney(c.low)} · Close ${cryptoMoney(c.close)}`}
              </title>
              <line
                x1={x}
                x2={x}
                y1={y(c.high)}
                y2={y(c.low)}
                stroke={color}
                strokeWidth="1.5"
              />
              <rect
                x={x - width / 2}
                y={Math.min(y(c.open), y(c.close))}
                width={width}
                height={Math.max(2, Math.abs(y(c.open) - y(c.close)))}
                rx="1"
                fill={color}
              />
              <rect
                x={x - width / 2}
                y={310 - ((history.volume[i]?.y ?? 0) / maxVolume) * 34}
                width={width}
                height={((history.volume[i]?.y ?? 0) / maxVolume) * 34}
                fill={color}
                opacity="0.3"
              />
            </g>
          );
        })}
        <line x1="20" x2="625" y1="269" y2="269" stroke="var(--border)" />
        <text x="638" y="295" fill="var(--muted-foreground)" fontSize="10">
          Volume
        </text>
        {[
          0,
          Math.floor(candles.length / 3),
          Math.floor((candles.length * 2) / 3),
          candles.length - 1,
        ].map((i) => (
          <text
            key={i}
            x={30 + i * step + step / 2}
            y="337"
            textAnchor="middle"
            fill="var(--muted-foreground)"
            fontSize="11"
          >
            {new Date(candles[i]!.x).toLocaleString("en-US", {
              timeZone: "UTC",
              ...(range === "24h"
                ? { hour: "2-digit", minute: "2-digit", hour12: false }
                : { month: "short", day: "numeric" }),
            })}
          </text>
        ))}
      </svg>
      <p className="mt-1 text-[11px] text-muted-foreground">
        Illustrative OHLC candles · UTC · volume bars show relative activity
      </p>
    </div>
  );
}
