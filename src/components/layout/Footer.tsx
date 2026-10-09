import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

import websiteLogo from "../../assets/images/website-logo.png";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Gallery", href: "/gallery" },
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

async function getCurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-800 mt-10">
      <div className="px-6 xl:px-40">
        {/* Main footer row */}
        <div className="flex flex-col items-center justify-between gap-6 py-6 lg:flex-row lg:gap-8">
          {/* School logo */}
          <Link
            href="/"
            aria-label="Heritage International Public School home"
            className="shrink-0"
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

          {/* Footer navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            {footerNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-slate-600 transition-colors hover:text-[#002147]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social media links */}
          <div className="flex shrink-0 items-center gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#002147] hover:text-[#002147]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200" />

        {/* Bottom footer row */}
        <div className="flex flex-col items-center justify-between gap-3 py-4 text-center sm:flex-row sm:text-left">
          <p className="text-base leading-6 text-slate-500">
            © {currentYear} Heritage International Public School.
            All rights reserved.
          </p>

          <p className="text-base font-medium tracking-wide text-slate-600">
            <span>Awake</span>
            <span className="mx-2 text-slate-300">•</span>
            <span>Arise</span>
            <span className="mx-2 text-slate-300">•</span>
            <span>Ascend</span>
          </p>
        </div>
      </div>
    </footer>
  );
}