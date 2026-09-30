import { ArrowRight, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { company } from "../data/siteData"

export default function PageHero({ eyebrow, title, description, compact = false }) {
  const tel = company.phone.replace(/[^+\d]/g, "")
  return (
    <section className={`relative overflow-hidden bg-slate-950 text-white ${compact ? "py-16" : "py-20 sm:py-24"}`}>
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[.22em] text-orange-400">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-extrabold hover:bg-orange-400">Get a Quote <ArrowRight size={18} /></Link>
            <a href={`tel:${tel}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-extrabold hover:bg-white/10"><Phone size={17} /> Call Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}