"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, X, ExternalLink, CalendarDays } from "lucide-react"

export function TrainingSection() {
  const [open, setOpen] = useState(false)
  const bullets = [
    "Strengthened problem-solving with efficient optimized code using core DSA concepts.",
    "Implemented custom data structures (stacks, queues, trees) to solve memory allocation problems.",
    "Implemented Quicksort and Merge Sort and reduced time complexity from O(n²) to O(n log n) through Big-O analysis.",
  ]
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-badge"><Award className="w-3.5 h-3.5" /> Professional Development</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">Focused practice in data structures, algorithms and complexity analysis</p>
        </motion.div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] rounded-3xl overflow-hidden glass-card border border-border/50">
          <button onClick={() => setOpen(true)} className="group relative block w-full aspect-[1.42] lg:aspect-auto lg:min-h-[560px] bg-[#0b1020] p-4 sm:p-6 overflow-hidden" aria-label="Preview W3grads DSA training certificate">
            {/* eslint-disable-next-line @next/next/no-img-element */}<img src="/certs/w3grads-dsa.png" alt="W3grads DSA training certificate" className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="absolute bottom-5 right-5 px-3 py-2 rounded-xl bg-background/85 text-xs font-semibold shadow-lg">View certificate <ExternalLink className="inline w-3 h-3 ml-1" /></span>
          </button>
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-primary mb-3"><Award className="w-4 h-4" /> W3grads · Summer Training 2025</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight leading-tight">Data Structures &amp; Algorithms using Java &amp; C++</h3>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mt-4"><CalendarDays className="w-4 h-4 text-primary" />June 10 - July 30, 2025</p>
            <div className="h-px bg-border/60 my-6" />
            <ul className="space-y-3">{bullets.map((b) => <li key={b} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5"><span className="text-primary font-bold">›</span><span>{b}</span></li>)}</ul>
            <div className="flex flex-wrap gap-1.5 mt-6">{["Java", "C++", "DSA", "Big-O Analysis"].map((t) => <span key={t} className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>)}</div>
          </div>
        </div>
      </div>
      {open && <div role="dialog" aria-modal="true" aria-label="W3grads training certificate" onClick={() => setOpen(false)} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"><button onClick={() => setOpen(false)} aria-label="Close certificate preview" className="absolute top-5 right-5 text-white"><X className="w-8 h-8" /></button><img src="/certs/w3grads-dsa.png" alt="W3grads DSA training certificate enlarged" className="max-h-[90vh] max-w-[95vw] object-contain" /></div>}
    </section>
  )
}
