import React, { useEffect, useRef, useState } from "react";

const Testimonial = () => {
  const states = [
    {
      id: "/01",
      title: "98%",
      sub: "Customer satisfaction across PayIn & Payout services",
    },
    {
      id: "/02",
      title: "₹50,000 Cr+",
      sub: "Annual transaction volume processed across industries",
    },
    {
      id: "/03",
      title: "2021",
      sub: "Founded, building secure fintech infra for 4+ years",
    },
    {
      id: "/04",
      title: "20M+",
      sub: "Successful transactions handled every month",
    },
    {
      id: "/05",
      title: "600+ businesses served",
      sub: "Used by D2C brands, MSMEs, NBFCs, and digital startups",
    },
  ];

  // index = current page starting at 0
  const [index, setIndex] = useState(0);
  // visible cards (1 for sm, 2 for md+)
  const [visible, setVisible] = useState(1);

  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  // touch handlers for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    // set visible based on width
    const updateVisible = () => {
      const w = window.innerWidth;
      // Tailwind md breakpoint is 768px -> show 2 cards at md and up (but we hide on lg+, so we only use this for slider block)
      if (w >= 768) setVisible(2);
      else setVisible(1);
      // reset index if out of range
      // compute max index
      const maxIndex = Math.max(0, states.length - (w >= 768 ? 2 : 1));
      setIndex((cur) => Math.min(cur, maxIndex));
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [states.length]);

  // compute width and translate in px for smooth, accurate movement
  const getCardWidth = () => {
    if (!wrapperRef.current) return 0;
    const wrapperWidth = wrapperRef.current.clientWidth;
    return wrapperWidth / visible;
  };

  const maxIndex = Math.max(0, states.length - visible);

  // Next/Prev handlers (optional if you want)
  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
  };

  // touch events
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // px swipe threshold
    if (diff > threshold) {
      // swipe left => next
      goTo(index + 1);
    } else if (diff < -threshold) {
      // swipe right => prev
      goTo(index - 1);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // compute translateX in px
  const translateX = getCardWidth() * index;

  return (
    <section className="w-full py-24 px-3 md:px-10 bg-gradient-to-b from-white to-gray-200">
      <div className="2xl:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-6xl font-semibold mb-12 leading-tight tracking-[0.01em]">
          Powering Digital Finance With Precision.
          {" "}
          <span className="text-gray-500">Real Impact, Real Performance.</span>
        </h2>

        {/* ===================== SLIDER FOR SM + MD (visible up to md) ===================== */}
        {/* This block is shown for screens < lg (i.e., sm and md). On lg+, it is hidden. */}
        <div className="block lg:hidden">
          {/* viewport wrapper */}
          <div
            ref={wrapperRef}
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* inner flex row */}
            <div
              ref={innerRef}
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${translateX}px)`,
                // prevent wrapping
                whiteSpace: "nowrap",
              }}
            >
              {states.map((item, i) => (
                <div
                  key={i}
                  // responsive widths:
                  // sm: full width (min-w = 100%), md: half width (min-w = 50%)
                  // flex-shrink-0 to keep fixed width items
                  className={`flex-shrink-0 ${
                    visible === 2 ? "w-1/2" : "w-full"
                  } px-2`} /* px gives space between cards */
                >
                  {/* Keep exact card markup & styles */}
                  <div className="bg-white rounded-xl p-10 h-full w-full">
                    <span className="text-gray-400 text-lg">{item.id}</span>
                    <h3 className="text-5xl font-semibold mt-6 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600  md:text-lg break-words whitespace-normal">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS (pages = states.length - visible + 1) */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, page) => (
              <button
                key={page}
                onClick={() => goTo(page)}
                aria-label={`Go to slide ${page + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  page === index ? "bg-black w-6 h-2" : "bg-gray-300 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===================== LG AND ABOVE: UNCHANGED ORIGINAL GRID ===================== */}
        <div className="hidden lg:block">
          {/* first div */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {states.slice(0, 3).map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-10 text-left">
                <span className="text-gray-400 text-lg ">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.sub}</p>
              </div>
            ))}
          </div>
          {/* second div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {states.slice(3).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm  p-10 text-left"
              >
                <span className="text-gray-400 text-lg pb-70">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
