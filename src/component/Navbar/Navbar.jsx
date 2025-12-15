"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { servicesList } from "@/app/data/ServicesList";
import { MdOutlineArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();

  const navbarBg =
    pathname === "/service"
      ? "bg-[#000054]"
      : pathname === "/pricing"
      ? "bg-black"
      : "bg-white";

  const textColor =
    pathname === "/service" || pathname === "/pricing"
      ? "text-white"
      : "text-black";

  const underlineColor =
    pathname === "/service" || pathname === "/pricing"
      ? "after:bg-white"
      : "after:bg-gray-800";

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300 md:py-5
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${navbarBg} ${textColor}
      `}
    >
      <div className="container mx-0 md:mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12 lg:pl-26">
        {/* LOGO */}
        <Link href="/" className={`text-2xl font-semibold ${textColor}`}>
          Cashigo 
        </Link>

        {/* HAMBURGER for sm/md */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={30} />
        </button>

        {/* DESKTOP MENU (unchanged design) */}
        <div
          className={`hidden lg:flex space-x-8 text-lg font-medium px-4 ${textColor}`}
        >
          {/* SERVICES DROPDOWN (Desktop Only) */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link
              href="/service"
              className={`
              cursor-pointer relative flex items-center gap-2 ${textColor}
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-0 after:h-[2px] ${underlineColor}
              after:transition-all after:duration-300 hover:after:w-full
            `}
            >
              <span>Services</span>
              <MdOutlineArrowOutward className="text-[16px]" />
            </Link>

            {/* MEGA MENU */}
            <div
              className={`absolute left-[-200] top-full mt-4 w-[1050px] bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 flex gap-8 transition-all duration-200
              ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1">
                {servicesList.map((item, i) => (
                  <Link
                    key={i}
                    href={`/service/${item.slug}`}
                    className="group flex items-center gap-3 text-black font-medium"
                  >
                    <span className="bg-indigo-600 text-white p-2 rounded-full">
                      <item.icon size={18} />
                    </span>

                    <span
                      className="relative inline-block
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[2px] after:bg-black
        after:transition-all after:duration-300
        group-hover:after:w-full"
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col justify-between ">
                <div className=" relative w-[250px] p-6 rounded-2xl bg-gradient-to-b from-[#a086fb]  to-white text-black h-full">
                  {/* Logo */}
                  <div className="relative w-[140px] h-[30px] mb-4 ml-[-50px]">
                    <Image
                      src="/images/logo.svg"
                      alt="WaveSpace Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <h3 className="text-lg font-semibold">
                    Subscription Services
                  </h3>
                  <p className="text-sm mt-2 text-gray-700">
                    One subscription, unlimited design requests.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="hidden lg:flex bg-black text-white font-bold rounded-full px-7 py-4 gap-2 w-40 mx-auto text-sm"
                >
                  Subscription
                </Link>
              </div>
            </div>
          </div>

          {/* OTHER MENU LINKS */}
          {[
            { href: "/case-studies", label: "Case studies", count: "09" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About us" },
            { href: "/blog", label: "Blog" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`relative ${textColor}
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] ${underlineColor}
                after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
              {item.count && (
                <sup className="text-[10px] ml-0.5 opacity-70">
                  {item.count}
                </sup>
              )}
            </Link>
          ))}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          href="/contact"
          className="hidden lg:flex bg-[#3F2FEE] text-white font-bold rounded-full px-7 py-4 gap-2"
        >
          Contact Us <MdOutlineArrowOutward className="text-[20px]" />
        </Link>
      </div>

      {/* MOBILE MENU SLIDE-IN */}
      {mobileMenu && (
        <div className="fixed bg-white md:hidden w-full h-screen">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            {/* <span className="text-xl font-bold tracking-tight lowercase">
              wavespace
            </span> */}

            <button
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 rounded-full bg-gray-300 px-4 py-2 text-sm font-medium"
            >
              <X size={16} />
              Close
            </button>
          </div>

          {/* Menu items */}
          <nav className="px-6 pt-10 space-y-8">
            {[
              { label: "Case studies", href: "/case-studies" },
              { label: "Pricing", href: "/pricing" },
              { label: "Services", href: "/service" },
              { label: "Startups", href: "/startup" },
              { label: "About us", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block text-[32px] leading-none font-semibold text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="fixed px-2 mt-10 h-full">
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 justify-between rounded-full bg-[#4338CA] px-8 py-3 text-white text-xl font-semibold shadow-xl "
            >
              <span>Contact US</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white ">
                <ArrowUpRight size={22} className="text-[#4338CA]" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
