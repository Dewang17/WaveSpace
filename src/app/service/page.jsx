"use client";
import LogoSlider from "@/component/LogoSlider";
import Slider2 from "@/component/Slider2";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { ArrowUpRight, Flame, Check } from "lucide-react";
import Achievements from "@/component/Achievements";

export default function page() {
  const services = [
    "UI UX Design",
    "UX Audit",
    "Design System",
    "UI UX Consulting",
    "UX Research",
    "Usability Testing",
    "Wireframe & UI Prototyping",
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
      <section className="bg-[#000054] text-[#ffffff] w-full  relative overflow-hidden h-full">
        <div className="flex justify-between items-center mx-auto gap-22 flex-col md:flex-row px-16 ">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 leading-tight">
            <div className="inline-block  text-sm px-14 py-2 rounded-full mb-5 border border-white/20">
              <span className="font-semibold ">Clutch ★★★★★ 5.0</span>
            </div>

            <h1 className="text-xl md:text-6xl font-bold leading-[1.3]">
              Digital product &amp; UI <br /> UX design services
            </h1>

            <p className="text-md text-white-200 font-semibold mt-6 leading-relaxed max-w-xl">
              Are you struggling to turn your ideas into something users love?
              Wavespace designs digital products for the US, UK, Europe, and
              Central Asia that are clean, fast, and ready to develop — built
              with smart UX and clean UI.
            </p>

            <p className="italic text-gray-300 mt-4">
              “Design is the bridge between user intent and product impact..”
            </p>

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
              src="/images/service.webp"
              alt="UI mockup"
              width={750}
              height={500}
              className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-xl object-contain"
            />
          </div>
        </div>
      </section>
      <section>
        {/* <div className="text-center text-[1.45rem]  font-medium">
          <h1 className="text-black">Trusted by 500+ global companies</h1>
        </div> */}

        {/* <Slider2 /> */}
        <LogoSlider />
      </section>
      <section className="w-full bg-white ">
        {/* First */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-22 px-7 pb-20 pt-10 mx-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center ">
            <div className="relative">
              <img
                src="/images/mobile.webp"
                alt="UI/UX Mobile Mockup"
                className="w-[580px] "
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Your users will find the app easy to use. Our UI and UX services
              ensure your product is user-friendly so that it appeals to and
              catches the hearts of users on any device.
            </p>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="max-w-8xl  grid grid-cols-1 md:grid-cols-2 gap-22 px-14 pb-20 pt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Your users will find the app easy to use. Our UI and UX services
              ensure your product is user-friendly so that it appeals to and
              catches the hearts of users on any device.
            </p>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/laptop.webp"
                alt="UI/UX Mobile Mockup"
                className="w-[580px] "
              />
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="max-w-8xl  grid grid-cols-1 md:grid-cols-2 gap-22 px-14 pb-20 pt-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/mobile2.webp"
                alt="UI/UX Mobile Mockup"
                className="w-[580px] "
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Your users will find the app easy to use. Our UI and UX services
              ensure your product is user-friendly so that it appeals to and
              catches the hearts of users on any device.
            </p>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Fourth */}
        <div className="max-w-8xl  grid grid-cols-1 md:grid-cols-2 gap-22 px-14 pb-20 pt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Your users will find the app easy to use. Our UI and UX services
              ensure your product is user-friendly so that it appeals to and
              catches the hearts of users on any device.
            </p>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-2xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/board.webp"
                alt="UI/UX Mobile Mockup"
                className="w-[580px] "
              />
            </div>
          </div>
        </div>
        {/* Fifth */}
        <div className="max-w-8xl  grid grid-cols-1 md:grid-cols-2 gap-22 px-14 pb-20 pt-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/lap2.webp"
                alt="UI/UX Mobile Mockup"
                className="w-[580px] "
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Your users will find the app easy to use. Our UI and UX services
              ensure your product is user-friendly so that it appeals to and
              catches the hearts of users on any device.
            </p>

            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    v
      {/* our award */}
      <section>
        <Achievements />
      </section>

      <section className="w-full bg-[#f3f3f3] py-24">
        <div className="max-w-8xl  px-6">
          {/* TOP HEADING + BUTTON */}
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Who we design for and how
              </h2>
              <h2 className="text-5xl font-bold text-gray-400 leading-tight">
                we support them
              </h2>
            </div>

            <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition">
              Start your project ↗
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
      <section className="w-full py-20">
        <div className="max-w-8xl  px-6">
          <div className="bg-[#02004A] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 text-xs mb-6">
              <span className="text-yellow-400 text-base">🔥</span>
              Only 4 seats per month
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              Test our product & UI UX design expertise.
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
                  className="flex items-center gap-2 bg-white/10 border border-white/20 px-14 py-2 rounded-full text-sm"
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
    </>
  );
}
