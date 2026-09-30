import { useState } from "react"
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, Phone, Users } from "lucide-react"
import { company } from "../data/siteData"

const initial = { name:"", phone:"", email:"", service:"Loading & Unloading", date:"", time:"", workers:"2", hours:"2", pickup:"", destination:"", details:"" }

export default function Contact() {
  const [data, setData] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const update = (e) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))
  const submit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="bg-slate-50">
      <section className="bg-slate-950 py-20 text-white sm:py-24"><div className="container-page"><p className="text-xs font-black uppercase tracking-[.2em] text-orange-400">Book Moving Help</p><h1 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">Tell us what you need moved.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Provide the job details below. This demo form validates the frontend flow and can later be connected to your backend, email or booking system.</p></div></section>
      <section className="container-page py-16"><div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center"><CheckCircle2 size={60} className="text-orange-500"/><h2 className="mt-5 text-3xl font-black">Request captured</h2><p className="mt-3 max-w-md leading-7 text-slate-600">The frontend form is working. Connect this handler to your backend or email service to send the request to the business owner.</p><button type="button" onClick={()=>{setSubmitted(false);setData(initial)}} className="mt-7 rounded-xl bg-slate-950 px-6 py-3.5 font-black text-white">Create Another Request</button></div>
          ) : (
            <form onSubmit={submit} className="grid gap-6">
              <div><p className="text-xs font-black uppercase tracking-[.18em] text-orange-500">Customer details</p><h2 className="mt-2 text-2xl font-black">Booking request</h2></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={data.name} onChange={update} required placeholder="Your name" />
                <Field label="Phone" name="phone" value={data.phone} onChange={update} required placeholder="Phone number" />
                <Field label="Email" type="email" name="email" value={data.email} onChange={update} required placeholder="you@example.com" />
                <Select label="Service" name="service" value={data.service} onChange={update} options={["Loading & Unloading","Furniture Moving","Packing Assistance","Heavy Lifting"]} />
                <Field label="Moving date" type="date" name="date" value={data.date} onChange={update} required />
                <Field label="Preferred time" type="time" name="time" value={data.time} onChange={update} required />
                <Select label="Workers" name="workers" value={data.workers} onChange={update} options={["1","2","3","4","5","6","8+"]} />
                <Select label="Estimated hours" name="hours" value={data.hours} onChange={update} options={["2","3","4","5","6","8+"]} />
                <Field label="Pickup location" name="pickup" value={data.pickup} onChange={update} required placeholder="Pickup address / area" />
                <Field label="Destination" name="destination" value={data.destination} onChange={update} required placeholder="Destination address / area" />
              </div>
              <label className="grid gap-2 text-sm font-bold">Job details<textarea name="details" value={data.details} onChange={update} rows="5" className="rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-orange-500" placeholder="Furniture, stairs, elevator, boxes, special access or other notes..." /></label>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-black text-white hover:bg-orange-600">Submit Request <ArrowRight size={18}/></button>
            </form>
          )}
        </div>
        <aside className="space-y-5">
          <div className="rounded-3xl bg-slate-950 p-7 text-white"><h2 className="text-2xl font-black">Contact</h2><div className="mt-6 grid gap-5"><a href={`tel:${company.phone.replace(/[^+\d]/g,"")}`} className="flex gap-3"><Phone className="text-orange-400" size={19}/><span>{company.phone}</span></a><a href={`mailto:${company.email}`} className="flex gap-3 break-all"><Mail className="text-orange-400" size={19}/><span>{company.email}</span></a><div className="flex gap-3"><MapPin className="text-orange-400" size={19}/><span>{company.location}</span></div></div></div>
          <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200"><h3 className="font-black">Before you submit</h3><div className="mt-5 grid gap-4 text-sm font-semibold text-slate-600"><div className="flex gap-3"><CalendarDays className="shrink-0 text-orange-500" size={18}/> Have your moving date ready.</div><div className="flex gap-3"><Clock3 className="shrink-0 text-orange-500" size={18}/> Estimate the number of hours.</div><div className="flex gap-3"><Users className="shrink-0 text-orange-500" size={18}/> Select the crew size you expect to need.</div></div></div>
        </aside>
      </div></section>
    </div>
  )
}

function Field({label, type="text", ...props}) { return <label className="grid gap-2 text-sm font-bold">{label}<input type={type} {...props} className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 outline-none focus:border-orange-500" /></label> }
function Select({label, options, ...props}) { return <label className="grid gap-2 text-sm font-bold">{label}<select {...props} className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 outline-none focus:border-orange-500">{options.map(o=><option key={o}>{o}</option>)}</select></label> }