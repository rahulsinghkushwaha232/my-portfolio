"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Terminal, Brain, Lightbulb, Users, RefreshCw, BookOpen, type LucideIcon } from "lucide-react"

type Skill = {
  name: string
  icon: string
  softIcon?: LucideIcon
}

type Category = {
  title: string
  titleColor: string
  cardClass: string
  skills: Skill[]
}

// Using devicons CDN (most reliable, largest coverage)
const DI = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

// simpleicons CDN for any gaps
const SI = (slug: string, hex = "888888") =>
  `https://cdn.simpleicons.org/${slug}/${hex}`

const skillCategories: Category[] = [
  {
    title: "Languages",
    titleColor: "text-yellow-400",
    cardClass:
      "bg-gradient-to-br from-yellow-950/50 via-amber-950/30 to-card border border-yellow-500/20",
    skills: [
      { name: "Java",       icon: DI("java") },
      { name: "Python",     icon: DI("python") },
      { name: "C++",        icon: DI("cplusplus") },
      { name: "JavaScript", icon: DI("javascript") },
      { name: "TypeScript", icon: DI("typescript") },
    ],
  },
  {
    title: "Frontend & UI",
    titleColor: "text-cyan-400",
    cardClass:
      "bg-gradient-to-br from-cyan-950/50 via-sky-950/30 to-card border border-cyan-500/20",
    skills: [
      { name: "React",    icon: DI("react") },
      { name: "Next.js",  icon: SI("nextdotjs", "FFFFFF") },
      { name: "HTML5",    icon: DI("html5") },
      { name: "CSS3",     icon: DI("css3") },
      { name: "Tailwind CSS", icon: SI("tailwindcss", "06B6D4") },
      { name: "Vite", icon: DI("vitejs") },
    ],
  },
  {
    title: "Backend & Database",
    titleColor: "text-green-400",
    cardClass:
      "bg-gradient-to-br from-green-950/50 via-emerald-950/30 to-card border border-green-500/20",
    skills: [
      { name: "Node.js",   icon: DI("nodejs") },
      { name: "Express",   icon: SI("express", "FFFFFF") },
      { name: "MongoDB",   icon: DI("mongodb") },
      { name: "MySQL", icon: DI("mysql") },
      { name: "Spring Boot", icon: SI("springboot", "6DB33F") },
      { name: "Spring Data JPA", icon: SI("spring", "6DB33F") },
      { name: "PostgreSQL", icon: DI("postgresql") },
      { name: "SQL", icon: DI("mysql") },
    ],
  },
  {
    title: "Cloud & DevOps",
    titleColor: "text-purple-400",
    cardClass: "bg-gradient-to-br from-purple-950/50 via-violet-950/30 to-card border border-purple-500/20",
    skills: [
      { name: "AWS", icon: "" }, { name: "Docker", icon: DI("docker") },
      { name: "Kubernetes", icon: DI("kubernetes") }, { name: "Terraform", icon: DI("terraform") },
      { name: "GitHub Actions", icon: SI("githubactions", "2088FF") }, { name: "Prometheus", icon: DI("prometheus") },
      { name: "Grafana", icon: DI("grafana") },
    ],
  },
  {
    title: "Core CS & Tools", titleColor: "text-pink-400",
    cardClass: "bg-gradient-to-br from-pink-950/50 via-rose-950/30 to-card border border-pink-500/20",
    skills: [ { name: "DSA", icon: DI("thealgorithms") }, { name: "DBMS", icon: DI("mysql") }, { name: "Git", icon: DI("git") }, { name: "GitHub", icon: SI("github", "FFFFFF") }, { name: "Postman", icon: DI("postman") }, { name: "Vercel", icon: SI("vercel", "FFFFFF") } ],
  },
  {
    title: "Soft Skills", titleColor: "text-orange-300",
    cardClass: "bg-gradient-to-br from-orange-950/50 via-amber-950/30 to-card border border-orange-500/20",
    skills: [
      { name: "Problem-Solving", icon: "", softIcon: Brain },
      { name: "Critical Thinking", icon: "", softIcon: Lightbulb },
      { name: "Quick Learner", icon: "", softIcon: BookOpen },
      { name: "Adaptability", icon: "", softIcon: RefreshCw },
      { name: "Team Collaboration", icon: "", softIcon: Users },
    ],
  },
]

function SkillIcon({ skill, delay, softSkill = false }: { skill: Skill; delay: number; softSkill?: boolean }) {
  const initials = skill.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.38, ease: "backOut" }}
      whileHover={{ scale: 1.1, y: -8 }}
      className={`flex flex-col items-center gap-3 cursor-default group ${softSkill ? "w-[96px] shrink-0" : ""}`}
    >
      {/* Icon tile */}
      <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/40 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:-rotate-3 transition-all duration-300">
        {skill.softIcon ? (
          <skill.softIcon className="w-9 h-9 text-orange-300 group-hover:text-orange-200 transition-colors" aria-hidden="true" />
        ) : skill.name === "AWS" ? (
          <svg viewBox="0 0 48 48" className="w-10 h-10" role="img" aria-label="AWS logo">
            <text x="4" y="28" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-1">aws</text>
            <path d="M7 34c9 7 24 7 34-1" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
            <path d="m36 29 6 3-2 6" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.icon}
              alt={skill.name}
              width={36}
              height={36}
              className="object-contain select-none"
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = "none"
                const fallback = el.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = "flex"
              }}
            />
            <span className="hidden w-full h-full items-center justify-center text-xs font-black text-white/50" aria-hidden>
              {initials}
            </span>
          </>
        )}
      </div>

      {/* Label */}
      <span className={`text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white/90 transition-colors text-center leading-snug ${softSkill ? "w-full px-1 whitespace-normal break-words" : "max-w-[68px]"}`}>
        {skill.name}
      </span>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="skills" className="py-28 relative overflow-hidden bg-muted/5">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(oklch(0.97 0 0) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            What I work with
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical skills and core competencies
          </p>
        </motion.div>

        {/* 2×2 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
              className={`relative rounded-2xl px-8 py-8 ${cat.cardClass} backdrop-blur-sm overflow-hidden group hover:scale-[1.015] transition-transform duration-300 min-h-[210px]`}
            >
              {/* Top edge highlight on hover */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, oklch(0.97 0 0 / 0.14), transparent)",
                }}
              />

              {/* Category title */}
              <h3 className={`text-sm font-heading font-black uppercase tracking-[0.25em] mb-7 ${cat.titleColor}`}>
                {cat.title}
              </h3>

              {/* Icons row */}
              <div className={`flex flex-wrap ${cat.title === "Soft Skills" ? "gap-x-5 gap-y-7" : "gap-x-7 gap-y-5"}`}>
                {cat.skills.map((skill, i) => (
                  <SkillIcon
                    key={i}
                    skill={skill}
                    delay={catIdx * 0.08 + i * 0.07}
                    softSkill={cat.title === "Soft Skills"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

