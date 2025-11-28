"use client";
import Image from "next/image";

// const testimonials = [
//   {
//     img: "/images/man1.webp",
//     brand: "LifeTales",
//     name: "Matt Kabus",
//     role: "CEO & Founder @LifeTales",
//     review:
//       "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
//   },
//   {
//     img: "/images/man2.webp",
//     brand: "Kodezi",
//     name: "Ishraq Khan",
//     role: "CEO @Kodezi",
//     review:
//       "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive. An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
//   },
//   {
//     img: "/images/man3.webp",
//     brand: "tournated",
//     name: "Nikita Ribakovs",
//     role: "Founder & CEO @Tournated",
//     review:
//       "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
//   },
// ];

export default function Founders() {
  return (
    <>
      <section className="px-6 md:px-10 py-20 lg:mx-auto sm:mx-auto md:mx-auto    xl:max-w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl lg:px-12 font-bold leading-tight text-left md:text-left">
          500+ Founders trusted us. Get return
          <br />
          on your <span className="text-gray-400">investment, multiplied!</span>
        </h2>

        <div className="w-full flex flex-col items-center justify-center mt-10">
          <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-10 md:gap-16 w-full overflow-hidden">
            {/* CARD 1 */}
            <div className="flex flex-col max-w-sm w-full items-center md:items-start">
              <div className="relative w-full max-w-[340px] md:w-[320px] lg:w-[400px] h-[350px] md:h-[400px]">
                <Image
                  src="/images/man1.webp"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h1 className="mt-4 text-lg font-medium text-left py-4 w-full">
                Matt Kabus <br /> CEO of Lifetales
              </h1>

              <p className="text-black text-md mb-4 w-full text-left">
                “Wavespace is a fantastic design team, with a healthy blend of
                UI and UX skills. Highly recommended.”
              </p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col max-w-sm w-full items-center md:items-start transform md:translate-y-12">
              <div className="relative w-full max-w-[340px] md:w-[320px] lg:w-[400px] h-[420px] md:h-[500px]">
                <Image
                  src="/images/man2.webp"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h1 className="mt-4 text-lg font-medium text-left py-4 w-full">
                Matt Kabus <br /> CEO of Lifetales
              </h1>

              <p className="text-black text-md mb-4 w-full text-left">
                “Wavespace is a fantastic design team, with a healthy blend of
                UI and UX skills. Highly recommended.”
              </p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col max-w-sm w-full items-center md:items-start">
              <div className="relative w-full max-w-[340px] md:w-[320px] lg:w-[400px] h-[350px] md:h-[400px]">
                <Image
                  src="/images/man3.webp"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h1 className="mt-4 text-lg font-medium text-left py-4 w-full">
                Matt Kabus <br /> CEO of Lifetales
              </h1>

              <p className="text-black text-md mb-4 w-full text-left">
                “Wavespace is a fantastic design team, with a healthy blend of
                UI and UX skills. Highly recommended.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
