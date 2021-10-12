import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Sharable = () => {
  return (
    <section className="flex py-12 mx-auto max-w-4xl">
      <div className="flex flex-col mx-10 space-y-5">
        <h1 className="text-2xl font-bold text-slate-light">
          Share this blog.
        </h1>
        <div className="flex space-x-5 text-navy-green">
          <FaFacebookF className="w-5 h-5 hover:text-slate" />
          <FaTwitter className="w-5 h-5 hover:text-slate" />
        </div>
      </div>
    </section>
  );
};
export default Sharable;
