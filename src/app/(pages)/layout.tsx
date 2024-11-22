"use client";
import { NavbarModal } from "@/ui/components/NavbarModal";
import { GitHubIcon, GmailIcon } from "@/utils/icons";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-stone-200 dark:bg-stone-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950 to-stone-950 bg-fixed text-stone-900 dark:text-stone-200 text-lg font-mono leading-relaxed font-semibold min-h-screen">
        <NavbarModal />

        <div className="space-y-4 pt-4">
          <main className="md:w-2/3 mx-auto space-y-4 px-4">
            {children}
          </main>

          <footer className="bg-stone-900 text-stone-200 border-t-2 border-sky-800 space-y-4 p-4">
            <h3 className="text-center text-3xl uppercase">
              datos de contacto
            </h3>

            <div className="flex justify-center gap-10">
              <Link href="mailto:pablo.kernel.dev@gmail.com" title="Gmail" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
                <GmailIcon width={75} height={75} />
              </Link>


              <Link href="https://github.com/pablo-kernel-dev" title="GitHub" target="_blank" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
                <GitHubIcon width={75} height={75} />
              </Link>

              {/* <Link href="https://.com/pablo-kernel-dev" title="LinkedIn" target="_blank" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
                <LinkedInIcon width={75} height={75} />
              </Link> */}
            </div>

            <hr className="border-stone-700" />

            <div>
              <p className="text-center">
                Página impulsada con las tecnologías Next.js 15 y Tailwind CSS
              </p>

              <p className="text-center text-sm text-stone-400">
                Detalles sobre estudios y experiencia serán discutidos en una entrevista.
              </p>
            </div>

            <hr className="border-stone-700" />

            <div className="flex justify-between items-center">
              <p className="text-sm text-stone-400">
                DESARROLLADOR POR<br /> <Link href={"https://github.com/pablo-kernel-dev"} target="_blank" className="text-stone-200 text-xl hover:underline text-nowrap">pablo-kernel-dev</Link>.
              </p>

              <p className="text-sm text-stone-400 text-nowrap">
                Ver. 1.0.2
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
