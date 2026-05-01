export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-semibold text-foreground tracking-tight">
          trip wise
        </span>
        <a
          href="#form"
          className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          Plan my trip
        </a>
      </div>
    </header>
  )
}
