"use client";
import LogoSlider from "@/component/LogoSlider";
import Slider2 from "@/component/Slider2";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { ArrowUpRight, Flame, Check } from "lucide-react";
import Achievements from "@/component/Achievements";
import { MdOutlineArrowOutward } from "react-icons/md";
import Review from "@/component/Review";
import ServiceSection from "@/component/ServiceSection";

export default function page() {
  const services = [
    "PSP Options for P2M Transactions",
    "Multiple Payment Service Provider Integration",
    "Secure Person-to-Merchant Payments",
    "Real-time Transaction Processing",
    "Analytical & Reporting Dashboard",
    "Revenue & Settlement Insights",
    "Financial Performance Monitoring",
  ];

  const cards = [
    {
      title: "For startups",
      icon: "🚀",
      desc: "We assist early-stage teams in turning their ideas into MVPs more quickly. Get actual user input, win over investors, and release your app stress-free.",
      points: [
        "Launch MVPs fast",
        "Validate with users",
        "Build investor decks",
      ],
    },
    {
      title: "For Product Teams",
      icon: "</>",
      desc: "We become a part of your internal process, handling the main tasks for you. Rely on us for UX support, design systems, and an easy transition of your project.",
      points: ["Full-cycle UX/UI", "Design systems", "Cross-platform support"],
    },
    {
      title: "For Founders",
      icon: "🖥️",
      desc: "Design that helps you reach your targets. We care about how things work and how they help, using hard information, not guesswork.",
      points: [
        "Growth-focused UX",
        "Landing page design",
        "A/B testing assets",
      ],
    },
  ];
  const features = [
    "See how we plan, design and build",
    "Get a full view of our UX process, made for you",
    "Track how we work, communicate and stay on schedule",
    "Know if we're the right fit before you commit",
  ];
  const industries = [
    {
      title: "Finance & Fintech",
      description:
        "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
      img: "/images/fintech.webp",
      large: false,
    },
    {
      title: "E-Commerce & DTC",
      description:
        "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
      img: "/images/ecommerce.webp",
      large: true,
    },
    {
      title: "SaaS & B2B Platforms",
      description:
        "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
      img: "/images/saas.webp",
      large: false,
    },
    {
      title: "Web3, AI & Emerging Tech",
      description:
        "Complex tech doesn't have to feel complex. We simplify the experience so users understand, explore, and adopt with confidence.",
      img: "/images/web3.webp",
      large: false,
    },
    {
      title: "Hospitality & Legal Services",
      description:
        "Our approach to design lets users focus on their activities, so services are easy and dependable to use.",
      img: "/images/hospitality.webp",
      large: false,
    },
    {
      title: "EdTech & HealthTech",
      description:
        "Our platforms allow patients, students, and administrators to use them at any time, from any device.",
      img: "/images/edtech.webp",
      large: false,
    },
  ];

  return (
    <>
      <section className="bg-[#000054] text-[#ffffff] w-full relative overflow-hidden h-full">
        <div className="flex justify-between items-center mx-auto md:gap-22 flex-col md:flex-row px-5 md:px-10 lg:px-16 lg:30 ">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[920px] leading-tight">
            <div className="inline-block text-sm px-10 py-2 rounded-full mb-5 border border-white/20">
              <span className="font-semibold">
                Clutch <span className="text-red-500">★★★★★</span> 5.0
              </span>
            </div>

            <h1 className="text-xl md:text-6xl font-bold leading-[1.3] ">
              Smart fintech services <br /> powered by AI
            </h1>

            <p className="text-md text-white-200 font-semibold mt-6 leading-relaxed max-w-xl">
              We help fintech startups and enterprises transform complex
              financial ideas into secure, intuitive digital products — designed
              for trust, compliance, and scale.
            </p>

            <p className="italic text-gray-300 mt-4">
              “Great fintech design builds confidence before the first
              transaction.”
            </p>

            <div className="flex flex-wrap gap-6 mt-10">
              <button className="bg-[#e6ff3f] text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                Talk to a fintech expert
              </button>

              <button className="border border-white/40 px-8 py-4 rounded-full flex items-center gap-3 hover:border-white transition-colors duration-300">
                <Image
                  src="/images/icon/icon1.svg"
                  width={24}
                  height={24}
                  alt="figma"
                />
                View case studies
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE MOCKUP */}
          <div className="relative flex justify-center md:justify-end items-center w-full md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/images/service.webp"
              alt="Fintech UI mockup"
              width={750}
              height={500}
              className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-xl object-contain"
            />
          </div>
        </div>
      </section>
      <section>
        <LogoSlider />
      </section>
      <ServiceSection />
      {/* Industry expertise */}
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
      {/*   Who we design for and how */}
      <section className="w-full bg-[#f3f3f3] py-24">
        <div className="max-w-8xl px-6">
          {/* TOP HEADING + BUTTON */}
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Fintech Innovators
              </h2>
              <h2 className="text-3xl md:text-[2.5rem] lg:text-5xl font-bold text-gray-400 leading-tight">
                with Intelligent Solutions
              </h2>
            </div>

            <button className="group bg-[#3F2FEE] text-white text-[15px] font-bold rounded-full px-8 py-4 hover:bg-black transition-all flex flex-row justify-center items-center gap-2 cursor-pointer mt-10">
              <span>Start Your Project</span>
              <MdOutlineArrowOutward className="text-[20px] arrow-animate" />
            </button>
          </div>

          {/* 3 CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-sm border border-gray-200"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 text-gray-800">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      /{/* our award */}
      <section>
        <Achievements />
      </section>
      {/* review */}
      <section>
        <Review />
      </section>
      <section className="w-full py-20">
        <div className="max-w-8xl px-6">
          <div className="bg-[#02004A] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 text-xs mb-6">
              <span className="text-yellow-400 text-base">🔥</span>
              Limited Offer: Only 4 seats per month
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              Experience Our Fintech Solutions & UI/UX Expertise
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Start a one-week trial for{" "}
              <span className="text-yellow-300">$500</span>
            </h2>

            <p className="text-base text-white/80 mb-4">
              Discover how our innovative solutions can transform your financial
              operations. During the trial, you’ll get insights into:
            </p>

            {/* Features Pills */}
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
              Start Your Trial Week ↗
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
