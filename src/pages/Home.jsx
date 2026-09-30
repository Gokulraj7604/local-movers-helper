import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Star, Truck, Users } from "lucide-react"
import { services } from "../data/siteData"

const image = "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2200&q=90"

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative min-h-[720px] bg-slate-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-16 pt-24 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_390px]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-orange-400" /> Professional Moving Labor
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Move with confidence.
                <span className="mt-2 block text-orange-400">We handle the heavy work.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Reliable moving labor for loading, unloading, furniture moving, packing assistance and heavy lifting.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-black text-white shadow-xl shadow-orange-500/20 hover:bg-orange-400">Book Moving Help <ArrowRight size={18} /></Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-black text-white backdrop-blur hover:bg-white/10">Explore Services</Link>
              </div>
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5 border-t border-white/10 pt-7 sm:grid-cols-4">
                {[["Fast", "Booking"], ["Flexible", "Crew Size"], ["Local", "Support"], ["Clear", "Process"]].map(([a,b]) => (
                  <div key={b}><p className="text-2xl font-black text-white">{a}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{b}</p></div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-3xl border border-white/10 bg-white/95 p-7 text-slate-950 shadow-2xl lg:block">
              <p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">Quick Request</p>
              <h2 className="mt-3 text-2xl font-black">Need hands today?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Tell us the basic job details and continue to the booking form.</p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs font-bold text-slate-400">SERVICE</p><p className="mt-1 font-extrabold">Loading & Unloading</p></div>
                <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs font-bold text-slate-400">CREW</p><p className="mt-1 font-extrabold">2–4 workers</p></div>
                <Link to="/contact" className="mt-2 rounded-xl bg-slate-950 px-5 py-4 text-center font-black text-white hover:bg-orange-500">Start Request</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, "Reliable process", "Clear service details before booking."],
            [Users, "Flexible crew", "Choose the manpower your job needs."],
            [Clock3, "Time focused", "Simple scheduling around your move."],
            [Truck, "Moving ready", "Labor for homes, offices and storage."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="flex gap-4 rounded-2xl p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500"><Icon size={21} /></span>
              <div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">What We Do</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Moving help for the physical work.</h2></div>
            <Link to="/services" className="inline-flex items-center gap-2 font-black text-orange-600">View all services <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="grid sm:grid-cols-[.9fr_1.1fr]">
                  <div className="h-64 overflow-hidden sm:h-full"><img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="p-7 sm:p-8">
                    <span className="text-xs font-black tracking-[.15em] text-orange-500">{service.number}</span>
                    <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950">Learn more <ArrowRight size={16} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">Simple Process</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">From request to moving day.</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">Keep the booking experience simple: describe the job, choose the crew size, confirm the schedule and prepare the moving route.</p>
            <div className="mt-8 grid gap-4">
              {["Describe your moving job", "Choose the service and crew size", "Confirm date, time and locations", "Get ready for the crew"].map((item, i) => <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">{i+1}</span><span className="font-bold">{item}</span></div>)}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl"><Star className="text-orange-400" fill="currentColor" size={25} /><p className="mt-5 text-2xl font-black leading-tight">“The goal is simple: dependable extra hands when moving day gets heavy.”</p><p className="mt-6 text-sm text-slate-400">Local Movers Helper</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-black hover:bg-orange-400">Request Help <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="bg-orange-500 py-16">
        <div className="container-page flex flex-col justify-between gap-7 text-white md:flex-row md:items-center">
          <div><h2 className="text-3xl font-black sm:text-4xl">Have a moving job to plan?</h2><p className="mt-2 text-orange-50">Tell us what you need and build a clear labor request.</p></div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-black hover:bg-slate-900">Book Moving Help <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}