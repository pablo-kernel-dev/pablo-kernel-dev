"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { CONFIG_UI } from "@/config/appConfig";
import { Button } from "@/ui/components";
import { dataYB } from "./dataYT";

const AboutScreen = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((expanded) => !expanded);
  };

  const contentRef = useRef(null);

  return (
    <>
      <header>
        <h2 className="text-5xl text-center uppercase">sobre mí</h2>
      </header>
      
      <main className="space-y-4">
        <section className={`${CONFIG_UI}`}>
          <p className="font-semibold">
            <span className="ml-4">Hola Soy <strong className="italic text-2xl">Pablo</strong></span> y bienvenidos a mi página en GitHub.<br />
            He optado por brindar solamente mi nombre para proteger mi información, privacidad y la de mi entorno.<br />
            Busco captar la atención de reclutadores que necesiten desarrolladores con experiencia para unirse a sus equipos y aportar soluciones, respeto y lealtad.
          </p>
        </section>

        <section className={`${CONFIG_UI}`}>
          <p>
            <span className="ml-4">Una mencion a <strong className="text-2xl italic">mis mentores</strong></span>, todos creadores de contenido en YouTube. Quiero expresar mi gratitud hacia quienes dedican su tiempo a instruir e inspirar.
          </p>

          <div
            ref={contentRef}
            className={`${expanded ? 'max-h-[500px]' : 'max-h-0'} overflow-y-scroll transition-[max-height] duration-500 ease-in-out`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto">
              {Object.entries(dataYB).map(([category, links]) => (
                <article key={category} className="p-4">
                  <h3 className="text-2xl capitalize">{category}</h3>

                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {links.map((link) =>
                      <li key={link.url}>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline">
                          {link.nombre}
                        </Link>
                      </li>
                    )}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={toggleExpand}
              text={expanded ? 'Mostrar menos' : 'Mostrar más'}
            />
          </div>
        </section>

        <section className={`${CONFIG_UI}`}>
          <p className="font-semibold">
            <span className="ml-4">Este blog está en crecimiento</span>. Próximamente encontrarán más contenido, desde pequeñas aplicaciones, notas de estudio y proyectos de programación.
          </p>
        </section>

        <section className={`${CONFIG_UI}`}>
          <p className="font-semibold text-center">¡Gracias por visitar!</p>
        </section>
      </main>
    </>
  );
};

export { AboutScreen };
