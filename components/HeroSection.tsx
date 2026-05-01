function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-primary shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground tracking-tight leading-tight mb-6">
          Bangkok trip plans you can actually follow.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Budget-aware, time-realistic itineraries for couples. Built in 60
          seconds — not 6 hours of Googling.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-foreground">
            <CheckIcon />
            No unrealistic schedules
          </span>
          <span className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-foreground">
            <CheckIcon />
            Real costs, real travel times
          </span>
        </div>

        <a
          href="#form"
          className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-dark transition-colors"
        >
          Plan my Bangkok trip →
        </a>
        <p className="mt-4 text-sm text-gray-500">Free for your first plan</p>
      </div>
    </section>
  )
}
