const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-300 border-t border-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 ">
            <h3 className="text-white text-lg font-semibold">PhoneData</h3>
            <p className="text-sm">
              Empowering businesses with verified contact information across India.
            </p>
          </div>

          {/* Quick Links
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Company</h4>
              <ul className="space-y-2">
                <li><a href="https://www.younedia.com/about-us" target='_blank' className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="https://www.younedia.com/privacy-and-refund-policies" target='_blank' className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#blog" target='_blank' className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#partners" target='_blank' className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div> */}

          {/* Legal */}
          <div className="space-y-4 items-center">
            <h4 className="text-white text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://www.younedia.com/about-us" target='_blank' className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://www.younedia.com/blog" target='_blank' className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="https://www.younedia.com/privacy-and-refund-policies" target='_blank' className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.younedia.com/terms" target='_blank' className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Get in Touch</h4>

            <div className="space-y-2">
              <p className="text-[15px]"><a href='mailto:info@younedia.com'>info@younedia.com</a></p>
              <p className="text-[15px]">+91 8253000032</p>
              <p className="text-[15px]">
                721, 7th Floor, Zone 3, Unity Homeland,
                <br />
                CP 67, Sector 67, Mohali, Punjab 160062
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.instagram.com/younedia/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </a>
                <a href="https://x.com/younedia" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/younedia/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/YouNedia/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 ">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} PhoneData. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;