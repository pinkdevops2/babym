"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "../app/assets/baby_md_logo.svg";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center px-1 py-2">
      <Link href="/" passHref>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={logo}
            alt="babyMD Logo"
            width={120}
            height={35}
            className="object-contain"
          />         
        </div>
      </Link>

      <button onClick={toggleMenu} className="text-[#4B3A8F] focus:outline-none">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 8.87073H24.0767M1.92285 16.2552H24.0767M1.92285 1.48584H24.0767" stroke="#5943A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </div>
      {isOpen && (
        <nav className="mt-4 bg-[#FFFBE6] border-t border-[#FF6F61] border-dashed">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/doctor" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Doctor
              </Link>
            </li>
            <li>
              <Link href="/clinic" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Clinic
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Contact Us
              </Link>
            </li>
              <li>
              <Link href="/resources" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                Resources
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="text-[#4B3A8F] hover:text-[#FF6F61] cursor-pointer">
                  Services
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link href="/services/general-pediatric-consultations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      General Pediatric Consultations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vaccinations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      Vaccinations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/super-special-consultations" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      Super Special Consultations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/da-and-t" className="text-[#4B3A8F] hover:text-[#FF6F61] block">
                      DA&T
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}