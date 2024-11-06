import React, { useState } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      type: "Customer quote",
      quote:
        "A constant state of optimization is key for Verizon. That's why it's critical to partner with leading solutions providers, like Contentsquare.",
      author: "Sacha Lucas",
      position: "Vice President, Digital, Verizon Consumer Group",
    },
    {
      type: "Case study",
      title: "IT Services Bridge the Digital Divide in Rural Indian Education",
      description:
        "An IT services company partners with NGOs to provide digital infrastructure and educational resources to rural schools in India.",
    },
    {
      type: "Customer quote",
      quote:
        "A constant state of optimization is key for Verizon. That's why it's critical to partner with leading solutions providers, like Contentsquare.",
      author: "Sacha Lucas",
      position: "Vice President, Digital, Verizon Consumer Group",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-4">
            TESTIMONIALS AND RELATED CASE STUDY
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Driving digital revenue for our 100+ satisfied customers
          </h2>
        </div>

        <div className="relative">
        <div className="flex overflow-x-auto space-x-4 px-4">
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="w-[350px] bg-gray-300 h-[380px] flex-shrink-0 rounded-xl text-left"
    >
      <div className="bg-white rounded-lg p-8 h-full shadow-sm">
        <div className="text-3xl font-bold  mb-4">
          {item.type}
        </div>
        {item.type === "Case study" ? (
          <>
            <h3 className="text-lg font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <span className="block w-full h-[2px] bg-gray-200 my-4"></span>
          </>
        ) : (
          <>
            <blockquote className="text-lg text-gray-900 mb-6">
              "{item.quote}"
            </blockquote>
            <span className="block w-full h-[2px] bg-gray-200 my-4"></span>
            <div>
              <div className="font-semibold">{item.author}</div>
              <div className="text-gray-500">{item.position}</div>
            </div>
          </>
        )}
      </div>
    </div>
  ))}
</div>


          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-indigo-900 text-white rounded-full p-2 shadow-lg hover:bg-indigo-800 transition-colors"
            aria-label="Previous slide"
          >
            <IoChevronBack size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-indigo-900 text-white rounded-full p-2 shadow-lg hover:bg-indigo-800 transition-colors"
            aria-label="Next slide"
          >
            <IoChevronForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
