import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <section className="bg-brand-white overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-brand-teal mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight text-brand-ocean">
            Simple, Scalable Pricing for Growing Teams
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-white font-semibold border-0 bg-brand-teal`}
                  >
                    MOST POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-brand-teal z-10`}
                ></div>
              )}

              <div className={`relative flex flex-col h-full gap-5 lg:gap-8 z-10 ${plan.isFeatured ? 'bg-brand-ocean text-brand-white' : 'bg-brand-white text-brand-ocean'} p-8 rounded-lg`}>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className={`mt-2 ${plan.isFeatured ? 'text-brand-white/80' : 'text-brand-ocean/80'}`}>
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className={`absolute h-[1.5px] inset-x-0 top-[53%] ${plan.isFeatured ? 'bg-brand-white/60' : 'bg-brand-ocean/60'}`}></span>
                        <span className={plan.isFeatured ? 'text-brand-white/60' : 'text-brand-ocean/60'}>
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold ${plan.isFeatured ? 'text-brand-white' : 'text-brand-ocean'}`}>
                    {plan.price === 0 ? 'Custom' : `$${plan.price}`}
                  </p>
                  {plan.price !== 0 && (
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className={`text-xs uppercase font-semibold ${plan.isFeatured ? 'text-brand-white/60' : 'text-brand-ocean/60'}`}>
                        /mo
                      </p>
                    </div>
                  )}
                </div>
                {plan.features && (
                  <ul className={`space-y-2.5 leading-relaxed text-base flex-1 ${plan.isFeatured ? 'text-brand-white/90' : 'text-brand-ocean/80'}`}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-[18px] h-[18px] opacity-80 shrink-0 ${plan.isFeatured ? 'text-brand-teal' : 'text-brand-teal'}`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout priceId={plan.priceId} />

                  <p className={`flex items-center justify-center gap-2 text-sm text-center font-medium relative ${plan.isFeatured ? 'text-brand-white/70' : 'text-brand-ocean/70'}`}>
                    {plan.price === 0 ? 'Contact sales' : 'Billed monthly'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
