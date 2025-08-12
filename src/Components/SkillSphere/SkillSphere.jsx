import React from "react";

const SkillSphere = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 text-gray-900">
      <div className="max-w-screen-lg mx-auto rounded-lg shadow-lg p-6 sm:p-10">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-pink-600">
          SkillSphere - Freelance Website
        </h1>

       
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>Firebase Authentication</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>


        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>
            SkillSphere is a freelance platform where clients post tasks. Freelancers can browse these tasks, select the ones they want, and place bids to win the projects. It facilitates smooth collaboration between task posters and freelancers.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
          <a
            href="https://scintillating-malabi-5ff220.netlify.app/"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Live Project
          </a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">GitHub RepoSitory Link (client)</h2>
          <a
            href="https://github.com/AKnaaz/SkillSphere?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Client Repository
          </a>
        </div>

       
        <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Challenges Faced During Development</h2>
        <ul className="list-disc pl-6 space-y-1">
            <li>Setting up JWT Authentication and securing API requests</li>
            <li>Implementing real-time data updates</li>
            <li>Maintaining a responsive layout</li>
        </ul>
        </div>


        <div>
        <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
        <ul className="list-disc pl-6 space-y-1">
            <li>Add a real-time chat system</li>
            <li>Develop a mobile app version</li>
            <li>Implement a more automated task management system</li>
        </ul>
        </div>

      </div>
    </section>
  );
};

export default SkillSphere;
