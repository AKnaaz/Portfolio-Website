import React from "react";

const HumanAid = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 text-gray-900">
      <div className="max-w-screen-lg mx-auto rounded-lg shadow-lg p-6 sm:p-10">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-pink-600">
          HumanAid - Volunteer Management App
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
            HumanAid is a volunteer platform where clients post volunteer opportunities, and volunteers can browse and select tasks that match their interests and availability.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
          <a
            href="https://my-eleventh-assignment-4302c.web.app/"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Live Project
          </a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">GitHub Repository Link (client)</h2>
          <a
            href="https://github.com/AKnaaz/HumanAid"
            className="text-pink-600 underline hover:text-pink-800"
          >
            Client Repository
          </a>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Challenges Faced During Development</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Handling user authentication and role-based access control</li>
            <li>Implementing dynamic volunteer post creation and management</li>
            <li>Ensuring responsive and accessible UI across devices</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Adding real-time notifications for new volunteer posts</li>
            <li>Developing a mobile app version</li>
            <li>Integrating advanced volunteer matching algorithms</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HumanAid;
