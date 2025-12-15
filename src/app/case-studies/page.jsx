import Slider1 from "@/component/Slider1";
import Slider from "@/component/Slider1";
import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Form from "@/component/Form";
import CreativeServicesSection from "@/component/CreativeServicesSection";
import Review from "@/component/Review";
import FintechProcess from "@/component/FintechProcess";
const Home = () => {
  const data = [
    {
      img: "/images/poster5.webp",
      title: "Tournament - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster2.webp",
      title: "Off-White - Modern fashion web design",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster3.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster4.webp",
      title: "fame - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster5.webp",
      title: "Off-White - Modern fashion web design",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster6.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster6.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
  ];
  const items = [
    "Logo & branding",
    "Web design",
    "Product design",
    "UX design",
    "Design system",
    "Graphic design",
    "Animation",
    "Pitch decks",
    "Email template design",
    "UI UX design",
    "SaaS design",
    "Mobile app",
    "Interaction design",
    "Lottie & web animation",
    "MVP design",
    "Website design",
    "User research",
    "Conversation rate optimization (CRO)",
  ];
  const services = [
    "Logo & branding",
    "Web design",
    "Product design",
    "UX design",
    "Design system",
    "Graphic design",
    "Animation",
    "Pitch decks",
    "Email template design",
    "UI UX design",
    "SaaS design",
    "Mobile app",
    "Interaction design",
    "Lottie & web animation",
    "MVP design",
    "Website design",
    "User research",
    "Conversation rate optimization (CRO)",
  ];
  return (
    <div className="bg-white text-black mt-25 mx-auto">
      <section className="md:px-10 py-12 2xl:mx-10 px-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-[1.3em] ">
          Where creativity meets <br />
          <span className="text-[#29242469] ">success in our work</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 ">
          {data.map((read, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden ">
                <Image
                  src={read.img}
                  alt="img"
                  width={700}
                  height={400}
                  className="duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="text-xl font-semibold mt-4">{read.title}</h2>
              <p className="text-sm text-gray-500">{read.des}</p>
            </div>
          ))}
        </div>
      </section>
     <FintechProcess/>
      <section>
        <Review />
      </section>
      <CreativeServicesSection />
      <Form />
    </div>
  );
};

export default Home;
