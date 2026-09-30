import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Truck } from "lucide-react"
import { company } from "../data/siteData"

export default function Footer() {
  const tel = company.phone.replace(/[^+\d]/g, "")
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500"><Truck size={21} /></span>
            <div><p className="font-black">{company.name}</p><p className="text-[10px] font-black tracking-[.18em] text-orange-400">MOVING LABOR</p></div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Reliable labor for loading, unloading, furniture moving, packing assistance and heavy lifting.</p>
          <div className="mt-6 flex gap-2">
            <a href="#" aria-label="Facebook" className="rounded-lg border border-white/10 p-2.5 text-slate-300 hover:border-orange-500 hover:text-orange-400"><Facebook size={17} /></a>
            <a href="#" aria-label="Instagram" className="rounded-lg border border-white/10 p-2.5 text-slate-300 hover:border-orange-500 hover:text-orange-400"><Instagram size={17} /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-lg border border-white/10 p-2.5 text-slate-300 hover:border-orange-500 hover:text-orange-400"><Linkedin size={17} /></a>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Company</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/pricing" className="hover:text-white">Pricing</Link>
            <Link to="/blog" className="hover:text-white">Moving Guide</Link>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Customer</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <Link to="/contact" className="hover:text-white">Book Help</Link>
            <Link to="/login" className="hover:text-white">Customer Login</Link>
            <Link to="/register" className="hover:text-white">Create Account</Link>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-400">
            <a href={`tel:${tel}`} className="flex gap-3 hover:text-white"><Phone size={17} className="mt-0.5 shrink-0 text-orange-400" /> {company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex gap-3 break-all hover:text-white"><Mail size={17} className="mt-0.5 shrink-0 text-orange-400" /> {company.email}</a>
            <span className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-orange-400" /> {company.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Professional moving labor & helper services.</span>
        </div>
      </div>
    </footer>
  )
}