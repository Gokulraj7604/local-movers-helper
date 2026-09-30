import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Clock3, Search, X } from "lucide-react"
import { posts } from "../data/siteData"

export default function Blog() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const categories = ["All", ...new Set(posts.map((p) => p.category))]
  const filtered = useMemo(() => posts.filter((p) => {
    const matchesCategory = category === "All" || p.category === category
    const text = `${p.title} ${p.excerpt} ${p.category}`.toLowerCase()
    return matchesCategory && text.includes(query.toLowerCase())
  }), [query, category])

  return (
    <div className="bg-slate-50">
      <section className="bg-slate-950 py-20 text-white sm:py-24"><div className="container-page"><p className="text-xs font-black uppercase tracking-[.2em] text-orange-400">Moving Guide</p><h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">Practical advice for moving day.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Guides for packing, loading, furniture handling and planning a smoother move.</p></div></section>
      <section className="container-page py-14">
        <div className="flex flex-col gap-4 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-4 top-3.5 text-slate-400" size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search moving guides..." className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-10 outline-none focus:border-orange-500"/>{query&&<button type="button" onClick={()=>setQuery("")} className="absolute right-3 top-3 rounded p-1 text-slate-400"><X size={18}/></button>}</div><select value={category} onChange={e=>setCategory(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-bold outline-none">{categories.map(c=><option key={c}>{c}</option>)}</select></div>
        {filtered.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(post=><article key={post.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"><Link to={`/blog/${post.slug}`}><img src={post.image} alt={post.title} className="h-56 w-full object-cover transition duration-500 hover:scale-[1.02]"/></Link><div className="p-6"><p className="text-xs font-black uppercase tracking-wider text-orange-500">{post.category}</p><h2 className="mt-3 text-xl font-black leading-tight"><Link to={`/blog/${post.slug}`} className="hover:text-orange-600">{post.title}</Link></h2><p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p><div className="mt-5 flex items-center gap-4 text-xs font-bold text-slate-400"><span className="flex items-center gap-1"><CalendarDays size={14}/>{post.date}</span><span className="flex items-center gap-1"><Clock3 size={14}/>{post.readTime}</span></div><Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950">Read article <ArrowRight size={16}/></Link></div></article>)}</div> : <div className="py-20 text-center"><h2 className="text-2xl font-black">No guides found</h2><p className="mt-2 text-slate-500">Try another search or category.</p></div>}
      </section>
    </div>
  )
}