"use client";

import Image from "next/image";

const SLIDE_HEIGHT = 510;

const slides = [
  {
    bg: "#3B32F0",
    img: "/images/slider/s1.webp",
    title: "Branding Identity",
    desc: "Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.",
    cta: "Build brand identity",
    text: "text-white",
    tags: [
      "Motion graphics design",
      "Graphic design",
      "Startup branding",
      "Brand identity design",
      "Corporate identity design",
      "Brand strategy",
    ],
  },

  {
    bg: "#ffffff",
    img: "/images/slider/s2.webp",
    title: "UI UX Design",
    desc: "Design intuitive, engaging digital experiences that users love. Our UI/UX process focuses on usability, accessibility, and clean visual design that drives conversions.",
    cta: "Design user experience",
    text: "text-black",
    tags: [
      "User research & analysis",
      "Wireframes & prototypes",
      "Mobile & web UI design",
      "Design systems",
      "Usability testing",
      "Interaction design",
    ],
  },

  {
    bg: "#FFD400",
    img: "/images/slider/s3.webp",
    title: "Web Design",
    desc: "Modern, responsive websites designed to reflect your brand and engage your audience. We combine creativity with performance-focused layouts.",
    cta: "Design website today",
    text: "text-black",
    tags: [
      "Responsive web design",
      "Landing page design",
      "Custom UI layouts",
      "Performance-focused design",
      "SEO-friendly structure",
      "Conversion optimization",
    ],
  },

  {
    bg: "#ff531a",
    img: "/images/slider/s4.webp",
    title: "Build Product (MVP)",
    desc: "Change your idea into a real product with our MVP development services. We focus on essential features, test with real users, and help you launch fast while saving time and money.",
    cta: "Design website today",
    text: "text-white",
    tags: [
      "Discovery & MVP Strategy",
      "UX/UI Design for MVP",
      "Prototypes & Wireframes",
      "Front & Back Development",
      "Third-Party API & Integration",
      "Quality Assurance & Testing",
      "Launch & Post-MVP Iteration",
    ],
  },

  {
    bg: "#090909",
    img: "/images/slider/s5.webp",
    title: "Webflow",
    desc: "Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly.",
    cta: "Launch Webflow site",
    text: "text-white",
    tags: [
      "Figma to Webflow Build",
      "Full Webflow Design + Dev",
      "CMS Architecture",
      "Animations & Interactions",
      "Webflow SEO Setup",
      "No-code Integrations",
      "Enterprise Webflow Builds",
    ],
  },
];

export default function Slider() {
  return (
    <div className="relative" style={{ height: slides.length * SLIDE_HEIGHT }}>
      {slides.map((s, index) => (
        <section
          key={index}
          className="sticky top-0 h-[510px] flex items-center"
          style={{
            backgroundColor: s.bg,
            zIndex: index + 1, // newer slides on top
          }}
        >
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
              {/* LEFT CONTENT */}
              <div className={`flex-1 ${s.text}`}>
                <h3 className="text-4xl md:text-6xl font-bold mb-8">
                  {s.title}
                </h3>

                <div className="flex flex-col md:flex-row gap-14">
                  <div className="max-w-md">
                    <p className="text-md leading-relaxed mb-8">{s.desc}</p>

                    <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition">
                      {s.cta}
                      <span>↗</span>
                    </button>
                  </div>

                  {/* TAGS */}
                  <div className="space-y-2 text-md">
                    {s.tags.map((tag, i) => (
                      <p key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-current" />
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-shrink-0 w-full lg:w-[380px]">
                <div className="relative bg-white p-4 rounded-xl shadow-lg">
                  <Image
                    src={s.img}
                    width={500}
                    height={500}
                    alt={s.title}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
