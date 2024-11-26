"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/ui/components";
import { MenuCloseIcon, MenuOpenIcon } from "@/utils/icons";

const defaultRoute = "";

const links = [
  { url: `${defaultRoute}home`, label: "inicio" },
  { url: `${defaultRoute}resume`, label: "curriculum" },
  { url: `${defaultRoute}projects`, label: "proyectos" },
  { url: `${defaultRoute}memory-game`, label: "juegos" },
  { url: `${defaultRoute}about`, label: "sobre mí" },
];

const NavbarPortal: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openMenu) {
        handleCloseMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  const menuContent = (
    <div className="bg-stone-950/80 fixed top-0 left-0 h-full w-full">
      <nav className="bg-stone-200 dark:bg-stone-800 absolute rounded-l-xl h-full w-2/3 sm:w-2/4 md:w-1/3 lg:w-1/4 right-0 flex flex-col p-1 md:px-2 border-l-2 border-y-2 border-sky-800 transition-all">
        <header className="border-b-2 border-sky-700 flex justify-between items-center pt-1 pb-2 pl-2 pr-1 md:pr-0 mb-2">
          <h2 className="text-xl uppercase font-bold">menú</h2>

          <Button
            title={"cerrar menú (Esc)"}
            text={"cerrar"}
            rightIcon={<MenuCloseIcon />}
            styles={"self-end"}
            onClick={handleCloseMenu}
          />
        </header>

        <section>
          <ul className="space-y-2 text-stone-900 dark:text-stone-200 font-semibold">
            {links.map((option, i) => (
              <li key={i} className={`${pathname === "/" + option.url ? "bg-sky-900 text-stone-200" : "hover:bg-stone-400 hover:dark:bg-stone-700"}`}>
                <Link
                  href={option.url}
                  onClick={handleCloseMenu}
                  className="text-xl py-1 px-2 flex items-center gap-2"
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );

  return (
    <>
      <Button
        title={"abrir menú"}
        text={"menú"}
        rightIcon={<MenuOpenIcon />}
        styles={"fixed right-2 top-2 print:hidden"}
        onClick={handleOpenMenu}
      />

      {openMenu && createPortal(menuContent, document.getElementById("navbar-portal-root")!)}
    </>
  );
};

export { NavbarPortal };
