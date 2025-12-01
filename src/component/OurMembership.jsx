"use client";

import Image from "next/image";

export default function OurMembership() {
  return (
    <section className="flex bg-gray-100 pt-[9.75rem] pb-[9.75rem] w-full">
      <div
        className="
        w-full max-w-[1440px] mx-auto
        px-4 sm:px-6 md:px-8 lg:px-[2.5rem]
        flex flex-col gap-[1rem]
      "
      >
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900 lg:pb-10">
            Our membership <br />
            <span className="text-gray-400 font-semibold">benefits</span>
          </h2>

          <button className="mt-6 md:mt-0 bg-[#3F2FFE] hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition">
            Choose a plan
          </button>
        </div>

        {/* ================= TOP GROUP ================= */}
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-4">
          {/* CARD 1 */}
          <div className="w-full lg:w-[calc(25%-0.75rem)]">
            <div
              className="bg-white shadow-sm hover:shadow-md transition
              flex flex-col md:flex-row md:items-center md:justify-between
              lg:flex-col
              rounded-3xl p-[2rem_1.5rem_0.9375rem_2rem] md:p-[2.5rem_1.875rem] "
            >
              <div className="md:w-1/2 lg:w-full">
                <h3 className="text-[1.375rem] font-semibold mb-4">
                  Flat monthly fee
                </h3>
              </div>
              <div>
                <p className="text-[0.9375rem] leading-[1.375rem]">
                  Our pricing remains same each month — no guesswork.
                </p>
              </div>

              <div className="relative w-full md:w-1/2 lg:w-full h-[180px] mt-6 lg:mt-8 overflow-hidden rounded-2xl">
                <video
                  src="/videos/flat_monthly_fee.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-centre"
                />
              </div>
            </div>
          </div>

          {/* CARD 2 (unchanged LG) */}
          <div className="w-full md:w-full lg:w-[calc(50%-0.75rem)] ">
            <div
              className="bg-white shadow-sm hover:shadow-md transition
              flex flex-col md:flex-row lg:flex-row items-center justify-between
              rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem] h-full"
            >
              <div className="lg:w-1/2 md:w-1/2 w-full">
                <h3 className="text-[1.375rem] font-semibold mb-4">
                  Fast turnaround
                </h3>
              </div>
              <div>
                <p className="text-[0.9375rem] leading-[1.375rem] font-medium">
                  Our team creates stunning designs tailored to your needs,
                  ready in just a few days.
                </p>
              </div>

              <div className="relative w-full md:w-1/2 lg:w-1/2 h-[250px] mt-6 md:mt-0 overflow-hidden rounded-2xl">
                <video
                  src="/videos/fast_turnaround.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-centre"
                />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full lg:w-[calc(25%-0.75rem)]">
            <div
              className="bg-white shadow-sm hover:shadow-md transition
              flex flex-col md:flex-row md:items-center md:justify-between
              lg:flex-col
              rounded-3xl p-[2rem_1.5rem_0.9375rem_2rem] md:p-[2.5rem_1.875rem] h-full"
            >
              <div className="md:w-1/2 lg:w-full">
                <h3 className="text-[1.375rem] font-semibold mb-4">
                  Unlimited revisions
                </h3>
              </div>
              <div>
                <p className="text-[0.9375rem] leading-[1.375rem]">
                  Change it, swap it, until you love it — as per as design need
                  changes
                </p>
              </div>

              <div className="relative w-full md:w-1/2 lg:w-full h-[180px] mt-6 lg:mt-8 overflow-hidden rounded-2xl">
                <video
                  src="/videos/unlimited_revisions.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-centre"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM GROUP ================= */}
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-4">
          {/* CARD 4 */}
          <div className="w-full md:w-full lg:w-[calc(50%-0.75rem)]">
            <div
              className="bg-white shadow-sm hover:shadow-md transition
              flex flex-col md:flex-row lg:flex-row items-center justify-between
              rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem]"
            >
              <div className="md:w-1/2 lg:w-1/2">
                <h3 className="text-[1.375rem] font-semibold mb-4">
                  Full design service
                </h3>
              </div>
              <div>
                <p className="text-[1 rem] leading-[1.375rem]">
                  We offer full-service design, covering every aspect to meet
                  all your needs.
                </p>
              </div>

              <div className="relative w-full md:w-1/2 lg:w-1/2 h-[220px] mt-6 md:mt-0 overflow-hidden rounded-2xl">
                <video
                  src="/videos/muted.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-centre"
                />
              </div>
            </div>
          </div>

          {/* CARD 5 ✅ REFERENCE CARD (UNCHANGED) */}
          <div className="w-full lg:w-[calc(50%-0.75rem)]">
            <div
              className="bg-white shadow-sm hover:shadow-md transition
              flex flex-col md:flex-row lg:flex-row items-center justify-between
              rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem]"
            >
              <div className="lg:w-1/2 md:w-1/2">
                <h3 className="text-[1.375rem] font-semibold mb-4">
                  No contracts, no headaches
                </h3>
              </div>
              <div>
                <p className="text-[1rem] leading-[1.375rem] font-medium">
                  Top-notch designs without any tricky rules or paperwork. It
                  simple and straightforward.
                </p>
              </div>

              <div className="relative  md:w-2/3 mx-auto lg:w-1/2 h-[220px] mt-6 md:mt-0 overflow-hidden rounded-2xl">
                <video
                  src="/videos/No_contract.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= CEO SECTION ================= */}
        <div className="bg-white rounded-xl shadow-sm flex flex-col items-center py-16 px-10 text-center">
          <Image src="/images/quote.webp" alt="quote" width={36} height={36} />
          <h2 className="mt-6 text-2xl md:text-4xl font-bold max-w-[46rem]">
            “Wavespace like their work method, design skill, and the way”
          </h2>
        </div>
      </div>
    </section>
  );
}
