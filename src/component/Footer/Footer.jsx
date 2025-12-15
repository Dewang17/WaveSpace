"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 px-6 md:px-12">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 max-w-full md:mx-auto 2xl:px-10">
        {/* Logo & Description */}
        <div className="lg:w-1/4 md:w-2/3">
          <h2 className="2xl:text-3xl lg:text-2xl font-bold text-white mb-4">
            Cashigo
          </h2>
          <p className="text-[#B9B9B9] leading-relaxed mb-8 md:text-xl lg:text-lg font-semibold">
            Cashigo is a next-generation payment and financial infrastructure
            platform built to help businesses move money faster, safer, and
            smarter across digital ecosystems.
          </p>
          <button className="flex items-center justify-between bg-[#E8FF52] text-black font-medium px-6 py-3 rounded-full w-fit hover:bg-[#d9f44d] transition-all cursor-pointer">
            Download Deck
            <span className="ml-2 bg-black text-white rounded-full p-1">
              <ArrowDown size={16} />
            </span>
          </button>
        </div>

        {/* GRID LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 flex-1">
          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-2xl">
              Solutions
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg lg:text-xl font-semibold">
              <li>
                <Link href="#">Digital Payments</Link>
              </li>
              <li>
                <Link href="#">Merchant APIs</Link>
              </li>
              <li>
                <Link href="#">Payouts & Settlements</Link>
              </li>
              <li>
                <Link href="#">Subscription Billing</Link>
              </li>
              <li>
                <Link href="#">Fraud Protection</Link>
              </li>
              <li>
                <Link href="#">Global Transfers</Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-2xl">
              Platform
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg lg:text-xl font-semibold">
              <li>
                <Link href="#">Cashigo Checkout</Link>
              </li>
              <li>
                <Link href="#">Developer Docs</Link>
              </li>
              <li>
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
              <li>
                <Link href="#">Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-2xl">
              Company
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg lg:text-xl font-semibold">
              <li>
                <Link href="#">About Cashigo</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:text-lg lg:text-2xl">
              Community
            </h3>
            <ul className="space-y-3 text-[#B9B9B9] text-lg lg:text-xl font-semibold">
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">GitHub</Link>
              </li>
              <li>
                <Link href="#">Clutch</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SOCIAL + CTA */}
      <div className="border-b border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-[#B9B9B9] text-lg pb-16 gap-8">
        <div className="flex gap-6 flex-wrap">
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white">
            Twitter
          </Link>
        </div>

        <div>
          <p className="text-white text-sm mb-1">Start building with Cashigo</p>
          <Link
            href="#"
            className="text-[#E8FF52] text-2xl font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Talk to our team
            <span className="bg-[#E8FF52] text-black rounded-full p-2">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="w-full bg-black py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-lg text-[#B9B9B9] whitespace-nowrap">
            Cashigo Technologies LLC © 2025
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h2 className="text-sm text-[#B9B9B9] leading-tight">
                Cashigo operates globally with teams across
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

            {/* Team Images */}
            <div className="flex -space-x-3">
              {[
                "/images/man1.webp",
                "/images/man2.webp",
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
        {" "}
        <Image
          src="/images/wavespace.webp"
          alt="wavespace footer banner"
          width={1800}
          height={1000}
          className="w-full object-cover"
        />{" "}
      </div>
    </footer>
  );
}
