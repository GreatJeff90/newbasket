export default function HowItWorks() {
  const steps = [
    {
      title: "Multi-channel payment",
      description:
        "Allows you to pay online at all applications and websites that accept MasterCard cards.",
      actionText: "Next",
      stepIndex: 0,
      icon: (
        <div className="relative flex items-center justify-center w-36 h-28">
          {/* Card */}
          <div className="absolute right-2 top-2 w-20 h-13 rounded-lg border-2 border-slate-900 bg-white shadow-xs p-1.5 flex flex-col justify-between -rotate-12">
            <div className="h-2 w-full bg-slate-900 rounded-xs" />
            <div className="flex gap-1 items-center self-end">
              <span className="w-2.5 h-2.5 rounded-full border border-slate-900" />
              <span className="w-2.5 h-2.5 rounded-full border border-slate-900 -ml-1.5" />
            </div>
          </div>
          {/* Channel icons */}
          <div className="absolute left-3 top-3 font-black text-sm tracking-tight text-slate-900">
            a<span className="text-[10px] block -mt-1 font-normal">⌣</span>
          </div>
          <div className="absolute left-2 bottom-3 px-1.5 py-0.5 rounded-md border-2 border-slate-900 font-bold text-xs text-slate-900">
            N
          </div>
          {/* Motion lines */}
          <div className="absolute left-11 top-6 w-5 h-0.5 bg-slate-900 rotate-12" />
          <div className="absolute left-14 bottom-5 w-5 h-0.5 bg-slate-900 rotate-12" />
        </div>
      ),
    },
    {
      title: "All free",
      description:
        "Deposits and payments are completely free. No issuance fee, annual fee.",
      actionText: "Next",
      stepIndex: 1,
      icon: (
        <div className="flex items-center justify-center gap-3 w-36 h-28">
          {/* Vertical card */}
          <div className="w-10 h-16 rounded-lg border-2 border-slate-900 bg-white p-1 flex flex-col justify-between items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <div className="w-5 h-2.5 border-t border-b border-slate-900" />
          </div>
          {/* Piggy bank */}
          <div className="relative w-16 h-14 border-2 border-slate-900 rounded-3xl flex items-center justify-center bg-white">
            <div className="absolute -top-1 w-4 h-1 bg-slate-900 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-5" />
            {/* Feet */}
            <div className="absolute -bottom-1 left-3 w-2 h-1.5 bg-slate-900" />
            <div className="absolute -bottom-1 right-3 w-2 h-1.5 bg-slate-900" />
            {/* Snout */}
            <div className="absolute -right-2 top-4 w-2.5 h-4 border-2 border-slate-900 rounded-r-md bg-white" />
          </div>
        </div>
      ),
    },
    {
      title: "Security",
      description:
        "Two-Factor Authentication: OTP authentication code and MSC security code.",
      actionText: "Start",
      stepIndex: 2,
      icon: (
        <div className="relative flex items-center justify-center w-36 h-28">
          {/* Encircling stroke */}
          <div className="w-24 h-24 rounded-full border-2 border-slate-900 flex items-center justify-center relative">
            {/* Shield */}
            <div className="absolute -left-3 top-6 w-9 h-11 border-2 border-slate-900 bg-white rounded-b-2xl rounded-t-sm flex items-center justify-center shadow-xs">
              <div className="w-4 h-5 border-l-2 border-b-2 border-slate-900 rotate-45 mb-1" />
            </div>
            {/* Security card */}
            <div className="w-18 h-12 rounded-lg border-2 border-slate-900 bg-white p-1.5 flex flex-col justify-between ml-4">
              <div className="h-2 w-full bg-slate-900 rounded-xs" />
              <div className="flex gap-1 items-center self-end">
                <span className="w-2 h-2 rounded-full border border-slate-900" />
                <span className="w-2 h-2 rounded-full border border-slate-900 -ml-1" />
              </div>
            </div>
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
                          ? "w-4 bg-slate-900"
                          : "w-1.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Next / Start Button */}
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-orange-500 transition-colors"
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