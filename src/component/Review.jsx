"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Review() {
  const swiperRef = useRef(null);
  return (
    <section className="bg-[#f0f0f0] overflow-hidden  lg:pl-20 md:pl-10 pl-6 pb-10">
      <div
        className=" flex flex-col pt-15 lg:pt-[9.5rem] sm:pb-[7rem] lg:pb-[8.5rem] gap-[4rem]
       md:pt-16 md:pb-28 md:gap-8
      
    "
      >
        {/* Section Heading Wrapper */}
        <div
          className="
        flex justify-between items-end
        gap-[80px]
        md:flex-col md:items-start md:gap-6
        sm:gap-4
      "
        >
          <h2 className="max-w-[1312px] font-bold text-[1.85rem] leading-[1.3] tracking-[1px] md:text-[1.85rem] lg:text-[2.5rem] 2xl:text-[3.5rem]">
            Trusted by fintech teams worldwide.{" "}
            <span className="text-[#7e7e81]">We</span>
            <br />
            <span className="text-[#7e7e81]">
              design secure, scalable financial products.
            </span>
          </h2> 
        </div>

        {/* ---------- SWIPER CONTAINER ---------- */}
        <div className="relative ">
          <Swiper
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.2}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            breakpoints={{
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4 },
            }}
            className=""
          >
            {/* ---------- FIRST RATING CARD ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="bg-white border-r border-[#f0f0f0] md:h-[27.5em] h-[21rem] flex flex-col p-8 items-center justify-center">
                <div className="text-[90px] font-semibold text-gray-400 pt-10">
                  4.9
                </div>

                <div className=" text-red-500 text-3xl">★★★★★</div>

                <p className=" text-sm text-gray-600">
                  200+ verified fintech reviews
                </p>

                <div className="flex gap-6 mt-auto pt-6">
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/clutch.webp"
                    alt=""
                  />
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/upwork.webp"
                    alt=""
                  />
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/fiver.webp"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 1 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Kodezi</p>

                <p className="tes_para">
                  "Wavespace has been extremely{" "}
                  <span className="font-bold text-black">reliable</span>{" "}
                  throughout our fintech journey. The product designs are{" "}
                  <span className="font-bold text-black">
                    clean, compliant, and user-focused
                  </span>
                  ."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img1.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Israqh Khan</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 2 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">tournated</p>

                <p className="tes_para">
                  "<span className="font-bold text-black">Very satisfied</span>{" "}
                  with the fintech dashboard by Wavespace.{" "}
                  <span className="font-bold text-black">
                    Smooth communication and great results
                  </span>
                  ."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img1.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Nick Fisher</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 3 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">ActiveSync</p>

                <p className="tes_para">
                  "Wavespace transformed our{" "}
                  <span className="font-bold text-black">
                    fintech concept into reality
                  </span>
                  . They focused heavily on{" "}
                  <span className="font-bold text-black">
                    security, usability, and customer trust
                  </span>
                  ."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img2.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Abraham Ajayi</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Luxara</p>

                <p className="tes_para">
                  "Very professional team with{" "}
                  <span className="font-bold text-black">
                    excellent fintech product knowledge
                  </span>{" "}
                  and clear communication. We are extremely happy with the final
                  results."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img3.webp" alt="Danny P" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Danny P</div>
                    <div className="tes_role">Director of Sales</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- HBIT App ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">HBIT App</p>

                <p className="tes_para">
                  "Wavespace delivered a{" "}
                  <span className="font-bold text-black">
                    secure and intuitive
                  </span>{" "}
                  mobile fintech UI in record time. Their{" "}
                  <span className="font-bold text-black">
                    attention to detail
                  </span>{" "}
                  truly stands out."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img4.webp" alt="Mark Gawlyk" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Mark Gawlyk</div>
                    <div className="tes_role">Co-founder & CTO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- Augalo ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Augalo</p>

                <p className="tes_para">
                  "Wavespace exceeded expectations from the first delivery.{" "}
                  <span className="font-bold text-black">
                    Every fintech feature
                  </span>{" "}
                  was thoughtfully designed and executed flawlessly."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img5.webp" alt="Camille" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Camille</div>
                    <div className="tes_role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- LifeTales ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">LifeTales</p>

                <p className="tes_para">
                  "An outstanding fintech design partner with a{" "}
                  <span className="font-bold text-black">
                    strong balance of UX clarity and UI precision
                  </span>
                  . Highly recommended."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img6.webp" alt="Matt Kabus" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Matt Kabus</div>
                    <div className="tes_role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- Krispy ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Krispy</p>

                <p className="tes_para">
                  "One of the best fintech design teams we’ve worked with.{" "}
                  <span className="font-bold text-black">
                    We returned for another project
                  </span>{" "}
                  because of the consistent quality and speed."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img7.webp" alt="Shah Taj" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Shah Taj</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* 👇 CUSTOM PAGINATION OUTSIDE SWIPER */}
          <div className="custom-swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  );
}
