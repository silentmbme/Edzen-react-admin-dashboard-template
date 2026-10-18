import { cn } from "@/lib/utils";
import { useId } from "react";
import { isDark, useEdzenSettings } from "@/lib/edzen-settings";
import logo from "@/assets/images/logos/edzen-logo.png";
import icon from "@/assets/images/logos/edzen-icon.png";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  darkSurface?: boolean;
};

export function BrandLogo({
  variant = "full",
  className,
  darkSurface,
}: BrandLogoProps) {
  const settings = useEdzenSettings();
  const useDarkAsset = darkSurface ?? isDark(settings);
  const id = useId().replace(/[^\w-]/g, "");
  const symbolId = `${id}-edzen-symbol`;
  const letteringId = `${id}-edzen-lettering`;
  const whiteId = `${id}-edzen-white`;
  const iconOnly = variant === "icon";

  return (
    <svg
      role="img"
      aria-label="Edzen"
      viewBox={iconOnly ? "234 253 785 797" : "145 131 1882 503"}
      width={iconOnly ? 785 : 1882}
      height={iconOnly ? 797 : 503}
      data-dark-surface={useDarkAsset ? "true" : "false"}
      className={cn("brand-logo block max-w-full", className)}
    >
      {iconOnly ? (
        <image href={icon} width={1254} height={1254} />
      ) : (
        <>
          <defs>
            <clipPath id={symbolId}>
              <rect width={680} height={741} />
            </clipPath>
            <clipPath id={letteringId}>
              <rect x={680} width={1442} height={741} />
            </clipPath>
            <filter id={whiteId} colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
              />
            </filter>
          </defs>
          <image
            href={logo}
            width={2122}
            height={741}
            className="brand-logo-light"
          />
          <image
            href={logo}
            width={2122}
            height={741}
            clipPath={`url(#${symbolId})`}
            className="brand-logo-dark-symbol"
          />
          <image
            href={logo}
            width={2122}
            height={741}
            clipPath={`url(#${letteringId})`}
            filter={`url(#${whiteId})`}
            className="brand-logo-dark-lettering"
          />
        </>
      )}
    </svg>
  );
}
