import { Link } from "react-router-dom"
import { CheckCircle2 } from "lucide-react"
import PageHero from "../components/PageHero"

const plans = [
  ["Starter", "1 worker", ["Basic moving assistance", "Standard scheduling", "Ideal for lighter jobs"]],
  ["Standard", "2 workers", ["Furniture handling", "Flexible scheduling", "Popular for home moves"]],
  ["Team", "4+ workers", ["Heavy lifting support", "Loading & unloading", "Coordinated crew"]],
]

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Choose a crew size that fits the job." description="These are planning packages for the frontend. Final pricing should be calculated from your actual location, duration, crew size and service rules." />
      <section className="py-20"><div className="container-page grid gap-5 lg:grid-cols-3">{plans.map(([name,crew,features], i)=><article key={name} className={`rounded-3xl border p-7 sm:p-8 ${i===1 ? "border-slate-950 bg-slate-950 text-white shadow-xl lg:-translate-y-2" : "border-slate-200 bg-white"}`}>{i===1&&<span className="rounded-full bg-orange-500 px-3 py-1 text-[11px] font-black">POPULAR</span>}<h2 className="mt-5 text-2xl font-black">{name}</h2><p className={`mt-2 text-sm font-bold ${i===1?"text-slate-400":"text-slate-500"}`}>{crew}</p><div className="mt-7 grid gap-4">{features.map((f)=><div key={f} className="flex gap-3"><CheckCircle2 className="shrink-0 text-orange-500" size={20}/><span className="font-semibold">{f}</span></div>)}</div><Link to="/contact" className={`mt-8 block rounded-xl px-5 py-3.5 text-center font-black ${i===1?"bg-orange-500 text-white hover:bg-orange-400":"bg-slate-950 text-white hover:bg-orange-500"}`}>Request Crew</Link></article>)}</div></section>
    </>
  )
}