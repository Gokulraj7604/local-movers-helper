import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return <section className="flex min-h-[70vh] items-center justify-center bg-slate-950 px-6 text-center text-white"><div><p className="text-8xl font-black text-orange-500">404</p><h1 className="mt-4 text-4xl font-black">Page not found</h1><p className="mx-auto mt-4 max-w-lg text-slate-400">The page may have moved or the address may be incorrect.</p><Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-black"><ArrowLeft size={18}/> Back Home</Link></div></section>
}