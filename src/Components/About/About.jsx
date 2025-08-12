import React from "react";

const About = () => {
  return (
    <section className="px-4 py-16 md:px-20">
      <div className="w-full rounded-lg shadow-lg text-gray-900 p-6 md:px-16">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-8">
          About Me
        </h1>
        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
            My programming journey began in 2022, initially as a step towards
            building a better life. Over time, what started as a goal turned into
            a genuine passion for creating beautiful, functional, and efficient
            web applications.
          </p>

          <p>
            I find myself most comfortable working with React, building
            responsive and user-friendly interfaces. With tools like Tailwind
            CSS, I enjoy crafting modern layouts that provide an excellent user
            experience.
          </p>

          <p>
            I have learned everything I know about web development through online
            resources, self-study, and continuous practice. This self-driven
            approach has helped me gain hands-on experience and the confidence to
            build real-world projects.
          </p>

          <p>
            In the future, I see myself as a skilled{" "}
            <span className="font-semibold text-pink-600">
              Full Stack Web Developer
            </span>
            , capable of building complete, high-quality web applications from
            scratch. I am constantly learning and improving my skills to achieve
            this goal.
          </p>

          <p className="pb-4">
            Outside of programming, I am an avid reader who enjoys exploring
            books across different genres. Reading not only inspires my
            creativity but also broadens my perspective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;