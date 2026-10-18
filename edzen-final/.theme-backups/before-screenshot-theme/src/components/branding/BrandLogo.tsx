import { cn } from "@/lib/utils";
import { isDark, useEdzenSettings } from "@/lib/edzen-settings";
import logoLight from "@/assets/images/logos/logo-light.png";
import logoDark from "@/assets/images/logos/logo-dark.png";
import logoIconLight from "@/assets/images/logos/logo-icon-light.png";
import logoIconDark from "@/assets/images/logos/logo-icon-dark.png";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  darkSurface?: boolean;
};

export function BrandLogo({ variant = "full", className, darkSurface }: BrandLogoProps) {
  const settings = useEdzenSettings();
  const useDarkAsset = darkSurface ?? isDark(settings);
  const src =
    variant === "icon"
      ? useDarkAsset
        ? logoIconDark
        : logoIconLight
      : useDarkAsset
        ? logoDark
        : logoLight;

  return <img src={src} alt="Edzen" className={cn("block max-w-full object-contain", className)} />;
}
