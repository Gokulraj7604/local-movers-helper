import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Users } from "lucide-react"
import { services } from "../data/siteData"

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <section className="container-page py-24 text-center"><h1 className="text-5xl font-black">Service not found</h1><Link to="/services" className="mt-7 inline-flex rounded-xl bg-orange-500 px-5 py-3 font-black text-white">Back to Services</Link></section>

  return (
    <div className="bg-slate-50">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="container-page">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"><ArrowLeft size={16} /> All Services</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.2em] text-orange-400">{service.category}</p><h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">{service.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{service.description}</p></div>
            <img src={service.image} alt={service.title} className="h-72 w-full rounded-3xl object-cover shadow-2xl lg:h-80" />
          </div>
        </div>
      </section>
      <section className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <h2 className="text-3xl font-black">What is included?</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">{service.features.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 font-bold"><CheckCircle2 className="text-orange-500" size={19} />{item}</div>)}</div>
            <h2 className="mt-12 text-3xl font-black">How it works</h2>
            <div className="mt-6 grid gap-4">{["Share your job details", "Choose date and crew size", "Confirm locations and access", "Crew arrives and completes the labor"].map((step, i) => <div key={step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">{i+1}</span><p className="pt-1 font-semibold text-slate-700">{step}</p></div>)}</div>
          </article>
          <aside className="space-y-5">
            <div className="rounded-3xl bg-slate-950 p-7 text-white"><h2 className="text-2xl font-black">Service details</h2><div className="mt-6 grid gap-4"><div className="flex items-center gap-3"><Clock3 className="text-orange-400" size={20} /><div><p className="text-xs text-slate-500">Typical duration</p><p className="font-bold">{service.duration}</p></div></div><div className="flex items-center gap-3"><Users className="text-orange-400" size={20} /><div><p className="text-xs text-slate-500">Typical crew</p><p className="font-bold">{service.team}</p></div></div></div><Link to="/contact" className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-black hover:bg-orange-400">Request This Service <ArrowRight size={17} /></Link></div>
          </aside>
        </div>
      </section>
    </div>
  )
}