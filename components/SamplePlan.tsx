interface ItineraryItem {
  time: string
  activity: string
  duration: string
  cost: string
}

const itinerary: ItineraryItem[] = [
  { time: '09:00', activity: 'Wat Pho', duration: '1.5 hrs', cost: '฿200' },
  {
    time: '11:00',
    activity: 'Walk to Grand Palace',
    duration: '15 min',
    cost: 'Free',
  },
  { time: '11:15', activity: 'Grand Palace', duration: '2 hrs', cost: '฿500' },
  {
    time: '13:30',
    activity: 'Lunch near Tha Tien pier',
    duration: '45 min',
    cost: '฿280',
  },
  {
    time: '15:00',
    activity: 'Rest at hotel',
    duration: 'Realistic end time',
    cost: '—',
  },
]

export default function SamplePlan() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gray-50">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Here&apos;s what your plan looks like
        </h2>
        <p className="text-center text-gray-500 mb-12">
          A sample itinerary so you know exactly what to expect.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h3 className="text-white font-semibold text-lg">
                Day 1 — Old City
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {itinerary.map((item, i) => (
                <div key={i} className="px-6 py-4 flex items-start gap-4">
                  <span className="text-sm font-mono text-gray-500 w-12 shrink-0 pt-0.5">
                    {item.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">
                      {item.activity}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.duration}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-medium shrink-0 ${item.cost === 'Free' ? 'text-primary' : 'text-foreground'}`}
                  >
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-wrap gap-4">
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-foreground">
                  Day total:
                </span>{' '}
                ฿980
              </span>
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-foreground">
                  4.5 hrs active
                </span>
              </span>
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-foreground">
                  2 locations
                </span>
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Every plan includes travel time, entrance fees, and meal costs — so
            your budget is always accurate.
          </p>
        </div>
      </div>
    </section>
  )
}
