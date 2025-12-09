<section className="w-full bg-white mx-auto">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6 md:px-10 lg:px-14 pb-20 pt-10">
            {/* LEFT IMAGE */}
            <div className="flex">
              <div className="relative">
                <img
                  src="/images/mobile.webp"
                  alt="UI/UX Mobile Mockup"
                  className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>

              <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
                Your users will find the app easy to use. Our UI and UX services
                ensure your product is user-friendly so that it appeals to and
                catches the hearts of users on any device.
              </p>

              <div className="space-y-6">
                {list.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-[#f0f0f0] pb-4 cursor-pointer"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {/* HEADER */}
                    <div className="flex justify-between items-center group">
                      <span className="flex items-center font-semibold gap-5 group-hover:text-black">
                        <span className="text-gray-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-black-600">{item.title}</span>
                      </span>

                      <span
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <GoArrowUpRight className="text-3xl" />
                      </span>
                    </div>

                    {/* DESCRIPTION (ANIMATED) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === index
                          ? "max-h-[200px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pl-10">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
