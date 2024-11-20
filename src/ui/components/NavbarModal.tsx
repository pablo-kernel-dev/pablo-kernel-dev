import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/ui/components';
import { MenuCloseIcon, MenuOpenIcon } from '@/utils/icons';

const defaultRoute = '';

const links = [
  {
    url: `${defaultRoute}home`,
    label: 'inicio',
  },
  {
    url: `${defaultRoute}app-projects`,
    label: 'proyectos',
  },
  {
    url: `${defaultRoute}about`,
    label: 'sobre mí',
  },
];

const NavbarModal = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <Button
        onClick={() => setOpenMenu(!openMenu)}
        rightIcon={<MenuOpenIcon />}
        text={'menú'}
        title={'abrir menú'}
        styles='fixed right-0 m-2'
      />

      {
        openMenu &&
        <div className="bg-stone-900/80 aboslute top-0 left-0 fixed h-full w-full z-50 transition-all">
          <nav className="bg-stone-200 dark:bg-stone-800 absolute rounded-l-lg h-full w-3/4 md:w-1/4 right-0 flex flex-col p-1 md:px-2 border-l-2 border-y-2 border-sky-800 transition-all">
            <header className="border-b-2 border-sky-700 flex justify-between items-center mb-4 pb-1">
              <h2 className="text-xl uppercase">menú</h2>

              <Button
                onClick={() => setOpenMenu(!openMenu)}
                rightIcon={<MenuCloseIcon />}
                styles={'self-end'}
                text={'cerrar'}
                title={'cerrar menú'}
              />
            </header>

            <section className="flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                {links.map((option, i) =>
                  <li key={i}>
                    <Link
                      href={option.url}
                      onClick={() => setOpenMenu(!openMenu)}
                      className={`text-xl py-1 px-2 flex items-center gap-2 hover:bg-stone-400 dark:hover:bg-stone-700 ${(pathname === ('/' + option.url)) && 'bg-sky-900 hover:bg-sky-900 dark:hover:bg-sky-900 text-stone-200'}`}
                    >
                      {option.label}
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          </nav>
        </div>
      }
    </>
  )
}

export { NavbarModal };