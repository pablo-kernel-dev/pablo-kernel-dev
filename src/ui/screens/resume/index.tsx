import Link from "next/link";
import dataLeng from "./lang-es.json";
import { Button } from "@/ui/components";

const ListWorkExperience = () => dataLeng.data.work_experience.map((work, index) =>
  <article key={index} className="grid bg-stone-100 outline outline-stone-400 print:outline-stone-900 px-2 py-1 rounded-xl">
    <h4 className="text-balance">
      {work.company}
    </h4>

    <h5 className="text-stone-700 text-balance text-base">
      {work.title}
    </h5>

    <p className="text-sm text-nowrap self-end text-right italic">
      {work.date}
    </p>
  </article>
);

const ListEducations = () => dataLeng.data.educations.map((dataEducation, index) =>
  <article key={index} className="grid bg-stone-100 outline outline-stone-400 print:outline-stone-900 px-2 rounded-md items-center">
    <h4 className="text-center text-balance">
      {dataEducation.description}
    </h4>

    <p className="text-stone-700 text-center text-balance text-sm">
      {dataEducation.title}
    </p>
  </article>
);

const ResumeScreen = () => {
  return (
    <div className="bg-stone-200/90 text-stone-900 outline outline-sky-700 print:outline-0 rounded-xl w-full p-2 sm:p-4 print:p-0 space-y-4">
      <header className="grid sm:grid-cols-2 sm:items-center">
        <h1 className="text-4xl text-center sm:text-left uppercase underline">
          {dataLeng.pages.resume.title.cv}
        </h1>

        <div className="flex md:flex-col flex-wrap justify-center gap-x-10">
          {dataLeng.pages.resume.personal_info.professions.map((info = "", index = 0) =>
            <h2 key={index} className="text-stone-700 text-xl md:text-xl text-center sm:text-right text-nowrap uppercase">
              {info}
            </h2>
          )}
        </div>
      </header>

      <section className="grid sm:grid-cols-2 gap-2">
        <div>
          <p>
            <span className="uppercase">{`${dataLeng.pages.resume.personal_info.fullnameTitle}: `}</span>
            {dataLeng.pages.resume.personal_info.fullname}
          </p>

          <p>
            <span className="uppercase">{`${dataLeng.pages.resume.personal_info.nationalityTitle}: `}</span>
            {dataLeng.pages.resume.personal_info.nationality}
          </p>

          <p>
            <span className="uppercase">{`${dataLeng.pages.resume.personal_info.mailTitle}: `}</span>
            <Link href={`mailto:${dataLeng.pages.resume.personal_info.mailUrl}`} className="hover:text-cyan-700 hover:underline" title={`Enviar e-mail a ${dataLeng.pages.resume.personal_info.mailName}`} aria-label={`Send E-mail to ${dataLeng.pages.resume.personal_info.mailName}`}>
              {dataLeng.pages.resume.personal_info.mailName}
            </Link>
          </p>

          <p>
            <span className="uppercase">{`${dataLeng.pages.resume.personal_info.githubTitle}: `}</span>
            <Link href={dataLeng.pages.resume.personal_info.githubUrl} className="hover:text-cyan-700 hover:underline" target="_blank" title={`Link a ${dataLeng.pages.resume.personal_info.githubName}`} aria-label={`Link to ${dataLeng.pages.resume.personal_info.githubName}`}>
              {dataLeng.pages.resume.personal_info.githubName}
            </Link>
          </p>

          <p>
            <span className="uppercase">{`${dataLeng.pages.resume.personal_info.webSiteTitle}: `}</span>
            <Link href={dataLeng.pages.resume.personal_info.webSiteUrl} className="hover:text-cyan-700 hover:underline" target="_blank" title={`Link a ${dataLeng.pages.resume.personal_info.githubName}`} aria-label={`Link to ${dataLeng.pages.resume.personal_info.webSiteName}`}>
              {dataLeng.pages.resume.personal_info.webSiteName}<br />
              {dataLeng.pages.resume.personal_info.githubName}
            </Link>
          </p>

          <div className="flex justify-center md:justify-start print:hidden">
            <a href="cv_pablo.pdf" download={"cv_pablo.pdf"} className="self-center">
              <Button text={"Descargar CV"} title={"Descargar Curriculum Vitae"} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xl pl-6">{dataLeng.pages.resume.personal_info.greeting1}</p>
          <p className="text-center text-balance">{dataLeng.pages.resume.personal_info.greetingResume}</p>
        </div>
      </section>

      <section className="space-y-2">
        <header>
          <h3 className="text-center text-2xl uppercase">
            {dataLeng.pages.resume.title.experience}
          </h3>
        </header>

        <section className="grid sm:grid-cols-2 gap-4">
          <ListWorkExperience />
        </section>
      </section>

      <section className="space-y-2">
        <header>
          <h3 className="text-center text-2xl uppercase">
            {dataLeng.pages.resume.title.studies}
          </h3>
        </header>

        <section className="grid sm:grid-cols-3 gap-4">
          <ListEducations />
        </section>
      </section>
    </div>
  );
};

export { ResumeScreen };
