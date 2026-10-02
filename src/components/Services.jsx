export default function Services() {
  const services = [
    {
      title: "Easy Transaction",
      description:
        "We perform diligence guarantee the best financing and financial plan your dept anywhere.",
      bg: "bg-[#FDF09B]", // soft pastel yellow
      icon: (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="9" cy="9" r="4" />
          <circle cx="15" cy="15" r="4" />
        </svg>
      ),
    },
    {
      title: "Convert Currency",
      description:
        "We perform diligence guarantee the best financing and financial plan your dept anywhere.",
      bg: "bg-[#C4C4FD]", // soft lavender / periwinkle
      icon: (
        <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Advanced Security",
      description:
        "We perform diligence guarantee the best financing and financial plan your dept anywhere.",
      bg: "bg-[#FBD4C0]", // soft pastel peach
      icon: (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 19 6 19 18 12 22 5 18 5 6 12 2" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 text-center tracking-tight max-w-2xl mx-auto leading-tight">
          Unleash the true potential for next gen banking.
        </h2>

        {/* 3-Column Service Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1`}
            >
              <div>
                {/* Rounded Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xs mb-8">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm leading-relaxed text-slate-700/90 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <a
                  href="#learn-more"
                  className="inline-block bg-black text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}