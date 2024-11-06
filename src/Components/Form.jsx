import React, { useState } from "react";
import iage from "../assets/view1.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    organization: "",
    region: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="relative w-full  px-[10px] py-4 sm:px-[10%] my-[50px] bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${iage})` }}
    >
      {/* Black overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30 z-10"></div> */}

      {/* Form content */}
      <div className="relative w-full flex flex-col md:flex-row  sm:p-6 rounded-lg overflow-hidden z-20">
        {/* Header */}
        <div className="p-6 text-left text-white">
          <h1 className="text-4xl font-bold mb-2">Let's Connect</h1>
          <p className=" text-lg">
            Connect with us today! Fill out the form below to discuss your
            project needs and explore tailored solutions for your business.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 rounded-lg border bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Full Name */}
            <div className="">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g. James Scalf"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone*
              </label>
              <div className="flex overflow-hidden">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g. james.scalf@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            {/* Region */}
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Region*
              </label>
              <select
                id="region"
                name="region"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Select Region</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
              </select>
            </div>

            {/* Services */}
            <div>
              <label
                htmlFor="services"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Services*
              </label>
              <select
                id="services"
                name="services"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.services}
                onChange={handleChange}
              >
                <option value="">Select Services</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Comments/Message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Write a Message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* reCAPTCHA */}
          <div className="w-[304px] h-[78px] bg-gray-50 border rounded-md flex items-center justify-center">
            <span className="text-sm text-gray-500">reCAPTCHA placeholder</span>
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-600 text-left">
            For further details on how your personal data will be processed and
            how your consent can be managed, refer to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>
          </p>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="w-fit sm:w-auto px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
