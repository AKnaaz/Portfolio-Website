import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

const backendSkills = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const toolsSkills = [
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

const SkillsSection = ({ title, skills }) => (
  <>
    <h3 className="text-2xl font-semibold mb-5 mt-10">{title}</h3>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-3" />
          <p className="text-lg font-medium text-gray-800">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  </>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full px-4 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">My Skills</h2>

      <div className="max-w-screen-lg mx-auto">
        <SkillsSection title="Frontend" skills={frontendSkills} />
        <SkillsSection title="Backend" skills={backendSkills} />
        <SkillsSection title="Tools" skills={toolsSkills} />
      </div>
    </section>
  );
};

export default Skills;
