import React from "react";
import { FaChevronDown } from "react-icons/fa";
import image from "../assets/software.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Software Development",
      image: image,
      alt: "Software development illustration showing car design software",
    },
    {
      title: "Mobile App Development",
      image: image,
      alt: "Mobile app development showing person working on phone app",
    },
    {
      title: "Website Development",
      image: image,
      alt: "Website development showing code on screen",
    },
    {
      title: "AI & ML",
      image: image,
      alt: "AI and ML illustration showing digital interface",
    },
  ];

  return (
    <div className="bg-gray-100 py-[40px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore our services
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden w-[180px] sm:w-[300px] h-[180px] sm:h-[320px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className=" relative">
                <img
                  src={service.image}
                  alt={service.alt}
                  className=" w-full h-full object-cover"
                />
                {/* <div className="absolute inset-x-0 bottom-0 h-[8%] bg-gradient-to-t from-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            View more
            <FaChevronDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
