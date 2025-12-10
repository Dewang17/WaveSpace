"use client";

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ServiceAccordionSection({ data, reverse = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white mx-auto">
      <div
        className={`max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 lg:px-20 pb-20 pt-10
        ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* IMAGE */}
        <div className="flex">
          <img
            src={data.image}
            alt={data.title.dark}
            className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">
          {/* TITLE with two colors */}
          <h2 className="font-bold mb-6 text-[2rem] lg:text-[3rem] leading-tight">
            <span className="text-black">{data.title.dark}</span>
            <br />
            <span className="text-gray-400">{data.title.light}</span>
          </h2>

          <p className="text-gray-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
            {data.description}
          </p>

          {/* ACCORDION LIST */}
          {data?.list?.length > 0 && (
            <div className="space-y-6">
              {data.list.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#f0f0f0] pb-4 cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-center group">
                    <span className="flex items-center font-semibold gap-5">
                      <span className="text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.title}</span>
                    </span>

                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <GoArrowUpRight className="text-3xl" />
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? "max-h-[200px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed pl-10">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
