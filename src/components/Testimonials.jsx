export default function Testimonials() {
  const testimonials = [
    {
      name: "Zahid Miles",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      quote:
        "They are great. They did exactly what I needed. The friendly chaps are a real problem solvers. Loved working with them.",
    },
    {
      name: "Casper Leigh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      quote:
        "Awesome services. I am really happy to be here because of their services. I will continue to use their services in the future.",
    },
    {
      name: "Cian Reyes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
      quote:
        "By far the best thing about this is the efficient team they've put together. Everyone is so knowledgeable and friendly.",
    },
    {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      quote:
        "Just wow. I knew I was going to get a great service, but they went above and beyond my expectations.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with subtle border & background */}
        <div className="relative rounded-3xl bg-slate-50/80 border border-slate-100 pt-16 pb-28 sm:pb-36 px-6 sm:px-12 text-center shadow-xs">
          
          {/* Subtle Watermark Quote in Top Left */}
          <div
            className="absolute left-6 top-6 sm:left-12 sm:top-8 text-slate-200/70 select-none pointer-events-none"
            aria-hidden="true"
          >
            <svg className="w-20 h-20 sm:w-28 sm:h-28 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="relative text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What our Clients say!
          </h2>
          
          {/* Underline accent */}
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-400" />
        </div>

        {/* Overlapping Cards Row */}
        <div className="-mt-20 sm:-mt-24 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-200/60 border border-slate-100 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1.5"
            >
              {/* Client Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50 shadow-xs mb-4"
              />

              {/* Client Name */}
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-4">
                {item.name}
              </h3>

              {/* Quote Body with Mini Opening/Closing Quotes */}
              <div className="relative mt-auto">
                <span className="text-slate-300 text-2xl font-serif leading-none select-none">
                  “
                </span>
                <p className="inline text-xs sm:text-sm leading-relaxed text-slate-600 px-1">
                  {item.quote}
                </p>
                <span className="text-slate-300 text-2xl font-serif leading-none select-none">
                  ”
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}