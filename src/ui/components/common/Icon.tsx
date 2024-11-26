import { MenuCloseIcon } from "@/utils/icons";
import React from "react";
// import { iconRegistry, IconTypes } from "./iconRegistry";

// import { BellIcon } from "./icons/BellIcon";
// import { BackIcon } from "./icons/BackIcon";
// import { HeartIcon } from "./icons/HeartIcon";
// import { GithubIcon } from "./icons/GithubIcon";

export const iconRegistry = {
  bell: <MenuCloseIcon />,
  back: <MenuCloseIcon />,
  heart: <MenuCloseIcon />,
  github: <MenuCloseIcon />,
};

export type IconTypes = keyof typeof iconRegistry;

interface IconProps {
  /**
   * The name of the icon to render.
   */
  icon: IconTypes;

  /**
   * Optional size for the icon (applies to width and height).
   */
  size?: number;

  /**
   * Optional color for the icon.
   */
  color?: string;

  /**
   * Additional styles for the icon container.
   */
  className?: string;

  /**
   * An optional onClick handler for interactivity.
   */
  onClick?: () => void;
}

/**
 * A reusable `Icon` component for rendering SVG icons.
 */
const Icon: React.FC<IconProps> = ({ icon, size = 24, color, className, onClick }) => {
  const SvgIcon = iconRegistry[icon];

  if (!SvgIcon) {
    console.error(`Icon "${icon}" not found in the registry.`);
    return null;
  }

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        cursor: onClick ? "pointer" : "default",
        color, // This passes the color as CSS to the SVG.
      }}
    >
      {/* <SvgIcon width={size} height={size} /> */}
    </span>
  );
};

export { Icon };
