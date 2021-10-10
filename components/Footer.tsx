import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex py-12 mx-auto max-w-6xl">
      <div className="flex flex-col items-center mx-10 space-y-5 w-full">
        <div className="flex mb-5 space-x-10 text-slate-light">
          <FaFacebookF className="w-5 h-5 hover:text-navy-green" />
          <FaTwitter className="w-5 h-5 hover:text-navy-green" />
          <FaInstagram className="w-5 h-5 hover:text-navy-green" />
          <FaGithub className="w-5 h-5 hover:text-navy-green" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm tracking-wide text-center text-slate">
            Copyright @ {new Date().getFullYear()} All rights reserved
            LEARNNEXTJS
          </p>
          <div className="flex justify-center mt-4 space-x-3 text-sm tracking-widest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-navy-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-slate">learnnextjs@gmail.com</span>
          </div>
          <div className="flex justify-center mt-4 space-x-3 text-sm text-slate">
            <span className="hover:underline hover:text-navy-green">
              Terms & Conditions
            </span>
            <span>/</span>
            <span className="hover:underline hover:text-navy-green">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
