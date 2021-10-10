import { FaReact, FaRegEye } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { GiWatch } from "react-icons/gi";

const Content = () => {
  return (
    <section className="flex mx-auto my-12 max-w-6xl" id="trending">
      <div className="flex flex-col mx-10 space-y-12 w-full">
        <h2 className="flex items-center space-x-2 text-2xl font-bold text-slate-light">
          <span className="font-mono text-base text-navy-green">01.</span>
          <span className="">Trending Posts</span>
          <span className="w-20 h-[1px] bg-navy-green"></span>
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
          {/* item */}
          <div className="p-5 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex flex-col space-y-5">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-4 text-navy-green">
                <div className="flex space-x-2">
                  <BsCalendar3 />
                  <span className="text-xs">May 04, 1999</span>
                </div>
                <div className="flex space-x-2">
                  <GiWatch />
                  <span className="text-xs">3 min read</span>
                </div>
                <div className="flex space-x-2">
                  <FaRegEye />
                  <span className="text-xs">20450 views</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-light">
                This is the title for our First Blog
              </h2>
              <p className="text-slate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-5 font-mono text-sm text-slate">
                <p>Next JS</p>
                <p>React</p>
                <p>Embla Carousel</p>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="p-5 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex flex-col space-y-5">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-4 text-navy-green">
                <div className="flex space-x-2">
                  <BsCalendar3 />
                  <span className="text-xs">May 04, 1999</span>
                </div>
                <div className="flex space-x-2">
                  <GiWatch />
                  <span className="text-xs">3 min read</span>
                </div>
                <div className="flex space-x-2">
                  <FaRegEye />
                  <span className="text-xs">20450 views</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-light">
                This is the title for our Second Blog
              </h2>
              <p className="text-slate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-5 font-mono text-sm text-slate">
                <p>Next JS</p>
                <p>React</p>
                <p>Embla Carousel</p>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="p-5 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex flex-col space-y-5">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-4 text-navy-green">
                <div className="flex space-x-2">
                  <BsCalendar3 />
                  <span className="text-xs">May 04, 1999</span>
                </div>
                <div className="flex space-x-2">
                  <GiWatch />
                  <span className="text-xs">3 min read</span>
                </div>
                <div className="flex space-x-2">
                  <FaRegEye />
                  <span className="text-xs">20450 views</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-light">
                This is the title for our Third Blog
              </h2>
              <p className="text-slate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-5 font-mono text-sm text-slate">
                <p>Next JS</p>
                <p>React</p>
                <p>Embla Carousel</p>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="p-5 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex flex-col space-y-5">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-4 text-navy-green">
                <div className="flex space-x-2">
                  <BsCalendar3 />
                  <span className="text-xs">May 04, 1999</span>
                </div>
                <div className="flex space-x-2">
                  <GiWatch />
                  <span className="text-xs">3 min read</span>
                </div>
                <div className="flex space-x-2">
                  <FaRegEye />
                  <span className="text-xs">20450 views</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-light">
                This is the title for our Fourth Blog
              </h2>
              <p className="text-slate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-5 font-mono text-sm text-slate">
                <p>Next JS</p>
                <p>React</p>
                <p>Embla Carousel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
