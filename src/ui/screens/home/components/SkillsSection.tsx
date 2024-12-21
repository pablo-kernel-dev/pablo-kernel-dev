import { useRef, useState } from "react";
import { skillsDevData } from "../data/dataDev";
import { Icon, ModalPortal } from "@/ui/components";

interface ArticleProps {
  title: string;
  subtitle: string;
  description: string;
  bgBorder: string;
  bgColor: string;
  bgListColor: string;
  icon: string;
  levels: {
    basic: Array<{ name: string; info: string }>;
    medium: Array<{ name: string; info: string }>;
    advanced: Array<{ name: string; info: string }>;
  };
}

const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  description,
  bgBorder,
  bgColor,
  bgListColor,
  icon,
  levels,
}) => {
  const [activeLevel, setActiveLevel] = useState<string>("basic");

  const handleLevelClick = (level: string) => {
    setActiveLevel(level);
  };

  const currentLevelItems = levels[activeLevel as keyof typeof levels] || [];

  return (
    <article className={`${bgColor} ${bgBorder} flex flex-col rounded-xl space-y-4 p-2 md:p-4`}>
      <header>
        <figure
          className={`bg-stone-200 ${bgBorder} float-right flex justify-center items-center rounded-full my-2 ml-2 p-3 overflow-hidden`}
        >
          <Icon name={icon} width={100} height={100} />
        </figure>
        <h3 className="text-3xl font-bold uppercase">{title}</h3>
        <h4 className="text-xl capitalize italic">[{subtitle}]</h4>
        <h5>{description}</h5>
      </header>

      <nav className="flex justify-center md:justify-start space-x-4">
        {Object.keys(levels).map((levelKey) => (
          <button
            key={levelKey}
            className={`font-bold text-lg capitalize px-4 py-2 rounded-md ${activeLevel === levelKey
              ? `bg-stone-200 text-stone-900`
              : `${bgListColor} text-white`
              } ${bgBorder}`}
            onClick={() => handleLevelClick(levelKey)}
          >
            {levelKey}
          </button>
        ))}
      </nav>

      <section className={`${bgListColor} ${bgBorder} p-2 md:p-4 rounded-xl`}>
        <ul className="flex flex-wrap gap-2">
          {currentLevelItems.length > 0 ? (
            currentLevelItems.map((item, index) => (
              <li key={index}>
                <ModalPortal
                  modalTitle={item.name}
                  actionButtonText={item.name}
                  stylesButton={`bg-stone-200/70 text-stone-900 ${bgBorder}`}
                  children={<div>{item.info || "nada"}</div>}
                />
              </li>
            ))
          ) : (
            <p className="text-center text-white">No items available for this level.</p>
          )}
        </ul>
      </section>
    </article>
  );
};

const SkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleArticleClick = (index: number) => {
    if (containerRef.current) {
      const articles = containerRef.current.querySelectorAll<HTMLDivElement>("div[data-article]");
      const targetArticle = articles[index];
      targetArticle?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="overflow-x-auto flex gap-4"
    // className="snap-x snap-mandatory scroll-smooth"
    >
      {skillsDevData.languages.map((article, index) => (
        <div
          key={index}
          data-article
          // className="snap-center"
          className="flex-shrink-0 w-4/5 cursor-pointer"
          onClick={() => handleArticleClick(index)}
        >
          <Article
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            bgBorder={article.bgBorder}
            bgColor={article.bgColor}
            bgListColor={article.bgListColor}
            icon={article.icon}
            levels={article.levels}
          />
        </div>
      ))}
    </section>
  );
};

export { SkillsSection };
