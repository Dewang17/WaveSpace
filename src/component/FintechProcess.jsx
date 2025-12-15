import Image from 'next/image';
import React from 'react'

const FintechProcess = () => {
  return (
    <div>
      <section className="bg-black w-full py-20 lg:px-10 md:px-4">
        <div className="px-6">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Build secure fintech products faster <br />
            <span className="text-[#555555]">
              — without long development cycles.
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row px-8 gap-16 mt-16">
          {/* LEFT BOX */}
          <div className="bg-[#333333] p-10 lg:w-[65%] w-full space-y-6 border border-gray-800">
            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">01</span>Rapid fintech
              onboarding
            </p>
            <hr className="border border-gray-500" />

            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">02</span>Compliance-ready
              strategy & planning
            </p>
            <hr className="border border-gray-500" />

            <p className="text-white text-2xl font-normal">
              <span className="text-gray-500 mr-2">03</span>First product
              designs in under a week
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-[35%] w-full flex flex-col justify-between">
            <p className="text-white text-xl leading-relaxed">
              “Wavespace helped us launch a secure, scalable fintech platform
              with a seamless user experience. Their process is fast, clear, and
              reliable.”
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
              Schedule a demo
            </button>
          </div>
        </div>

        <div className="px-6 pt-24">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-semibold leading-tight">
            From fintech startups to global enterprises <br />
            <span className="text-[#555555]">
              we design products users trust and love.
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default FintechProcess