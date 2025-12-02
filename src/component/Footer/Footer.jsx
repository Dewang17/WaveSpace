"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 px-6 md:px-12">
      {/* TOP SECTION */}
      <div className="flex flex-col   lg:flex-row gap-16 md:gap-15  lg:gap-15 2xl:gap-20 max-w-full md:mx-auto 2xl:px-10">
        {/* Logo & Description */}
        <div className="lg:w-1/4 md:w-2/3 ">
          <h2 className="2xl:text-3xl lg:text-2xl  font-bold text-white mb-4">
            wavespace
          </h2>
          <p className="text-[#B9B9B9] leading-relaxed mb-8 md:text-xl lg:text-lg  font-semibold ">
            Wavespace is a global UI/UX design agency that boosts brand value
            with user-friendly, effective designs for web, mobile, and SaaS
            platforms.
          </p>
          <button className="flex items-center justify-between bg-[#E8FF52] text-black font-medium px-6 py-3 rounded-full w-fit hover:bg-[#d9f44d] transition-all cursor-pointer">
            Company Deck
            <span className="ml-2 bg-black text-white rounded-full p-1">
              <ArrowDown size={16} />
            </span>
          </button>
        </div>

        {/* GRID LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-4 gap-10  md:gap-15 lg:gap-10 2xl:gap-20 flex-1">
          {/* Services Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-2xl 2xl:text-3xl">
              Services
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg lg:text-xl 2xl:text-2xl  font-semibold lg:font-bold">
              <li>
                <Link href="#">UI UX Design</Link>
              </li>
              <li>
                <Link href="#">Web Design</Link>
              </li>
              <li>
                <Link href="#">Product Design</Link>
              </li>
              <li>
                <Link href="#">SaaS Design</Link>
              </li>
              <li>
                <Link href="#">Branding</Link>
              </li>
              <li>
                <Link href="#">Landing Page Design</Link>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="mt-10">
            <ul className="space-y-3 mt-10 sm:mt-0 text-[#B9B9B9] text-lg  lg:text-xl 2xl:text-2xl  font-semibold">
              <li>
                <Link href="#">UX Audit</Link>
              </li>
              <li>
                <Link href="#">Mobile App</Link>
              </li>
              <li>
                <Link href="#">Design System</Link>
              </li>
              <li>
                <Link href="#">Webflow</Link>
              </li>
              <li>
                <Link href="#">UX Research</Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-white font-semibold mb-4  md:text-lg lg:text-xl 2xl:text-2xl">
              Case studies
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] md:text-lg lg:text-xl sm:text-xl font-semibold">
              <li>
                <Link href="#">Open Hub</Link>
              </li>
              <li>
                <Link href="#">Better AI</Link>
              </li>
              <li>
                <Link href="#">Spacebook</Link>
              </li>
              <li>
                <Link href="#">Kodezi</Link>
              </li>
              <li>
                <Link href="#">View all work</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-3xl">
              Contact
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg  lg:text-xl sm:text-xl font-semibold">
              <li>
                <Link href="#">Clutch</Link>
              </li>
              <li>
                <Link href="#">Behance</Link>
              </li>
              <li>
                <Link href="#">Dribbble</Link>
              </li>
              <li>
                <Link href="#">Awwwards</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SOCIAL + CONTACT */}
      <div className="border-b border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-[#B9B9B9] text-lg pb-16 gap-8 md:gap-0">
        <div className="flex gap-6 flex-wrap">
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white">
            Twitter
          </Link>
        </div>

        <div>
          <p className="text-white text-sm mb-1">Let's work together</p>
          <Link
            href="#"
            className="text-[#E8FF52] text-2xl font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Call wavespace
            <span className="bg-[#E8FF52] text-black rounded-full p-2">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="w-full bg-black py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <h1 className="text-lg text-[#B9B9B9] whitespace-nowrap">
            wavespace LLC © 2025
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Center Text + Flags */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <h2 className="text-sm text-[#B9B9B9] leading-tight">
                Wavespace is a limited liability company based in
              </h2>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/icon/usa.webp"
                  width={18}
                  height={12}
                  alt="usa"
                />
                <Image
                  src="/images/icon/usa.webp"
                  width={18}
                  height={12}
                  alt="india"
                />
                <Image
                  src="/images/icon/usa.webp"
                  width={18}
                  height={12}
                  alt="bangladesh"
                />
              </div>
            </div>

            {/* Right Side — Overlapped Team Images */}
            <div className="flex -space-x-3">
              {[
                "/images/man1.webp",
                "/images/man2.webp",
                "/images/man3.webp",
                "/images/man3.webp",
                "/images/man3.webp",
                "/images/man3.webp",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-black"
                  alt="team"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="w-full mt-10">
        <Image
          src="/images/wavespace.webp"
          alt="wavespace footer banner"
          width={1800}
          height={1000}
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
}
