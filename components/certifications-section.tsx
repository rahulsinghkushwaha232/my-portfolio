"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ShieldCheck, ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  { title: "Database Management System", provider: "Oracle", year: "May 7, 2026", description: "Successfully completed Oracle certification in database management and foundational database concepts.", image: "/certs/oracle-dbms.png", verificationUrl: "/certs/Oracle DBMS Certificate.pdf" },
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", provider: "Oracle", year: "Apr 30, 2026", description: "Earned the Oracle Cloud Infrastructure AI Foundations credential, demonstrating foundational knowledge of AI concepts and Oracle Cloud AI services.", image: "/certs/oracle-ai.jpg", verificationUrl: "/certs/Oracle AI Certificate.pdf" },
  { title: "AWS Academy Graduate - Cloud Architecting - Training Badge", provider: "AWS Academy", year: "Dec 30, 2025", description: "Successfully completed 60 hours of AWS Academy Cloud Architecting training.", image: "/certs/extra-cert-2.png", verificationUrl: "/certs/AWS Cloud Architecting Certificate.pdf" },
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", provider: "Infosys Springboard", year: "Dec 12, 2025", description: "Successfully completed training in ChatGPT-4 prompt engineering, generative AI, and large language models.", image: "/certs/extra-cert-3.png", verificationUrl: "/certs/Infosys Certificate 2.pdf" },
  { title: "Introduction to Internet of Things", provider: "NPTEL", year: "Oct 2025", description: "Successfully completed the 12-week NPTEL Internet of Things course with a consolidated score of 61%.", image: "/certs/nptel-iot.png", verificationUrl: "/certs/NPTEL Certificate IOT.pdf" },
  { title: "Introduction to Programming in Java", provider: "iamneo", year: "May 2025", description: "Successfully completed 72 hours of Java programming through Lovely Professional University on the iamneo platform.", image: "/certs/iamneo-java.png", verificationUrl: "/certs/Java certificate iamneo.pdf" },
]

export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="certifications" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <Award className="w-3.5 h-3.5" />
            Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </motion.div>

        {/* Certs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl overflow-hidden glass-card border border-border/50 hover:border-border hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] transition-all duration-500"
            >
              {/* Image Header wrapper */}
              <div className="relative aspect-[1.4] w-full bg-muted/20 overflow-hidden border-b border-border/40">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                
                {/* Verified Badge (overlapping bottom right) */}
                <div className="absolute bottom-4 right-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center shadow-lg shadow-red-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold leading-tight text-foreground mb-1.5 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#ef4444]">
                    {cert.provider}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>

                <div className="w-full h-px bg-border/60 my-5" />

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {cert.year}
                  </span>
                  
                  {/* Verification link icon */}
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="Verify Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
