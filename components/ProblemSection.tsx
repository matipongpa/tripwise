function TabsIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

function BotIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3m18-3V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
      />
    </svg>
  )
}

const problems = [
  {
    Icon: TabsIcon,
    text: 'You Googled "top 10 Bangkok" and got 47 tabs open',
  },
  {
    Icon: BotIcon,
    text: 'You asked AI and got a plan with 6 temples before lunch',
  },
  {
    Icon: WalletIcon,
    text: "You still don't know if ฿5,000 is enough for 5 days",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gray-50">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Sound familiar?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ Icon, text }, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Icon />
              </div>
              <p className="text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-lg font-semibold text-primary">
          We fix all three.
        </p>
      </div>
    </section>
  )
}
