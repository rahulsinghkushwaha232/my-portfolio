"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Training",
  "Certifications",
  "Achievements",
  "Contact",
]

const socials = [
  {
    icon: Github,
    href: "https://github.com/rahulsinghkushwaha232",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rahulsinghkushwaha10/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rahulsinghkushwaha231@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black gradient-text">RK</span>
              <span className="text-lg font-bold text-foreground">
                Rahul Singh Kushwaha
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Cloud Computing Enthusiast | DevOps Learner | Full-Stack Developer | Problem Solver
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full glass-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              {navLinks.map((x) => (
                <button
                  key={x}
                  onClick={() => scroll(x)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  → {x}
                </button>
              ))}
            </div>
          </div>

          {/* Status & Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Status
            </h3>
            <div className="text-sm text-muted-foreground space-y-1.5">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>India</span>
              </p>
              <p className="flex items-start gap-2">
                <span>☁️</span>
                <span>Cloud Computing Student</span>
              </p>
              <p className="flex items-start gap-2">
                <span>🎓</span>
                <span>B.Tech CSE Student at Lovely Professional University</span>
              </p>
            </div>
            <a
              href="mailto:rahulsinghkushwaha231@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Mail className="w-3 h-3" />
              Say Hello
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {year} Rahul Singh Kushwaha. Made with{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" /> All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
