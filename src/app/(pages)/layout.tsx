"use client";
import { NavbarModal } from "@/ui/components/NavbarModal";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-stone-200 dark:bg-stone-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950 to-stone-950 bg-fixed text-stone-900 dark:text-stone-200 text-lg font-mono leading-relaxed font-semibold min-h-screen grid">
        <NavbarModal />

        <div className="grid gap-4 pt-4">
          <main className="grid gap-4 md:w-2/3 mx-auto px-4">
            {children}
          </main>

          <footer className="border-t-2 border-sky-800 py-5 bg-stone-900 grid gap-6 text-stone-200">
            <h3 className="text-center text-3xl uppercase">datos de contacto</h3>

            <div className="flex flex-col md:flex-row gap-5 justify-evenly px-5">
              <article className="flex flex-col md:flex-row gap-2">
                <p>Correo:</p>
                <Link href="mailto:pablo.kernel.dev@gmail.com" className="text-sky-600 hover:text-sky-500 hover:underline">pablo.kernel.dev@gmail.com</Link>
              </article>

              <article className="flex flex-col md:flex-row gap-2">
                <p>GitHub: </p>
                <Link href="https://github.com/pablo-kernel-dev" target="_blank" className="text-sky-600 hover:text-sky-500 hover:underline">github.com/pablo-kernel-dev</Link>
              </article>
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

            <div className="flex justify-between px-4">
              <p className="text-center text-sm text-stone-400">
                SITIO DESARROLLADOR POR <span className="text-xl hover:underline"><Link href={"https://github.com/pablo-kernel-dev"} target="_blank">pablo-kernel-dev</Link></span>.
              </p>
              <p className="text-center text-sm text-stone-400">
                Ver. 1.0.0
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
