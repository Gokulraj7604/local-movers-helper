export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-xs font-black uppercase tracking-[.2em] text-orange-500">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>}
    </div>
  )
}