import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Suggested = () => {
  return (
    <section className="flex py-12 mx-auto max-w-4xl">
      <div className="flex flex-col mx-10 space-y-5">
        <h1 className="text-3xl font-bold text-slate-light">Suggested</h1>

        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
          <div className="flex flex-col justify-between p-5 w-full rounded bg-navy-lighter">
            <h1 className="text-2xl font-bold text-slate-light">
              Long heading of the first suggested Item
            </h1>
            <div className="flex justify-between">
              <FaLongArrowAltLeft className="w-5 h-5 text-navy-green" />
              <span className="text-sm text-slate">23423 Views</span>
            </div>
          </div>
          <div className="flex flex-col p-5 space-y-3 w-full rounded bg-navy-lighter">
            <h1 className="text-2xl font-bold text-slate-light">
              Long heading of the second suggested Item
            </h1>
            <div className="flex justify-between">
              <span className="text-sm text-slate">24562 Views</span>
              <FaLongArrowAltRight className="w-5 h-5 text-navy-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Suggested;
