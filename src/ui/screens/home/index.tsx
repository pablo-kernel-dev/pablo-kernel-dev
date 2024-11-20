import Link from "next/link";
import { CONFIG_UI } from "@/config/appConfig";
import Image from "next/image";
import photoProfile from "@/utils/images/profile.png";
import { GitHubIcon, GmailIcon } from "@/utils/icons";

// &quot; = ""

const HomeScreen = () => {
  return (
    <>
      <section className="bg-sky-950 outline outline-sky-700 text-stone-100 rounded-xl p-4 space-y-2">
        <p>
          <strong className="text-3xl md:text-4xl text-nowrap md:pl-4 mr-2">¡Hola Mundo!</strong>
          <br className="lg:hidden" />
          <span className="text-xl text-nowrap">Bienvenidos a mi página web.</span>
        </p>

        <div>
          <figure className="float-right md:float-left outline outline-4 outline-sky-700 rounded-full w-40 m-2 md:m-4 overflow-hidden">
            <Image src={photoProfile} alt="photo profile" />
          </figure>

          <p className="text-xl w-full">
            <span className="ml-4"></span>
            Mi nombre es <strong className="text-2xl italic">Pablo</strong>. Soy programador de aplicaciones web y móviles con experiencia en el desarrollo de sistemas robustos y eficientes.
            Ofrezco mis servicios para crear soluciones, garantizando calidad y eficiencia.
          </p>
        </div>

        <hr className="border-sky-700 border-2 rounded-xl my-2" />

        <div className="flex justify-center gap-4">
          <Link href="mailto:pablo.kernel.dev@gmail.com" title="Gmail" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
            <GmailIcon width={50} height={50} />
          </Link>

          <Link href="https://github.com/pablo-kernel-dev" title="GitHub" target="_blank" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
            <GitHubIcon width={50} height={50} />
          </Link>

          {/* <Link href="https://.com/pablo-kernel-dev" title="LinkedIn" target="_blank" className="bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:border-sky-700 rounded-xl">
            <LinkedInIcon width={50} height={50} />
          </Link> */}
        </div>
      </section>

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

      <div className={`${CONFIG_UI} space-y-2`}>
        <p><strong className="text-2xl italic ml-4">Ser uno con el equipo</strong> es lo que me ayudara hará crecer.</p>
        <p><strong className="text-2xl italic ml-4">Soy feliz programando</strong>, disfrutaré construyendo y brindando soporte a cualquier proyecto, sistema o programa.</p>
      </div>
    </>
  );
};

export { HomeScreen };