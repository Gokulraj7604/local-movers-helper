import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { ArrowRight, Menu, Phone, Truck, X } from "lucide-react"
import Footer from "../components/Footer"
import { company } from "../data/siteData"

const nav = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/pricing", "Pricing"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
]

export default function WebsiteLayout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `focus-ring rounded-lg px-3 py-2 text-sm font-bold transition ${
      isActive
        ? "bg-orange-50 text-orange-600"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
    }`

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container-page flex h-[76px] items-center justify-between">
          <Link to="/" className="focus-ring flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-orange-400 shadow-lg">
              <Truck size={21} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-tight text-slate-950 sm:text-base">Local Movers</span>
              <span className="block text-[10px] font-black tracking-[.18em] text-orange-500">HELPER & LABOR</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"} className={linkClass}>{label}</NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="focus-ring flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-950">
              <Phone size={16} className="text-orange-500" />
              Call
            </a>
            <Link to="/contact" className="focus-ring inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600">
              Book Now <ArrowRight size={16} />
            </Link>
          </div>

          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="focus-ring rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {nav.map(([to, label]) => (
                <NavLink key={to} to={to} end={to === "/"} className={linkClass}>{label}</NavLink>
              ))}
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-extrabold text-white">
                Book Moving Help <ArrowRight size={17} />
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}