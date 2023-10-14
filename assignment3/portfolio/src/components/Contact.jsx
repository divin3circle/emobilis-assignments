import React from "react";
import { BiSolidContact } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="my-12">
      <div className="mb-8 text-text flex justify-center gap-2">
        <BiSolidContact size={45} />
        <h1 className="text-4xl">Contact</h1>
      </div>

      <div className="flex">
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-text font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Feel free to send me your exactly what kind of website your are
              looking for and I will get back to you as soon as possible.
            </p>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 text-text bg-gray-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <textarea
                  type="text"
                  className="w-full rounded-lg border-gray-200 bg-gray-700 text-text p-4 pe-12 text-sm shadow-sm"
                  placeholder="Message"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Chat now?
                <a className="underline" href="">
                  WhatsApp
                </a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className=" h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.675694331218!2d36.82497924986541!3d-1.2724371125351261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16c83de4d57f%3A0xbfeea94fece84a9e!2sCentral%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697312756779!5m2!1sen!2ske"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
