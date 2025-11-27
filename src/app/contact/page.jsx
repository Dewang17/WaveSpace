import Form from "@/component/Form";
import LogoSlider from "@/component/LogoSlider";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <section>
          <Form />
          <LogoSlider />
        </section>
        <section className="py-8">
          {/* BELIEFS SECTION */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-12">
            {/* LEFT SIDE TITLE */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[3.5rem] md:text-[2.7rem] sm:text-[2rem] font-bold leading-[1.35]">
                The beliefs{" "}
                <span className="text-[#29242469]">
                  behind <br /> the builds
                </span>
              </h2>
            </div>

            {/* RIGHT SIDE BELIEFS INLINE */}
            <div className="flex flex-col gap-14 w-full lg:max-w-[40.375rem]">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">
                  01
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[1.5rem] font-bold">Empathy</div>
                  <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                    Before we create a design, we listen. Because the good
                    always comes from understanding. We put ourselves in your
                    users' shoes so your product enters their lives smoothly.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">
                  02
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[1.5rem] font-bold">Clarity</div>
                  <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                    We don't design to sound smart. We design so your users feel
                    smart. Every word, flow, and screen is crafted to remove
                    friction, not add flash.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">
                  03
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[1.5rem] font-bold">Momentum</div>
                  <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                    Start small. Learn fast. Move with focus. We don't believe
                    in perfection. We believe in progress. That is why we ship,
                    test, and stay North Star aligned.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">
                  04
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[1.5rem] font-bold">Outcomes</div>
                  <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                    A good-looking app that doesn't convert is just decoration.
                    We obsess over real results — conversions, activations, and
                    retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black w-full py-20 px-10">
          <div className=" px-6">
            <h1 className="text-white text-5xl font-semibold leading-tight">
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
                <span className="text-gray-500 mr-2">03</span>First designs in
                4-5 days
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:w-[35%] w-full flex flex-col justify-between">
              <p className="text-white text-xl leading-relaxed">
                “Wavespace is a fantastic design team, with a healthy blend of
                UI and UX skills. Highly recommended”
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
          <div className="px-6 pt-14">
            <h1 className="text-white text-5xl font-semibold leading-tight">
              From startup to enterprise, grow your business <br />
              <span className="text-[#555555]">
                with fast and creative designs!
              </span>
            </h1>
          </div>
        </section>
        <section className="w-full py-14 bg-white">
          <div className="max-w-8xl mx-auto px-18">
            <div className="flex justify-between items-start">
              <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[#1B1B1B]">
                Got a project in mind?
                <br /> Let's talk.
              </h1>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition">
                Book a call →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
              {/* Bangladesh */}
              <div>
                <h2 className="text-xl font-semibold text-1B1B1B">
                  Bangladesh
                </h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +880 1785 0871 48
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Oriental Gofur Tower,
                  <br />
                  88/KA Mohammadpur,
                  <br />
                  Dhaka, Bangladesh.
                </p>
              </div>

              {/* Indonesia */}
              <div>
                <h2 className="text-xl font-semibold">Indonesia</h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +62 8211 6925 169
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Podomoro Park,
                  <br />
                  Padmagriya 15/6 Bandung,
                  <br />
                  Indonesia.
                </p>
              </div>

              {/* USA */}
              <div className="border-r border-gray-300 pr-10">
                <h2 className="text-xl font-semibold">USA</h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +1 470 504 3155
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  75 E 3rd St Sheridan, WY 82801,
                  <br />
                  USA.
                </p>
              </div>

              {/* Business + Career */}
              <div>
                <h2 className="text-xl font-semibold">Business Inquiry</h2>
                <p className="mt-3 text-sm">Email</p>
                <p className="flex items-center gap-2 text-black mt-1">
                  <Mail size={18} /> hello@wavespace.agency
                </p>

                <h2 className="text-xl font-semibold mt-10">Career</h2>
                <p className="mt-3 text-sm">Join Us</p>
                <p className="flex items-center gap-2 text-black mt-1">
                  <Mail size={18} /> career@wavespace.agency
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
