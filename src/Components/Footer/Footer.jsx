import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Nazat Akter | All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/AKnaaz"
            target="_blank"
            className="hover:text-pink-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.205 11.384c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.204.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.774.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.17 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 016 0c2.29-1.553 3.296-1.23 3.296-1.23.655 1.65.243 2.867.12 3.17.77.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.63-5.475 5.924.43.37.813 1.102.813 2.222v3.293c0 .32.217.694.825.576A12.006 12.006 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/nazatakter-dev"
            target="_blank"
            className="hover:text-pink-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm.02 4.75h-.03c-.45 0-.9.18-1.22.5a1.8 1.8 0 00-.53 1.27v9.48h3.5v-9.48a1.87 1.87 0 00-.52-1.27 1.6 1.6 0 00-1.23-.5zM8.5 8.75h-3.5v9.5h3.5v-9.5zm5.75 0h-3.24v9.5h3.24v-4.7c0-1.18.87-2.13 2-2.13 1.13 0 1.75.88 1.75 2.13v4.7h3.24v-5.2c0-3.33-1.8-4.8-4.5-4.8-2.15 0-3.14 1.18-3.68 1.98h-.04v-1.62h-3.24v9.5h3.24v-4.7c0-1.18.87-2.13 2-2.13 1.13 0 1.75.88 1.75 2.13v4.7h3.24v-5.2c0-3.33-1.8-4.8-4.5-4.8-2.15 0-3.14 1.18-3.68 1.98h-.04v-1.62h-3.24v9.5h3.24v-4.7c0-1.18.87-2.13 2-2.13 1.13 0 1.75.88 1.75 2.13v4.7h3.24v-5.2c0-3.33-1.8-4.8-4.5-4.8-2.15 0-3.14 1.18-3.68 1.98h-.04v-1.62z" />
            </svg>
          </a>

          <a
            href="https://x.com/Moontahasafiq?t=EgQaJ4RVJi7uL_xw4MGO3Q&s=08"
            target="_blank"
            className="hover:text-pink-600 transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1.6a9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.83 12.83 0 013 2.14a4.52 4.52 0 001.4 6.03 4.44 4.44 0 01-2.04-.56v.06a4.52 4.52 0 003.63 4.43 4.5 4.5 0 01-2.03.07 4.53 4.53 0 004.22 3.15 9 9 0 01-5.56 1.92A8.74 8.74 0 012 19.45a12.73 12.73 0 006.92 2.03c8.3 0 12.84-6.9 12.84-12.88 0-.2 0-.42-.02-.63A9.2 9.2 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
