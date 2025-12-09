import Image from "next/image";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                W
              </div>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-sm font-medium text-green-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for New Projects
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black mb-6">
              Design partner for{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                future unicorn founders
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg text-gray-600 mb-8">
              We are partnering with ambitious founders to build high-converting
              design. Faster shipping, better conversions, and more funding.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="px-7 py-3 rounded-full bg-black text-white font-semibold hover:opacity-90 transition">
                Book an intro call
              </button>

              <button className="px-7 py-3 rounded-full border border-gray-300 font-semibold flex items-center gap-2 hover:bg-gray-50 transition">
                Chat now
              </button>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-12">
              <span className="flex items-center gap-2 font-medium">
                <Check size={16} className="text-indigo-600" />
                Certified Partner
              </span>
              <span className="flex items-center gap-2 font-medium">
                ⭐ 49 Reviews
              </span>
              <span className="flex items-center gap-2 font-medium">
                ✔ Official Expert
              </span>
            </div>

            {/* Logos */}
            <p className="text-sm text-gray-500 mb-4">
              Trusted by 500+ global founders
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm font-semibold">
              <span>Delve</span>
              <span>Y Combinator</span>
              <span>ZeroEssay</span>
              <span>Recruitly</span>
              <span>Techstars</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-6 shadow-lg">
              <Image
                src="/images/startup_images/img1.webp" // replace with your image
                alt="Product preview"
                width={900}
                height={600}
                className="rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
