"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layout,
  Layers,
  Grid,
  PenTool,
  Box,
  Search,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";

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

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300 md:py-5
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${navbarBg} ${textColor}
      `}
    >
      <div className="container mx-0 md:mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12 py-4">
        {/* LOGO */}
        <Link href="/" className={`text-2xl font-semibold ${textColor}`}>
          <span className="font-bold">wave</span>space
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
            <button
              className={`
              cursor-pointer relative flex items-center gap-2 ${textColor}
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-0 after:h-[2px] ${underlineColor}
              after:transition-all after:duration-300 hover:after:w-full
            `}
            >
              <span>Services</span>
              <MdOutlineArrowOutward className="text-[16px]" />
            </button>

            {/* MEGA MENU */}
            <div
              className={`absolute left-0 top-full mt-4 w-[950px] bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 flex gap-8 transition-all duration-200
              ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 flex-1">
                {[
                  { name: "UI UX Design", icon: Layout },
                  { name: "Web Design", icon: Monitor },
                  { name: "Product Design", icon: Box },
                  { name: "SaaS Design", icon: Layers },
                  { name: "Branding", icon: PenTool },
                  { name: "Landing Page Design", icon: Grid },
                  { name: "UX Audit", icon: Search },
                  { name: "Mobile App", icon: Smartphone },
                  { name: "Design System", icon: Zap },
                  { name: "Webflow", icon: Layout },
                  { name: "UX Research", icon: Search },
                  { name: "Build Product (MVP)", icon: Layers },
                ].map((item, i) => (
                  <Link 
                    key={i}
                    href="#"
                    className="flex items-center gap-3 text-gray-700 hover:text-black"
                  >
                    <span className="bg-indigo-600 text-white p-2 rounded-full">
                      <item.icon size={18} />
                    </span>
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="w-[250px] bg-gradient-to-br from-indigo-500 to-indigo-300 text-white p-6 rounded-2xl">
                <h3 className="text-lg font-semibold">Subscription Services</h3>
                <p className="text-sm mt-2">
                  One subscription, unlimited design requests.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                >
                  Contact Us ↗
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
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setMobileMenu(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#000054] text-white p-6 shadow-2xl animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-2xl mb-6"
              onClick={() => setMobileMenu(false)}
            >
              <X size={28} />
            </button>

            <div className="space-y-6 text-lg font-medium">
              <Link href="/service" className="block">
                Services
              </Link>
              <Link href="/case-studies" className="block">
                Case Studies
              </Link>
              <Link href="/pricing" className="block">
                Pricing
              </Link>
              <Link href="/about" className="block">
                About Us
              </Link>
              <Link href="/blog" className="block">
                Blog
              </Link>

              <Link
                href="/contact"
                className="block mt-6 bg-white text-black text-center py-3 rounded-full font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
