import { useState } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header>
      <div
        className={`w-80 md:hidden  h-full fixed right-0 z-50 pt-5 shadow-2xl bg-navy-light transform transition ease-in-out duration-500 ${
          collapsed ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="float-left px-5 w-full">
          <div className="block float-right relative -top-7 mt-6 h-8">
            <button
              aria-label="close menu button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-navy-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* links list */}
        <div className="overflow-hidden relative px-10 pt-0 h-1/2">
          <div className="flex flex-col space-y-4 text-lg text-slate-light">
            <a href="#" className="flex items-center hover:text-white link">
              Home
            </a>
            <a href="" className="flex items-center hover:text-white link">
              Blogs
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex mx-auto max-w-6xl bg-navy-light">
        <div className="flex justify-between py-5 mx-10 w-full">
          <div className="text-4xl font-black tracking-widest text-navy-green">
            LN
          </div>
          <div className="hidden items-center space-x-10 font-mono text-sm md:flex text-slate-light">
            <a href="#" className="flex items-center hover:text-white link">
              Home
            </a>
            <a href="" className="flex items-center hover:text-white link">
              Blogs
            </a>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 text-navy-green md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
