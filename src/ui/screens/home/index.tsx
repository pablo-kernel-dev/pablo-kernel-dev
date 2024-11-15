import Link from "next/link";
import { CONFIG_UI } from "@/config/appConfig";

// &quot; = ""

const HomeScreen = () => {
  return (
    <section className="space-y-4">
      <div className={`${CONFIG_UI}`}>
        <p className="grid gap-2">
          <span className="text-2xl">
            <strong className="text-3xl md:text-4xl ml-4 md:ml-8">¡Hola, Mundo!</strong>,
            <br className="md:hidden" />
            Bienvenidos a mi página web.
          </span>
          <span>
            <span className="ml-4"></span>
            Me llamo <strong className="text-2xl italic">Pablo</strong>, soy programador en diversas tecnologías, con experiencia creación de páginas web, aplicaciones móviles, pruebas de software y desarrollo de videojuegos.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className={`${CONFIG_UI} grid justify-center`}>
          <span className="text-center uppercase">Correo</span>
          <Link href="mailto:pablo.kernel.dev@gmail.com" className="text-sky-600 hover:text-sky-500 hover:underline">pablo.kernel.dev@gmail.com</Link>
        </div>

        <div className={`${CONFIG_UI} grid justify-center`}>
          <span className="text-center uppercase">GitHub</span>
          <Link href="https://github.com/pablo-kernel-dev" target="_blank" className="text-sky-600 hover:text-sky-500 hover:underline">github.com/pablo-kernel-dev</Link>
        </div>
      </div>

      <div className={`${CONFIG_UI}`}>
        <p className="grid gap-4">
          <span><strong className="text-2xl italic ml-4">Mi objetivo</strong> es incorporarme a los equipos que necesiten desarrolladores de confianza para escalar sus proyectos.</span>
          <span><strong className="text-2xl italic ml-4">Tengo experiencia</strong> en educación y formación, aportes en sistemas para instituciones de uso público/privado, y diseño de interfaces de usuario centradas en la experiencia.</span>
        </p>
      </div>

      <section className={`${CONFIG_UI}`}>
        <header>
          <h2 className="text-3xl text-center">El camino de la informatica me llevo a conocer</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          <article className="p-2">
            <h3 className="text-2xl">Lenguajes</h3>

            <ul className="list-disc italic px-6">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>PHP, C#, Python</li>
              <li>SQL (MySQL), NoSQL (MongoDB)</li>
              <li>JSX, JSON</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="text-2xl">Herramientas</h3>

            <ul className="list-disc italic px-6">
              <li>WordPress</li>
              <li>Visual Studio, ASP.NET core MVC</li>
              <li>SQL Server</li>
              <li>Android Studio</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="text-2xl">Librerías y Frameworks</h3>

            <ul className="list-disc italic px-6">
              <li>React.js, AngularJS, Redux, Express</li>
              <li>Next.js, React Native</li>
              <li>TailwindCSS, Material UI, Bootstrap, jQuery</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="text-2xl">Otros Softwares</h3>

            <ul className="list-disc italic px-6">
              <li>Linux, Windows</li>
              <li>Adobe Photoshop, Blender</li>
              <li>Figma (diseño UI/UX)</li>
              <li>Unreal Engine</li>
              <li>Inteligencia Artificial</li>
            </ul>
          </article>
        </div>
      </section>

      <div className={`${CONFIG_UI}`}>
        <p className="grid gap-4">
          <span><strong className="text-2xl italic ml-4">Ser uno con el equipo</strong> es lo que me ayudara hará crecer.</span>
          <span><strong className="text-2xl italic ml-4">Soy feliz programando</strong>, disfrutaré construyendo y brindando soporte a cualquier proyecto, sistema o programa.</span>
        </p>
      </div>
    </section>
  );
};

export { HomeScreen };