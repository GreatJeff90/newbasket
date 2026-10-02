export default function HowItWorks() {
  const steps = [
    {
      title: "Build Your Community",
      description:
        "Create dedicated spaces for your customers, post products, share services, and engage directly in interactive chat threads.",
      actionText: "Next",
      stepIndex: 0,
      icon: (
        <div className="relative flex items-center justify-center w-36 h-28">
          {/* Community Chat Bubble */}
          <div className="w-24 h-18 rounded-2xl border-2 border-slate-900 bg-white p-2.5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-slate-900 rounded-full" />
              <div className="h-1.5 w-3/4 bg-slate-300 rounded-full" />
            </div>
          </div>
          {/* Floating Product Tag Badge */}
          <div className="absolute -right-1 -top-1 px-2 py-0.5 rounded-full border-2 border-slate-900 bg-white text-[10px] font-bold text-slate-900 shadow-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Shop
          </div>
          {/* Member avatars */}
          <div className="absolute -left-2 -bottom-1 flex -space-x-1.5">
            <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center text-[9px] font-black">1</div>
            <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center text-[9px] font-black">2</div>
          </div>
        </div>
      ),
    },
    {
      title: "In-Chat Payments & Bookings",
      description:
        "Close deals without redirecting customers. Accept payments and book appointments directly inside your conversation flow.",
      actionText: "Next",
      stepIndex: 1,
      icon: (
        <div className="relative flex items-center justify-center w-36 h-28">
          {/* Phone Frame */}
          <div className="w-20 h-24 rounded-2xl border-2 border-slate-900 bg-white p-1.5 flex flex-col justify-between shadow-xs">
            <div className="w-6 h-1 rounded-full bg-slate-900 mx-auto" />
            {/* Payment Bubble */}
            <div className="rounded-lg border border-slate-900 bg-orange-50 p-1 flex flex-col items-center">
              <span className="text-[10px] font-extrabold text-slate-900">Paid $45</span>
              <span className="text-[8px] text-orange-600 font-bold">✓ Confirmed</span>
            </div>
            <div className="w-4 h-1 rounded-full bg-slate-300 mx-auto" />
          </div>
          {/* Floating Currency Coin */}
          <div className="absolute -right-2 top-3 w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-black text-xs text-orange-500 shadow-xs">
            $
          </div>
        </div>
      ),
    },
    {
      title: "Currencies & Shipping Sorted",
      description:
        "Choose preferred settlement currencies, agree on delivery terms, and generate dispatch labels—all in one place.",
      actionText: "Start",
      stepIndex: 2,
      icon: (
        <div className="relative flex items-center justify-center w-36 h-28">
          {/* Shipping Package */}
          <div className="w-18 h-16 rounded-xl border-2 border-slate-900 bg-white p-1.5 flex flex-col justify-between shadow-xs relative">
            <div className="w-full h-0.5 bg-slate-900 absolute top-4 left-0" />
            <div className="w-4 h-5 border border-slate-900 rounded-xs self-end mt-4 mr-1 flex flex-col justify-around p-0.5">
              <div className="h-0.5 w-full bg-slate-900" />
              <div className="h-0.5 w-full bg-slate-900" />
            </div>
          </div>
          {/* Multi-Currency Badges */}
          <div className="absolute -left-1 top-2 px-1.5 py-0.5 rounded-md border-2 border-slate-900 bg-white text-[9px] font-bold text-slate-900 shadow-xs">
            USD / NGN
          </div>
          {/* Delivery Truck Badge */}
          <div className="absolute -right-2 -bottom-1 w-9 h-7 rounded-lg border-2 border-slate-900 bg-orange-50 flex items-center justify-center text-[10px] font-black text-slate-900 shadow-xs">
            🚚
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-orange-500 mb-2">
            Seamless Commerce
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
        </div>

        {/* 3 Mobile Card Screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between min-h-[460px] transition-transform duration-200 hover:-translate-y-1.5"
            >
              {/* Card Illustration */}
              <div className="flex items-center justify-center pt-8 pb-4">
                {step.icon}
              </div>

              {/* Title & Copy */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Footer: Pagination Dots & Action Button */}
              <div className="mt-10 pt-4 flex items-center justify-between border-t border-slate-50">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        step.stepIndex === i
                          ? "w-4 bg-orange-500"
                          : "w-1.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Next / Start Button */}
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  <span>{step.actionText}</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}