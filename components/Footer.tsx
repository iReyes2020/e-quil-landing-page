import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-brand-ocean border-t border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg text-brand-white">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-brand-white/80">
              AI-powered employee well-being and burnout prevention platform.
            </p>
            <p className="mt-3 text-sm text-brand-white/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-brand-white tracking-widest text-sm md:text-left mb-3">
                PRODUCT
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/#features" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Features
                </Link>
                <Link href="/#pricing" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Pricing
                </Link>
                <Link href="/#testimonials" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Testimonials
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-brand-white tracking-widest text-sm md:text-left mb-3">
                COMPANY
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    className="text-brand-white/80 hover:text-brand-teal transition-colors"
                    aria-label="Contact Support"
                  >
                    Contact
                  </a>
                )}
                <Link href="/tos" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-brand-white tracking-widest text-sm md:text-left mb-3">
                FOLLOW US
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a href="#" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-brand-white/80 hover:text-brand-teal transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
