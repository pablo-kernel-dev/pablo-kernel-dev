import Image from "next/image";

import htmlIcon from "@/utils/icons/html-icon.png";
import cssIcon from "@/utils/icons/css-icon.png";
import jsIcon from "@/utils/icons/javascript-icon.png";
import phpIcon from "@/utils/icons/php-icon.png";
import mysqlIcon from "@/utils/icons/mysql-icon.png";
import csharpIcon from "@/utils/icons/c-sharp-icon.png";
import kotlinIcon from "@/utils/icons/kotlin-icon.png";

const icons: Record<string, string> = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  php: phpIcon,
  mysql: mysqlIcon,
  csharp: csharpIcon,
  kotlin: kotlinIcon,
};

interface IconProps {
  name: string;
  height?: number;
  width?: number;
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24 }) => {
  const iconSrc = icons[name];

  if (!iconSrc) {
    console.warn(`Icono no encontrado: ${name}`);
    return null; // No renderiza nada si el icono no existe
  }

  return (
    <Image
      src={iconSrc}
      alt={`${name} icon`}
      width={width}
      height={height}
    />
  );
};

export { Icon };
