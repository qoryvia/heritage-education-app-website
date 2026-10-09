"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiX,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  closeMobileMenu as closeMobileMenuAction,
  toggleMobileMenu,
} from "@/lib/slice/navigation.slice";
import { setSearchOpen } from "@/features/search/searchSlice";
import websiteLogo from "../../assets/images/website-logo.png";
import SearchMenu from "../search-menu/SearchMenu";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/166JCTHfBr",
    Icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/heritage_kasia?igsh=MTF1MWVqeHllODRqMQ==",
    Icon: FiInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@hipskasiakushinagar?si=F698Sg4U2QxCNJbL",
    Icon: FiYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/hipskushinagar",
    Icon: FiLinkedin,
  },
];

const Navbar = () => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(
    (state) => state.navigation.mobileMenuOpen,
  );
  const searchOpen = useAppSelector((state) => state.search.isOpen);

  const closeMobileMenu = () => {
    dispatch(closeMobileMenuAction());
    dispatch(setSearchOpen(false));
  };

  const handleMobileMenuToggle = () => {
    dispatch(setSearchOpen(false));
    dispatch(toggleMobileMenu());
  };

  const handleSearchToggle = () => {
    dispatch(closeMobileMenuAction());
    dispatch(setSearchOpen(!searchOpen));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-800">
      <nav
        aria-label="Main navigation"
        className="flex min-h-[76px] items-center justify-between gap-3 px-6 xl:px-40"
      >
        {/* Left side: mobile menu, logo and desktop navigation */}
        <div className="flex min-w-0 items-center gap-3 lg:gap-6">
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={handleMobileMenuToggle}
            className="flex h-9 w-8 shrink-0 items-center justify-center text-gray-800 transition-colors hover:text-[#002147] xl:hidden"
          >
            {mobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <CgMenuLeft size={26} />
            )}
          </button>

          {/* Logo aligned to the left */}
          <Link
            href="/"
            aria-label="Heritage International Public School home"
            className="flex shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src={websiteLogo}
              alt="Heritage International Public School"
              width={190}
              height={58}
              priority
              className="h-auto w-[88px] object-contain sm:w-[105px] lg:w-[120px]"
            />
          </Link>

          {/* Desktop navigation beside the logo */}
          <div className="hidden items-center gap-3 xl:flex 2xl:gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap py-3 text-base font-medium transition-colors duration-200 hover:text-[#002147]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side: search and social media icons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            aria-controls="heritage-search-menu"
            title="Search"
            onClick={handleSearchToggle}
            className="flex h-9 w-7 shrink-0 items-center justify-center text-gray-600 transition-colors hover:text-[#002147]"
          >
            {searchOpen ? <FiX size={19} /> : <FiSearch size={19} />}
          </button>

          {/* Social media icons on the right */}
          <div className="flex items-center gap-2 text-gray-500 sm:gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-8 w-5 items-center justify-center transition-colors hover:text-[#002147] sm:w-6"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile navigation — no dropdown popups */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white xl:hidden"
        >
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto px-6 py-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block border-b border-gray-100 py-3.5 text-sm font-medium text-gray-700 transition-colors last:border-b-0 hover:text-[#002147]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && <SearchMenu />}
    </header>
  );
};

export default Navbar;