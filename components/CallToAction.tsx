import useSWR from "swr";
import { Fetcher } from "../lib/Fetcher";

const CallToAction = () => {
  const { data: subs, error } = useSWR("/api/subscribers", Fetcher);

  return (
    <div className="flex py-12 mx-auto max-w-6xl">
      <div className="mx-10 w-full rounded bg-navy-lighter">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-3 w-full">
            <h2 className="text-3xl font-black text-slate-light">
              Subscribe to the Newsletter
            </h2>
            <p className="text-sm text-slate">
              Subscribe to my Newsletter to get notified of all the new articles
              that will be published by us.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 w-full">
            <div className="flex items-center px-3 space-x-2 w-full rounded bg-navy-light">
              <input
                type="text"
                placeholder="learnnextjs@gmail.com"
                className="p-5 w-2/3 rounded bg-navy-light focus:outline-none text-slate"
              />
              <button className="p-2 w-1/3 font-bold rounded text-navy-lighter bg-navy-green">
                Subscribe
              </button>
            </div>
            <span className="text-sm text-slate">
              {!subs ? "-" : subs} Subscribers.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
