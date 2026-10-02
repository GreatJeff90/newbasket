export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Your Smart Commerce Partner<br className="hidden sm:inline" />
          <span className="text-orange-500">Powered by AI</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-500 font-normal">
          Streamline multi-channel payments, eliminate transaction drag, and manage payouts in one unified hub. New Basket powers your business seamlessly in the background so you can scale what matters.
        </p>

        {/* Call To Action Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#try-free"
            className="group inline-flex items-center gap-3 rounded-full bg-black py-2.5 pl-6 pr-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-orange-500"
          >
            <span>Try It Free</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}