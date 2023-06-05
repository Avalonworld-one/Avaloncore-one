import React from "react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen px-4 sm:px-18 lg:px-16 pb-10 bg-black text-white">
      <div id="content" className="mx-auto max-w-7xl">
        <h2 className="text-sm md:text-base font-semibold mb-8">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Get in touch with us
            </h1>
            <p className="text-sm md:text-base">
            We enthusiastically anticipate your proposals, ideas, and comments. Please don&apos;t hesitate to share them with us.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-md"
                  id="Name"
                  type="text"
                  name="name"
                  placeholder="Name (Optional)"
                />
              </div>
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-md"
                  id="Email"
                  name="email"
                  // required=""
                  type="email"
                  placeholder="Email address"
                />
                <p className="mt-2 text-xs text-red-600">You need to enter a valid email</p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <select
                  className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md"
                  id="Recipient"
                  name="recipient"
                  // required=""
                >
                  <option value="">
                    Select a recipient
                  </option>
                  <option value="marketing">Marketing</option>
                  <option value="technology">Technology</option>
                </select>
                <p className="mt-2 text-xs text-red-600">You need to select a recipient</p>
              </div>
              <div className="w-full px-2 md:w-1/2">
                <input
                  className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-md"
                  id="Subject"
                  name="subject"
                  type="text"
                  placeholder="Subject (Optional)"
                />
              </div>
            </div>

            <div className="w-full">
              <textarea
                className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-md"
                id="Message"
                name="message"
                placeholder="Write your message ..."
              ></textarea>
              <p className="mt-2 text-xs text-red-600">You need to write a message</p>
            </div>

            <div className="px-2">
              <label className="inline-flex items-center">
                <input id="conditions" type="checkbox" className="rounded"/>
                <span className="ml-2">I have read and accept the <a href="/terms-of-service" target="_blank" className="underline text-blue-500">terms of service.</a></span>
              </label>
              <p className="mt-2 text-xs text-red-600">You need to accept the terms and conditions</p>
            </div>

            <div className="px-2">
              <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
