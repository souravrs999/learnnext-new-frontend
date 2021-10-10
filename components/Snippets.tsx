import {
  SiGoogleanalytics,
  SiMailchimp,
  SiSlack,
  SiStrapi,
  SiStripe,
} from "react-icons/si";

const Snippets = () => {
  return (
    <section className="flex mx-auto my-12 max-w-6xl">
      <div className="flex flex-col mx-10 space-y-12 w-full">
        <h2 className="flex items-center space-x-2 text-2xl font-bold text-slate-light">
          <span className="font-mono text-base text-navy-green">02.</span>
          <span className="">Trending Snippets</span>
          <span className="w-20 h-[1px] bg-navy-green"></span>
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
          {/* Items */}
          <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-light">Mailchimp</h1>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-light">
                <SiMailchimp className="w-5 h-5 text-navy-green" />
              </span>
            </div>

            <p className="text-slate">
              Setting up a mailchimp news letter for subscribers.
            </p>
          </div>
          {/* Items */}
          <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-light">Slack</h1>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-light">
                <SiSlack className="w-5 h-5 text-navy-green" />
              </span>
            </div>

            <p className="text-slate">
              Setting up slack support for your application.
            </p>
          </div>
          {/* Items */}
          <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-light">
                Google Analytics
              </h1>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-light">
                <SiGoogleanalytics className="w-5 h-5 text-navy-green" />
              </span>
            </div>

            <p className="text-slate">
              Setting up analytics for your application using Google Analytics
            </p>
          </div>
          {/* Items */}
          <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-light">Stripe</h1>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-light">
                <SiStripe className="w-5 h-5 text-navy-green" />
              </span>
            </div>

            <p className="text-slate">
              Accept a payment from your application with stripe.
            </p>
          </div>
          {/* Items */}
          <div className="flex flex-col p-5 space-y-3 w-full rounded shadow-lg bg-navy-lighter">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-light">Strapi</h1>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-navy-light">
                <SiStrapi className="w-5 h-5 text-navy-green" />
              </span>
            </div>

            <p className="text-slate">
              Setting up a headless CMS for your application with Strapi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snippets;
