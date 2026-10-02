export default function Brands() {
  const brands = [
    {
      name: 'ClickUp',
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 110 28">
          <path d="M7.7 15.2l3.4-2.8 1.9 2.3c2.4-2.8 5.7-4.4 9.4-4.4 7 0 12.6 5.6 12.6 12.6h-4.6c0-4.4-3.6-8-8-8-2.6 0-4.9 1.2-6.5 3.1l2.4 2-8.6 1.8 1.4-8.6z" />
          <text x="32" y="22" className="text-xl font-bold font-sans">ClickUp</text>
        </svg>
      ),
    },
    {
      name: 'Segment',
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 125 28">
          <path d="M12 4a7 7 0 0 0-6.7 5h4.3a3 3 0 0 1 2.4-1.2A3 3 0 0 1 15 10.8L9 12a7 7 0 0 0-4 6.4A6.8 6.8 0 0 0 12 25a7 7 0 0 0 6.7-5h-4.3a3 3 0 0 1-2.4 1.2 3 3 0 0 1-3-3l6-1.2a7 7 0 0 0 4-6.4A6.8 6.8 0 0 0 12 4z" />
          <text x="24" y="21" className="text-lg font-semibold font-sans tracking-tight">segment</text>
        </svg>
      ),
    },
    {
      name: 'Dropbox',
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 120 28">
          <path d="M5.5 4.5L11 8l-5.5 3.5L0 8l5.5-3.5zm11 0L22 8l-5.5 3.5L11 8l5.5-3.5zm-11 7L11 15l-5.5 3.5L0 15l5.5-3.5zm11 0L22 15l-5.5 3.5L11 15l5.5-3.5zM11 16.5l5.5 3.5-5.5 3.5-5.5-3.5 5.5-3.5z" />
          <text x="27" y="21" className="text-lg font-bold font-sans">Dropbox</text>
        </svg>
      ),
    },
    {
      name: 'RingCentral',
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 135 28">
          <circle cx="16" cy="6" r="2.2" />
          <text x="0" y="22" className="text-xl font-normal font-sans tracking-tight">
            <tspan className="font-semibold">Ring</tspan>Central
          </text>
        </svg>
      ),
    },
    {
      name: 'Stripe',
      svg: (
        <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 75 28">
          <text x="0" y="22" className="text-2xl font-black font-sans tracking-tighter lowercase">
            stripe
          </text>
        </svg>
      ),
    },
    {
      name: 'SAP',
      svg: (
        <svg className="h-7 sm:h-8 w-auto fill-current" viewBox="0 0 60 28">
          <path d="M0 0h60v28H0z" fill="none" />
          <path d="M2 2h34l22 24H2V2z" />
          <text x="10" y="20" fill="white" className="text-base font-black font-sans tracking-widest">
            SAP
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-100/70 py-12 sm:py-16 border-y border-emerald-100/40">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Subtitle / Header */}
        <p className="text-center font-mono text-xs sm:text-sm tracking-wider text-slate-500 uppercase">
          40+ partner have put their trust in us
        </p>

        {/* Brand Logos Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 text-slate-600">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center opacity-70 transition-all duration-200 hover:opacity-100 hover:text-slate-900"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}