import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SkillSphere - Freelance Website",
    image: "https://i.postimg.cc/d3ydRXc9/Skill-Sphere.png",
    link: "/skillSphere"
  },
  {
    name: "HumanAid - Volunteer Management App",
    image: "https://i.postimg.cc/FshsV8vs/HumanAid.png",
    link: "/humanAid"
  },
  {
    name: "AppOrbit - App Review Website",
    image: "https://i.postimg.cc/1tKbmWjJ/AppOrbit.png",
    link: "/appOrbit"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="w-full px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    className="btn bg-pink-600 text-white rounded-[60px] transition-transform duration-500 hover:scale-105"
                  >
                    View More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
