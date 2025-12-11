"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { serviceDetails } from "@/app/data/ServiceDetails";
import LogoSlider from "@/component/LogoSlider";
import { MdOutlineArrowOutward } from "react-icons/md";
import Sliderr from "@/component/Sliderr";
import ProcessSteps from "@/component/ProcessSteps";
import { useState } from "react";
import Achievements from "@/component/Achievements";
import Review from "@/component/Review";
import { GoArrowUpRight } from "react-icons/go";
import FAQSection from "@/component/FAQSection";
import Form from "@/component/Form";
import ServiceAccordionSection from "@/component/ServiceAccordionSection";
import { serviceExtras } from "@/app/data/serviceExtras";

export default function ServiceSection() {
  const { slug } = useParams();
  const service = serviceDetails.find((item) => item.slug === slug);

  const features = [
    "See how we plan, design and build",
    "Get a full view of our UX process, made for you",
    "Track how we work, communicate and stay on schedule",
    "Know if we're the right fit before you commit",
  ];
  const list = [
    {
      title: "User Research & Journey Mapping",
      desc: "We analyze user behavior, pain points, and goals to design journeys that feel intuitive and frictionless.",
    },
    {
      title: "Wireframing & Prototyping",
      desc: "Low and high-fidelity wireframes that validate ideas early and reduce costly revisions.",
    },
    {
      title: "Visual UI Design",
      desc: "Clean, modern interfaces that align with your brand and create emotional connection.",
    },
    {
      title: "Design Systems",
      desc: "Scalable components and reusable patterns that grow with your product.",
    },
  ];

  if (!service) return <p className="text-center py-20">Service not found</p>;
  const content = serviceExtras[slug];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <section
        className=" text-[#ffffff] w-full relative overflow-hidden h-full pt-10"
        style={{ backgroundColor: service.bgColor }}
      >
        <div className="flex justify-between items-center mx-auto md:gap-22 flex-col md:flex-row px-5 md:px-10 lg:px-16 lg:30 pt-20 md:pt-30">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 leading-tight">
            <div className="inline-block text-sm px-8 md:px-10 py-2 rounded-full mb-5 border border-white/20">
              <span className="font-semibold">
                Clutch <span className="text-red-500">★★★★★</span> 5.0
              </span>
            </div>

            <h1 className="text-xl md:text-6xl font-bold leading-[1.3]">
              {service.title}
            </h1>

            <p className="text-md text-white-200 font-semibold mt-6 leading-relaxed max-w-xl">
              {service.description}
            </p>

            <p className="italic text-gray-300 mt-4">“{service.quote}”</p>

            <div className="flex flex-wrap gap-6 mt-10">
              <button className="bg-[#e6ff3f] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                Consult an expert
              </button>

              <button className="border border-white/40 px-8 py-4 rounded-full flex items-center gap-3 hover:border-white transition-colors duration-300">
                <Image
                  src="/images/icon/icon1.svg"
                  width={24}
                  height={24}
                  alt="figma"
                />
                View work
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE MOCKUP */}
          <div className="relative flex justify-center md:justify-end items-center w-full md:w-1/2 mt-10 md:mt-0">
            <Image
              src={service.image}
              alt={service.title}
              width={750} // default intrinsic width
              height={500} // default intrinsic height
              className="w-full h-auto sm:w-full sm:h-auto md:w-[750px] md:h-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-xl object-contain"
            />
          </div>
        </div>
      </section>
      <LogoSlider />
      {/* the slug part */}
      <ServiceAccordionSection data={content.philosophy} />

      <section className="bg-black w-full py-20 lg:px-10 md:px-4">
        <div className=" px-6">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            We deliver on time, in days and weeks <br />
            <span className="text-[#555555]">— not months.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row px-8 gap-16 mt-16">
          {/* LEFT BOX */}
          <div className="bg-[#333333] p-10 lg:w-[65%] w-full space-y-6 border border-gray-800">
            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">01</span>Onboard in 1 day
            </p>
            <hr className="border border-gray-500" />

            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">02</span>Understand Scope &
              Strategy
            </p>
            <hr className="border border-gray-500" />
            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">03</span>First designs in 4-5
              days
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-[35%] w-full flex flex-col justify-between">
            <p className="text-white text-xl leading-relaxed">
              “Wavespace is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Image
                src="/images/man1.webp"
                width={60}
                height={60}
                alt="person"
              />

              <div>
                <h2 className="text-white font-semibold">James Mcglade</h2>
                <p className="text-gray-300 text-sm">
                  Founder, Growth Alliance
                </p>
              </div>
            </div>

            <button className="bg-yellow-300 text-black px-2 py-3 rounded-4xl font-medium mt-6 hover:bg-yellow-300 transition w-40">
              Book a call
            </button>
          </div>
        </div>
        <div className="px-6 pt-24">
          <h1 className="text-white  text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-semibold leading-tight">
            From startup to enterprise, grow your business <br />
            <span className="text-[#555555]">
              with fast and creative designs!
            </span>
          </h1>
        </div>
      </section>
      {/* slider */}
      <Sliderr />
      {/* industry experts  */}
      <section className="ind_sec py-[4rem] lg:py-[7rem] 2xl:py-[9.75rem] pb-[4.5rem]">
        <div className="container is_ind mx-auto max-w-[1440px] px-6 md:px-10">
          {/* Top Section */}
          <div className="section_top-wrap grid grid-cols-[0.75fr_0.25fr] gap-4 items-end max-md:flex max-md:flex-col">
            {/* Heading */}
            <div className="heading_content-wrap">
              <div className="section_heaing-wrap flex justify-between items-end max-md:flex-col">
                <h2 className="section-title text-3xl  md:text-4xl lg:text-5xl leading-[1.35] font-bold mb-0 max-md:text-[1.875rem]">
                  Industry expertise{" "}
                  <span className="text-hightlight text-[#29242469]">
                    across <br /> globally
                  </span>
                </h2>
              </div>
            </div>

            {/* Button */}
            <button className="flex justify-between items-end group bg-[#3F2FEE] text-white text-[15px] font-bold rounded-full px-4 py-4 hover:bg-black transition-all flex flex-row justify-center items-center gap-2 cursor-pointer">
              <span>Consult an expert</span>

              <span className="arrow-box relative w-[28px] h-[20px] inline-flex items-center justify-center overflow-hidden">
                <MdOutlineArrowOutward className="arrow-slide" />
                <MdOutlineArrowOutward className="arrow-slide" />
              </span>
            </button>
          </div>

          {/* Grid */}
          <div className="flex flex-wrap justify-between mt-[4.5rem] max-md:flex-col max-md:gap-y-5">
            <div className="relative group w-[32%] min-h-[29.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[25rem]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/fintech.webp"
                  alt="Finance & Fintech"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Gradient */}
              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/100 via-transparent to-transparent z-[1]" />

              {/* TEXT BLOCK */}
              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
    translate-y-[50%] group-hover:translate-y-0
    transition-all duration-500 ease-out bg-gradient-to-t from-black/80 via-black/40   to-black-0
"
              >
                {/* Title (always visible, just moves slightly) */}
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  Finance & Fintech
                </h4>

                {/* Description (hidden until hover) */}
                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
      opacity-0 group-hover:opacity-90
      translate-y-5 group-hover:translate-y-0
      transition-all  duration-500 ease-out "
                >
                  We create digital products that are both secure and easy to
                  trust, with tidy dashboards and simple steps.
                </p>
              </div>
            </div>

            <div className="relative group w-[32%] min-h-[29.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[25rem]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/ecommerce.webp"
                  alt="E-Commerce & DTC"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0 z-[1]" />

              {/* Text Block */}
              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
      translate-y-[50%] group-hover:translate-y-0
      transition-all duration-500 ease-out
      bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0"
              >
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  E-Commerce & DTC
                </h4>

                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
        opacity-0 group-hover:opacity-90
        translate-y-5 group-hover:translate-y-0
        transition-all duration-500 ease-out"
                >
                  Our approach of making things simpler and more effective helps
                  users go from browsing to checkout in a few simple steps.
                </p>
              </div>
            </div>

            <div className="relative group w-[32%] min-h-[29.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[25rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/saas.webp"
                  alt="SaaS & B2B Platforms"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0 z-[1]" />

              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
      translate-y-[50%] group-hover:translate-y-0
      transition-all duration-500 ease-out
      bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0"
              >
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  SaaS & B2B Platforms
                </h4>

                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
        opacity-0 group-hover:opacity-90
        translate-y-5 group-hover:translate-y-0
        transition-all duration-500 ease-out"
                >
                  We build smooth interfaces that make it easy for teams to work
                  and manage tasks quickly.
                </p>
              </div>
            </div>

            <div className="relative group w-[32%] min-h-[29.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[25rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/web3.webp"
                  alt="Web3, AI & Emerging Tech"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0 z-[1]" />

              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
      translate-y-[50%] group-hover:translate-y-0
      transition-all duration-500 ease-out
      bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0"
              >
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  Web3, AI & Emerging Tech
                </h4>

                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
        opacity-0 group-hover:opacity-90
        translate-y-5 group-hover:translate-y-0
        transition-all duration-500 ease-out"
                >
                  Complex tech doesn't have to feel complex. We simplify the
                  experience so users adopt confidently.
                </p>
              </div>
            </div>

            <div className="relative group w-[32%] min-h-[29.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[25rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/edtech.webp"
                  alt="EdTech & HealthTech"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0 z-[1]" />

              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
      translate-y-[50%] group-hover:translate-y-0
      transition-all duration-500 ease-out
      bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0"
              >
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  EdTech & HealthTech
                </h4>

                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
        opacity-0 group-hover:opacity-90
        translate-y-5 group-hover:translate-y-0
        transition-all duration-500 ease-out"
                >
                  Our platforms let patients, students, and admins use them
                  anytime from any device.
                </p>
              </div>
            </div>

            <div className="relative group w-[32%] min-h-[22.5rem] overflow-hidden flex flex-col justify-end mb-[3.125rem] max-md:w-full max-md:min-h-[20rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/hospitality.webp"
                  alt="Hospitality & Legal Services"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 w-full h-[11rem] bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0 z-[1]" />

              <div
                className="absolute bottom-0 px-8 py-8 text-white z-[2]
      translate-y-[50%] group-hover:translate-y-0
      transition-all duration-500 ease-out
      bg-gradient-to-t from-black/50 via-black/40 via-black/10 to-black/0"
              >
                <h4 className="text-[1.625rem] font-semibold max-md:text-[1.25rem]">
                  Hospitality & Legal Services
                </h4>

                <p
                  className="mt-2 text-[1rem] leading-[1.6] max-md:text-[.875rem]
        opacity-0 group-hover:opacity-90
        translate-y-5 group-hover:translate-y-0
        transition-all duration-500 ease-out"
                >
                  Our designs let users focus on their activities, making
                  services dependable and easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* the process behind */}
      <ProcessSteps />
      {/* our awards */}
      <Achievements />
      {/* slug part */}

      <Review />
      {/*slug part  */}
      <ServiceAccordionSection data={content.benefits} reverse />

      <section className="w-full py-20">
        <div className="max-w-8xl mx-auto  md:px-20 ">
          <div className="bg-[#02004A] text-white md:rounded-3xl p-8 md:p-12 relative overflow-hidden py-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 text-xs mb-6">
              <span className="text-yellow-400 text-base">🔥</span>
              Only 4 seats per month
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              Try our product design service that built
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Start a one-week trial for{" "}
              <span className="text-yellow-300">$500</span>
            </h2>

            <p className="text-base text-white/80 mb-4">
              …and get the answers on:
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm"
                >
                  <span className="text-green-300">✔</span>
                  {item}
                </div>
              ))}
            </div>

            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-base transition">
              Start the trial week ↗
            </button>
          </div>
        </div>
      </section>
      <FAQSection />
      <Form />
    </div>
  );
}
