import React, { useState } from "react";
import { techSkills } from "../data/dataDev";

interface Technology {
  name: string;
  info: string;
}

interface Skill {
  title: string;
  subtitle: string;
  description: string;
  colorScheme: {
    bgBorder: string;
    bgColor: string;
    bgListColor: string;
  };
  icon: string;
  knowledge: {
    basic: Technology[];
    medium: Technology[];
    advanced: Technology[];
  };
}

interface TechSkills {
  lenguages: Skill[];
  frameworks: Skill[];
  libraries: Skill[];
  operatingSystems: Skill[];
  programs: Skill[];
  others: Skill[];
}

interface TabButtonProps {
  label: string;
  value: string;
  activeTab: string;
  onClick: (value: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, value, activeTab, onClick }) => (
  <button
    onClick={() => onClick(value)}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === value
      ? "bg-blue-600 text-white"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    aria-pressed={activeTab === value ? "true" : "false"}
  >
    {label}
  </button>
);

const SkillsDev: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"lenguages" | "frameworks" | "libraries" | "operatingSystems" | "programs" | "others">("lenguages");
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const handleTabClick = (tab: "lenguages" | "frameworks" | "libraries" | "operatingSystems" | "programs" | "others") => {
    setActiveTab(tab);
    setSelectedTech(null); // Reset selected tech when switching tabs
  };

  const openModal = (tech: Technology) => {
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
  };

  const currentSkills = techSkills[activeTab];  // Now TypeScript knows that "activeTab" is one of the keys of "techSkills"

  return (
    <section className="p-6">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Technologies Learned</h2>
        <p className="text-gray-600">Explore the programming languages and frameworks I have mastered.</p>
      </header>

      <div className="flex justify-center space-x-4 mb-6">
        {["lenguages", "frameworks", "libraries", "operatingSystems", "programs"].map((tab) => (
          <TabButton
            key={tab}
            label={tab.charAt(0).toUpperCase() + tab.slice(1)}
            value={tab}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentSkills && currentSkills.length > 0 ? (
          currentSkills.map((skill: Skill) => (
            <div
              key={skill.title}
              className={`p-4 rounded-md shadow-md ${skill.colorScheme.bgBorder} ${skill.colorScheme.bgColor}`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-white mb-4">{skill.subtitle}</p>
              <ul className="space-y-2">
                {skill.knowledge.basic.map((tech) => (
                  <li
                    key={tech.name}
                    onClick={() => openModal(tech)}
                    className={`cursor-pointer p-2 rounded ${skill.colorScheme.bgListColor} hover:bg-opacity-80 text-white`}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No skills available for this category.</p>
        )}
      </div>

      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedTech.name}</h3>
            <p className="text-gray-600">{selectedTech.info}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export { SkillsDev };
