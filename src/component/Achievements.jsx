"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";


const achievements = [
  { id: "01", title: "140+ International design awards" },
  { id: "02", title: "100M+ Global users reached" },
  { id: "03", title: "300%+ Average conversion uplift" },
  { id: "04", title: "$2B+ raised UX-led launches" },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const inView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) {
      // Fully visible
      leftControls.start({ x: 0, opacity: 1 });
      rightControls.start({ x: 0, opacity: 1 });
    } else {
      // Move only half outside the screen smoothly
      leftControls.start({
        x: "-50%",
        opacity: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      rightControls.start({
        x: "50%",
        opacity: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [inView, leftControls, rightControls]);

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/purple.jpg')" }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-28">
        {/* HEADINGS */}
        <div className="flex flex-col w-full overflow-hidden relative">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            animate={leftControls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex justify-start whitespace-nowrap text-left"
          >
            <h1
              className="text-white font-extrabold tracking-wide leading-[1]
              text-[5rem] md:text-[9rem] xl:text-[11rem] capitalize"
            >
              our award &
            </h1>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ x: "50%", opacity: 0 }}
            animate={rightControls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex justify-end whitespace-nowrap text-right"
          >
            <h1
              className="text-white font-extrabold tracking-wide leading-[1]
              text-[5rem] md:text-[9rem] xl:text-[11rem] capitalize"
            >
              achievements
            </h1>
          </motion.div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 w-full bg-transparent">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-10 bg-white border-r border-gray-200 
                relative group transition-all overflow-hidden
                ${index === achievements.length - 1 ? "border-r-0" : ""}`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-gray-400 text-lg font-medium">
                  {item.id}
                </span>

                {/* ARROW ANIMATION */}
                <div
                  className="w-12 h-12 rounded-full bg-[#3f2fee] flex items-center justify-center
                    opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-300 ease-out"
                >
                  <GoArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>

              <h3 className="text-[1.8rem] font-semibold leading-snug mt-20 text-black">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
