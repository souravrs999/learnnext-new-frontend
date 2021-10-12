import Image from "next/image";
import { BsCalendar3 } from "react-icons/bs";
import { GiWatch } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

import Container from "../../components/Container";
import BlogBody from "../../components/BlogBody";
import Sharable from "../../components/Sharable";
import Suggested from "../../components/Suggested";

import coverImg from "../../public/img/pexels-pixabay-270348.jpg";

const Blogs = () => {
  return (
    <Container>
      <section className="flex py-12 mx-auto max-w-6xl">
        <div className="flex mx-10 w-full">
          <div className="flex relative flex-col w-full">
            <div className="w-full max-w-3xl h-auto">
              <Image
                src={coverImg}
                width={1920}
                height={1032}
                layout="responsive"
                className="md:rounded"
                placeholder="blur"
                alt=""
              />
            </div>
            <div className="right-0 top-full p-5 w-full md:rounded-l md:absolute md:w-2/3 md:top-1/4 bg-navy-lighter">
              <div className="flex flex-col space-y-5">
                <div className="grid grid-cols-2 gap-1 md:grid-cols-3 text-navy-green">
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
                <h1 className="text-3xl font-black text-slate-light">
                  Super long and big Heading for our first Blog.
                </h1>
                <p className="text-sm text-slate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center space-x-5 text-xs text-slate">
                  <GoPerson className="w-4 h-4 text-navy-green" />
                  <span>DarkStalker</span>
                </div>
                <div className="flex right-0 space-x-3 font-mono text-sm md:absolute md:-bottom-7 text-slate">
                  <p>Next JS</p>
                  <p>React</p>
                  <p>Carousel</p>
                  <p>Embla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogBody />
      <Sharable />
      <Suggested />
    </Container>
  );
};

export default Blogs;
