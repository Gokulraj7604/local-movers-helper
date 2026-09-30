import { Link } from "react-router-dom"
import { ArrowRight, Boxes, CheckCircle2, Dumbbell, PackageCheck, Sofa, Users } from "lucide-react"
import PageHero from "../components/PageHero"
import { services } from "../data/siteData"

const icons = { "loading-unloading": Boxes, "furniture-moving": Sofa, "packing-assistance": PackageCheck, "heavy-lifting": Dumbbell }

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Moving help when you need it." description="Choose the type of moving labor that fits your job, from loading and unloading to furniture handling and heavy lifting." />
      <section className="py-20">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.slug]
            return (
              <article key={service.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-64"><img src={service.image} alt={service.title} className="h-full w-full object-cover" /><span className="absolute left-5 top-5 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-black text-white">{service.category}</span></div>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500"><Icon size={22} /></span><span className="text-sm font-black text-slate-400">{service.number}</span></div>
                  <h2 className="mt-5 text-2xl font-black">{service.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => <div key={feature} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 size={17} className="text-orange-500" />{feature}</div>)}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link to={`/services/${service.slug}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 font-black text-white hover:bg-orange-500">View Details <ArrowRight size={17} /></Link>
                    <Link to="/contact" className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 font-black hover:border-orange-300 hover:text-orange-600">Request Service</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <section className="bg-slate-50 py-16"><div className="container-page flex flex-col gap-5 rounded-3xl bg-slate-950 p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between"><div><Users className="text-orange-400" /><h2 className="mt-4 text-3xl font-black">Not sure how many workers you need?</h2><p className="mt-2 text-slate-400">Send the job details and we can review the required crew size.</p></div><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-black hover:bg-orange-400">Tell Us About the Job <ArrowRight size={18} /></Link></div></section>
    </>
  )
}