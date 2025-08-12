import React from "react";
import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 text-gray-900">
      <div className="max-w-md mx-auto rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Contact Me</h2>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MdEmail className="text-pink-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:nazatakter19@gmail.com"
                className="text-pink-700 hover:text-pink-900 underline break-all"
              >
                nazatakter19@gmail.com
              </a>
            </div>
          </div>

          
          <div className="flex items-center space-x-4">
            <MdPhone className="text-pink-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a
                href="tel:+8801234567890"
                className="text-pink-700 hover:text-pink-900 underline"
              >
                +880 1944 778 357
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MdWhatsapp className="text-pink-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline"
              >
                +880 1*** *** ***
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
