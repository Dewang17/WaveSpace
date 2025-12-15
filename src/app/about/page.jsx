"use client";
import Image from "next/image";
import React from "react";
import Slider2 from "@/component/Slider2";
import ProcessSteps from "@/component/ProcessSteps";
import { useState, useEffect } from "react";
import { ArrowUpRight, Flame, Check } from "lucide-react";
import ImageSlider from "@/component/ImageSlider";
import PersonSlider from "@/component/PersonSlider";
import Testimonial from "@/component/Testimonial";
import LogoSlider from "@/component/LogoSlider";
import Slider from "@/component/Slider";

const wordsArray = [
  "SaaS companies.",
  "AI/ML Solutions.",
  "Future Unicorns.",
  "Startups.",
];
const items = [
  "Startup-Speed Process",
  "SaaS, AI & Web3 Experts",
  "Work with Experts, Not Layers",
  "Design That Performs",
  "Flexible Engagement Models",
];

const states = [
  {
    id: "/01",
    title: "92%",
    sub: "client satisfaction in post-project reviews",
  },
  { id: "/02", title: "$10B+", sub: "valuation influenced by our design" },
  { id: "/03", title: "2019", sub: "Founded, 6 years of experience" },
  { id: "/04", title: "25M+", sub: "monthly visits on client platforms" },
  {
    id: "/05",
    title: "500+ global project",
    sub: "250+ testimonial with trusted by YC-backed, VC-funded, a16z, Sequoia",
  },
];
const features = [
    "See how we plan, design and build",
    "Get a full view of our UX process, made for you",
    "Track how we work, communicate and stay on schedule",
    "Know if we're the right fit before you commit",
  ];

export default function Page() {
  const [index, setIndex] = useState(0);
  const images = Array.from(
    { length: 13 },
    (_, i) => `/images/about_slider/img${i + 1}.webp`
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordsArray.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="w-full flex items-center justify-between px-10 lg:px-28 py-30 lg:py-40">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-[1000] leading-tight tracking-tight">
            Built for digital economy, and we are the engine powering{" "}
            <span className="inline-block bg-gradient-to-r from-orange-500 to-blue-700 bg-clip-text text-transparent animate-slideUp">
              seamless payments.
            </span>
          </h1>

          <p className="text-2xl font-bold pt-10">
            <span className="text-gray-500 text-3xl font-mono">Cashigo</span>{" "}
            isn’t just a payment tool — it’s a future-ready platform enabling
            fast, secure, and scalable financial transactions for modern
            businesses and marketplaces.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/team.webp" // replace with your image
              alt="Team collaboration"
              width={500}
              height={200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <LogoSlider />
      </section>
      <Testimonial />

      <section className="w-full bg-[#f5f5f5] py-24 px-6 md:px-10 lg:px-10 2xl:px-28">
        <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-semibold leading-tight text-black">
          Our Vision for a Next-Gen Digital Economy{" "}
          <span className="text-[#29242469]">— future-ready finance.</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/images/fam.webp"
              width={1250}
              height={800}
              alt="team photo"
              className=" w-auto h-[680px] object-cover pt-10"
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="flex flex-col gap-22">
            <div>
              {/* Vision for Business */}
              <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
                <strong>Vision for Business:</strong> We aim to revolutionize
                digital payments for businesses by providing seamless, modern
                solutions that simplify operations, accelerate growth, and help
                them thrive confidently in the digital era.
              </p>
              <br />

              {/* Vision for Payer */}
              <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
                <strong>Vision for Payer (Consumer/User):</strong> Our goal is
                to empower payers with smooth, secure, and effortless digital
                transactions— delivering a trusted and frictionless payment
                experience every time.
              </p>
              <br />

              {/* Vision for Ecosystem */}
              <p className="text-black text-lg md:text-xl leading-relaxed font-normal">
                <strong>Vision for Ecosystem:</strong> We strive to build an
                inclusive, innovative, and collaborative financial ecosystem
                where accessible and efficient services enable progress for
                businesses, individuals, and communities at scale.
              </p>
            </div>

            <div>
              <button className="bg-[#4A3AFF] hover:bg-[#3a2ed1] transition text-white px-7 py-4 rounded-full font-semibold flex items-center gap-2">
                Shape your vision ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24 px-6 md:px-10 xl:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/boys.webp"
              width={500}
              height={550}
              alt="team working"
              className="rounded-xl object-cover shadow"
            />
          </div>

          {/* RIGHT SIDE TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-extrabold text-black leading-tight">
              Why Cashigo? Because we <br /> empower growth.
            </h2>

            <p className="text-gray-500 mt-4 text-[18px] leading-relaxed max-w-md">
              Cashigo simplifies payments, enhances user experience, and equips
              businesses with the tools they need to scale in the digital
              economy.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Efficiency — cashigo streamlines payment processes, reducing operational complexities and saving valuable time.",
                "Growth — Access new payment methods and expand revenue opportunities with modern, scalable payment solutions.",
                "Competitive Edge — Offer smarter, faster, and more secure payment experiences that attract today’s digital-first customers.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-4 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-gray-800 font-medium max-w-md">
                    <span className="text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {text}
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SUB SECTION */}
        {/* <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h3 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-extrabold text-black leading-tight">
            Powering efficiency, growth & <br />
            <span className="text-gray-500">your competitive edge.</span>
          </h3>

          <button className="bg-[#4A3AFF] hover:bg-[#362ec5] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition shadow-sm">
            View services <ArrowUpRight className="h-5 w-5" />
          </button>
        </div> */}
      </section>

      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-20 py-10">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900 lg:pb-10">
            From vision to velocity, we are <br />
            <span className="text-gray-400 font-semibold">
                all in one place.
              </span>
          </h2>

          <button className="mt-6 md:mt-0 bg-[#3F2FFE] hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition">
            View Service    
          </button>
        </div>
        <Slider />
      </section>  

      {/* We don’t just design. We believe, then deliver. */}

      <section className="bg-white py-20 px-6 md:px-12 xl:px-24">
        <div className=" max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full flex justify-center">
            <div className="overflow-hidden shadow-md w-full max-w-[450px]">
              <Image
                src="/images/believe-deliver.webp"
                alt="Designer working on laptop"
                width={700}
                height={500}
                className=" object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center text-gray-900 lg:pl-10">
            <h2 className="text-4xl md:text-[2.8rem] leading-tight font-semibold mb-6">
              We don't just design.{" "}
              <span className="text-gray-400 font-semibold">
                We believe, then deliver.
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-[600px]">
              We've seen great ideas fail just because the UX didn't work.
              That's why we design to solve, not just to impress. When you care
              about users like a founder does, design becomes direction, not
              decoration. And that mindset has changed everything for our
              clients:
            </p>

            <ul className="space-y-3 mb-10 text-xl font-bold">
              <li>35% faster product launches through scalable systems</li>
              <li>480+ dev hours saved per project</li>
              <li>Up to 67% shorter onboarding time</li>
              <li>92% client satisfaction across 250+ global brands</li>
              <li>40% drop in user drop-off through better UX</li>
            </ul>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-base font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                Build your product
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder’s Led Journey */}
      <section
        className="bg-cover bg-center relative w-full"
        style={{
          backgroundImage: "url('/images/backgroundImage.webp')",
        }}
      >
        {/* Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/0"></div>

        <div
          className="container mx-auto flex flex-col justify-center py-40 px-6 
  sm:py-24 sm:px-5 
  md:py-40 md:px-10 
  lg:py-52"
        >
          {/* Founder's */}
          <div
            className="
      text-white font-bold leading-none
      text-5xl     /* mobile */
      sm:text-6xl  /* small screens */
      md:text-8xl  /* tablets/laptops */
      lg:text-9xl  /* desktop */
      xl:text-[10rem] /* large screens */
      md:pl-10 text-left
      text-center sm:text-left
    "
          >
            Founder's
          </div>

          {/* Led Journey */}
          <div
            className="
      text-white font-bold leading-none
      text-5xl
      sm:text-6xl
      md:text-8xl
      lg:text-9xl
      xl:text-[10rem]
      md:pr-10
      text-center sm:text-right
      mt-4 md:mt-0
    "
          >
            Led Journey
          </div>
        </div>
      </section>
      {/* back in 2014 */}
      <section className="bg-black text-white overflow-hidden py-[9.75rem] max-md:py-[4rem]">
        <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-[2.5rem]">
          {/* --- Top Wrap --- */}
          <div className="flex justify-between items-start gap-[8.875rem] border-b border-[#242424] pb-[7.5rem] max-md:flex-col max-md:gap-[2.5rem] max-md:pb-[3.25rem]">
            {/* Desktop Image */}
            <div className="flex-none max-md:hidden">
              <Image
                src="/images/shahid.webp"
                alt="Author image"
                width={700}
                height={632}
                className="object-cover w-[11.375rem] h-[11.875rem]"
                loading="lazy"
              />
            </div>

            {/* Quote Text */}
            <div className="flex flex-col justify-start items-start w-full">
              <p className="text-[1.125rem] lg:text-[1.75rem] leading-[1.54] tracking-[0.28px] max-md:text-[1.125rem] text-white/90">
                "Like most kids from a middle-class home, I aimed for
                engineering. Design? Never crossed my mind. But when my uncle
                nudged me toward graphic arts, I followed, not out of passion,
                but because it was something. Somewhere along that journey, I
                stumbled into UI/UX. No mentor, no roadmap. Just late nights,
                curiosity, and a deep urge to make things make sense. I kept
                wondering, how can design solve real problems?"
              </p>
            </div>
          </div>

          {/* --- Mobile Image --- */}
          <div className="hidden max-md:block mt-10 flex flex-col items-center">
            <Image
              src="/images/shahid.webp"
              alt="Author image"
              width={700}
              height={632}
              className="object-cover w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div className=" mx-auto flex justify-between md:items-start items-center gap-[7.75rem] max-lg:flex-col max-lg:gap-[2.5rem] max-md:mb-[4rem] mb-[9.75rem] pt-[7.5rem] px-6 md:px-10">
          {/* --- Left: Text Grid --- */}
          <div className="grid grid-cols-2 gap-x-[4.5rem] gap-y-[2.5rem] w-full max-md:grid-cols-1 max-md:gap-y-[2rem]">
            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              That question lit a fire in me. One project led to another &
              before long, I was designing for bigger companies, across borders,
              and I finally wanted to work abroad by going. By then, the dream
              had changed. It wasn't just about earning or designing for clients
              anymore.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              In 2019, I paused and dug deeper, not into tools, but into why
              products fail. And from that, Wavespace was born. I never planned
              to build an agency. I just wanted to solve problems. That mission
              hasn't changed. We don't show up to impress.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              I wanted to understand, <br /> Why do great founders fail, and why
              do strong products disappear? That one question led me across
              projects, borders, and eventually, toward something bigger.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              We show up to help founders who were once like me, full of vision,
              short on clarity. We design for outcomes. Because future Unicorns
              aren't found, they're designed. Now I'm here, ready to team up
              with venture capital, building what's next, with clarity, speed,
              and heart.
            </p>

            {/* Center Big Quote (Desktop) */}
            <div className="col-span-2 text-center mt-10 max-md:hidden">
              <Image
                src="/images/quote-icon.webp"
                alt="quote icon"
                width={28}
                height={28}
                className="mx-auto mb-6"
              />
              <p className="text-[2rem] leading-[1.31] text-white/90">
                “Wavespace started with design, now we're building future
                unicorns. With VC partners and early-stage founders, we combine
                clarity, code, and capital to launch what's next.”
              </p>
            </div>

            {/* Mobile Quote */}
            <div className="hidden max-md:block text-center mt-10">
              <p className="text-[1.375rem] leading-[1.4] tracking-[0.22px] text-white/90">
                “Wavespace started with design, now we're building future
                unicorns. With VC partners and early-stage founders, we combine
                clarity, code, and capital to launch what's next.”
              </p>
            </div>
          </div>

          {/* --- Right: Author Image --- */}
          <div className="flex flex-col md:items-start md:justify-center max-w-[25rem] w-full md:mx-auto flex-none max-md:hidden">
            <div className="text-[1.125rem] font-medium">Shahid Miah</div>
            <div className="text-[#b9b9b9] text-[0.875rem] mt-1 mb-12">
              2025, we growing fast with unicorn energy
            </div>
            <Image
              src="/images/author_image.webp"
              alt="author image"
              width={400}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* --- Mobile Image --- */}
          <div className="hidden max-md:flex flex-col items-center text-center">
            <Image
              src="/images/author_image.webp"
              alt="author image"
              width={400}
              height={500}
              className="w-full object-cover"
            />
            <div className="text-[1.125rem] font-medium mt-6">Shahid Miah</div>
            <div className="text-[#b9b9b9] text-[0.875rem] mt-1 mb-8">
              2025, we growing fast with unicorn energy
            </div>
          </div>
        </div>
        <div className="flex animate-marquee gap-6">
          {/* Duplicate list for seamless scroll */}
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="flex-none w-[15.5rem] sm:w-[10.25rem] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`about slider image ${index + 1}`}
                width={248}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
      {/* team section */}
      <section className="bg-white text-black py-[7rem] max-md:py-[4rem]">
        <div className="container mx-auto flex flex-col px-6 md:px-10 max-w-[1440px]">
          {/* --- Top Text Section --- */}
          <div className="flex justify-between items-end flex-wrap gap-[2rem] max-md:gap-[1rem] max-md:flex-col">
            <h3 className="text-[2rem] font-medium max-md:text-[1.25rem] xl:pb-52">
              Meet the team behind Cashigo
            </h3>

            <div className="max-w-[70%] max-lg:max-w-full">
              <h3 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[1.3em] font-bold max-md:text-[1.875rem]">
                We are fintech builders, payment architects, UX thinkers, & API
                specialists. <br className="hidden md:block" />
                Your payments partner,{" "}
                <span className="text-[#29242469]">always connected.</span>
              </h3>
            </div>
          </div>

          {/* --- Grid Cards Section --- */}
          <div className="grid grid-cols-3 gap-[6px] mt-[6rem] max-md:grid-cols-1 max-md:mt-[2.5rem]">
            {/* Card 01 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/01</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-bold leading-[1.35] max-md:text-[2rem]">
                  India
                </div>
                <p className="text-[#3a3a3a] text-[1rem] lg:text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Fintech-first team serving businesses
                  <br />
                  across urban & emerging markets
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/02</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-bold leading-[1.35] max-md:text-[2rem]">
                  20+
                </div>
                <p className="text-[#3a3a3a] text-[1rem] lg:text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Payment use cases supported
                  <br />
                  (UPI, Cards, Wallets, APIs, Payouts)
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/03</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-bold leading-[1.35] max-md:text-[2rem]">
                  5M+
                </div>
                <p className="text-[#3a3a3a] text-[1rem] lg:text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Secure transactions processed
                  <br />
                  across Cashigo platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-20 mb-20 px-5 lg:px-12">
          {/* Member 1 */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden">
              <Image
                src="/images/team1.webp"
                alt="Founder"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Shahid Miah
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">Founder & CEO</div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden">
              <Image
                src="/images/team2.webp"
                alt="Head of Product"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Noor Mohammad
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">
              Head of Product & Payments
            </div>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden">
              <Image
                src="/images/team3.webp"
                alt="Engineer"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Barakatullah
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">
              Senior Platform Engineer
            </div>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden">
              <Image
                src="/images/team4.webp"
                alt="Designer"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Rabbi Mia
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">
              UX & Compliance Designer
            </div>
          </div>
        </div>

        {/* BELIEFS SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-5 lg:px-12">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-bold leading-[1.35]">
              The principles{" "}
              <span className="text-[#29242469]">
                powering <br /> Cashigo
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-14 w-full lg:max-w-[40.375rem]">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">01</div>
              <div>
                <div className="text-[1.5rem] font-bold">Trust</div>
                <p className="md:text-[1rem] leading-[1.54]">
                  Payments are built on trust. Cashigo prioritizes security,
                  compliance, and transparency to protect every transaction.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">02</div>
              <div>
                <div className="text-[1.5rem] font-bold">Simplicity</div>
                <p className="md:text-[1rem] leading-[1.54]">
                  We simplify complex financial flows into clean, intuitive
                  experiences that move money faster and smarter.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">03</div>
              <div>
                <div className="text-[1.5rem] font-bold">Reliability</div>
                <p className="md:text-[1rem] leading-[1.54]">
                  Cashigo is built for scale and uptime — because reliability
                  isn’t optional in modern finance.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">04</div>
              <div>
                <div className="text-[1.5rem] font-bold">Growth</div>
                <p className="md:text-[1rem] leading-[1.54]">
                  Every feature is designed to help businesses grow — more
                  users, better conversions, and scalable revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* from bangladesh to usa */}
      <PersonSlider />
      {/* process behind our */}
      <section>
        <ProcessSteps />
      </section>
      {/* try our ui/ux */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
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
    </div>
  );
}
