import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFBE6] p-4 text-[#4B3A8F] text-sm">
      {/* Top section with Company and Services */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold uppercase mb-2">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about-us" className="hover:text-[#FF6F61]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/doctor" className="hover:text-[#FF6F61]">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-[#FF6F61]">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase mb-2">Services</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/services/clinics" className="hover:text-[#FF6F61]">
                Clinics
              </Link>
            </li>
            <li>
              <Link href="/services/vaccinations" className="hover:text-[#FF6F61]">
                Vaccination
              </Link>
            </li>
            <li>
              <Link href="/services/24x7-services" className="hover:text-[#FF6F61]">
                24x7 Services
              </Link>
            </li>
            <li>
              <Link href="/services/treatment-and-therapies" className="hover:text-[#FF6F61]">
                Treatment and Therapies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Middle section with Contact and Social Media */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-8">
        {/* Contact Us Column */}
        <div>
          <h3 className="font-bold uppercase mb-2">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:help@babymd.com" className="hover:text-[#FF6F61]">
                help@babymd.com
              </a>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              7070708220
            </li>
            <li className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>WeWork, Prestige Atlanta, 80 Feet Road, Bengaluru-560034, Karnataka, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className="font-bold uppercase mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6F61]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-2.596 0-4.192 1.583-4.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6F61]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.456-4.222 1.635C1.537 2.886 1.154 4.302 1.081 5.929 1.023 7.209 1.009 7.617 1.009 10.876s.014 3.667.072 4.947c.073 1.627.456 3.043 1.635 4.222 1.179 1.179 2.595 1.562 4.222 1.635 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.456 4.222-1.635 1.179-1.179 1.562-2.595 1.635-4.222.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.456-3.043-1.635-4.222C20.895 1.537 19.479 1.154 17.852 1.081 16.572 1.023 16.164 1.009 12.905 1.009zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and links */}
      <div className="border-t border-[#4B3A8F] mt-8 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© {currentYear} babyMD ALL RIGHTS RESERVED</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#FF6F61]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#FF6F61]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}