"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Code, Database, Brain, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Full-stack development with Java, React, cloud services and DevOps tools",
    color: "from-blue-500/20 to-primary/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Brain,
    title: "Cloud & DevOps",
    description: "Building cloud infrastructure and automated delivery workflows",
    color: "from-purple-500/20 to-secondary/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Database,
    title: "Problem Solving",
    description: "Applying algorithms and core computer science concepts",
    color: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description: "Learning new tools and applying them to practical software projects",
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
  },
]

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-4 glass-card rounded-xl border border-border/50"
    >
      <p className="text-3xl font-heading font-bold uppercase tracking-tighter gradient-text">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
    </motion.div>
  )
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <Zap className="w-3.5 h-3.5" />
            Who I am
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Passionate about creating innovative solutions that bridge functionality and user experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              "I am a Cloud Computing student passionate about DevOps, automation, and scalable cloud infrastructure. I enjoy learning how modern applications are deployed and managed using cloud platforms, containerization, and CI/CD pipelines.",
              "Beyond technical implementation, I value problem-solving, clean architecture, and continuous improvement. I actively build projects to deepen my understanding of cloud systems and automation while preparing myself to contribute effectively in DevOps and cloud engineering environments.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {text}
              </motion.p>
            ))}

            {/* Mini stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <AnimatedCounter value="11+" label="Projects" />
              <AnimatedCounter value="6+" label="Certifications" />
              <AnimatedCounter value="3+" label="Years" />
              <AnimatedCounter value="Cloud" label="DevOps & Web" />
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group relative p-5 rounded-2xl glass-card border border-border/50 overflow-hidden cursor-default transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-muted/80 mb-4 group-hover:scale-110 transition-transform duration-300 ${highlight.iconColor}`}>
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1.5 text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}




