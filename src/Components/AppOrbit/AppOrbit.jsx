import React from "react";

const AppOrbit = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 text-gray-900">
      <div className="max-w-screen-lg mx-auto rounded-lg shadow-lg p-6 sm:p-10">

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-pink-600">
          AppOrbit - App Review Website 
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB</li>
            <li>Firebase Authentication</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>
            AppOrbit is a platform where users can host their apps or websites and receive reviews. It provides a simple, user‑friendly interface for sharing projects and gathering feedback from the community.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
          <a
            href="https://my-twelve-assignment-a7eed.web.app/"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Live Project
          </a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">GitHub Repository Link (client)</h2>
          <a
            href="https://github.com/AKnaaz/App-Orbit"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Client Repository
          </a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Challenges Faced During Development</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Implementing user authentication and role management</li>
            <li>Designing an intuitive UI for project sharing and reviews</li>
            <li>Handling data synchronization for reviews and ratings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Adding real-time notifications for new reviews</li>
            <li>Developing mobile-friendly versions</li>
            <li>Integrating advanced analytics for user engagement</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AppOrbit;
