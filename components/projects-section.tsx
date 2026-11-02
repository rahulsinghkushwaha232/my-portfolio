"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Layers, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = { title: string; date: string; description: string; features: string[]; technologies: string[]; repoName: string; image: string; imageAlt: string; githubUrl: string }

const projects: Project[] = [
{ title: 'Serverless Event Driven Processing Pipeline', date: 'Jul 2026', description: 'An AWS pipeline that processes uploaded files through event-driven services.', features: ['S3 uploads trigger Lambda processing', 'Metadata is stored in DynamoDB', 'SNS sends event notifications'], technologies: ['AWS S3', 'AWS Lambda', 'DynamoDB', 'SNS', 'Node.js'], repoName: 'Serverless-Event-Driven-Processing-Pipeline', image: '/project-covers/serverless-pipeline-crop.png', imageAlt: 'AWS event-driven serverless microservices architecture diagram', githubUrl: "https://github.com/rahulsinghkushwaha232/Serverless-Event-Driven-Processing-Pipeline" },
{ title: 'Employee Management System', date: 'Apr 2026', description: 'An HR platform for managing employee records, attendance, and payroll.', features: ['Centralized employee directory', 'Attendance and payroll overview', 'Role-based HR workflows'], technologies: ['Java 17', 'Spring Boot 3', 'React 18', 'Tailwind CSS', 'MySQL'], repoName: 'HRdashboard', image: '/project-covers/employee-management-crop.png', imageAlt: 'Humanline HR management dashboard with employee analytics and performance charts', githubUrl: "https://github.com/rahulsinghkushwaha232/HRdashboard" },
{ title: 'DevOps Microservices Stack', date: 'Mar 2026', description: 'A containerized platform for deploying and monitoring microservices.', features: ['Containerized service deployment', 'Kubernetes-based orchestration', 'Automated CI/CD workflows'], technologies: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'GitHub Actions'], repoName: 'devops-microservices-stack', image: '/project-covers/devops-microservices-crop.png', imageAlt: 'End-to-end DevOps deployment architecture using GitLab CI/CD, Docker, AWS, and Kubernetes', githubUrl: "https://github.com/rahulsinghkushwaha232/devops-microservices-stack" },
{ title: 'Netflix Clone', date: 'Feb 2026', description: 'A responsive Netflix-inspired streaming experience for discovering titles.', features: ['Browse featured and popular titles', 'Explore a cinematic hero section', 'Responsive streaming interface'], technologies: ['HTML5', 'CSS3', 'JavaScript'], repoName: 'Netflix-Clone', image: '/project-covers/netflix-clone-final.png', imageAlt: 'Netflix-style streaming catalog interface with rows of movie and series posters', githubUrl: "https://github.com/rahulsinghkushwaha232/Netflix-Clone" },
{ title: 'Ticket Booking', date: 'Oct 2025', description: 'An event discovery and booking interface for finding live experiences.', features: ['Discover events by category', 'Search events and venues', 'Browse curated local experiences'], technologies: ['React 19', 'Vite', 'React Router', 'JavaScript', 'CSS'], repoName: 'ticket-booking', image: '/project-covers/ticket-booking.jpg', imageAlt: 'Concert audience enjoying a live music performance', githubUrl: "https://github.com/rahulsinghkushwaha232/ticket-booking" },
{ title: 'Student Course Enrollment System', date: 'Apr 2025', description: 'A course portal for browsing classes and managing student enrollment.', features: ['Browse and search the course catalog', 'Manage student enrollment', 'Support administrator workflows'], technologies: ['React 19', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Vite'], repoName: 'Student-Course-Enrollment-System', image: '/project-covers/student-enrollment-final.png', imageAlt: 'Student Course Enrollment dashboard showing academic progress, courses, and enrollment analytics', githubUrl: "https://github.com/rahulsinghkushwaha232/Student-Course-Enrollment-System" },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)] flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[1200/650] overflow-hidden bg-[#080b14]">
        <motion.div
          animate={{ scale: hovered ? 1.045 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            className="object-cover object-top brightness-100 saturate-100 transition-[filter] duration-700 group-hover:brightness-105 group-hover:saturate-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/35 via-background/0 to-transparent pointer-events-none" />
        {!['Netflix-Clone', 'ticket-booking', 'Student-Course-Enrollment-System'].includes(project.repoName) && (
          <div className="absolute inset-2.5 rounded-xl border border-white/10 pointer-events-none" />
        )}
        {/* Date badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {project.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <ul className="space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
              <span className="text-primary">›</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-1 flex gap-2">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold border border-border hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
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
            <Layers className="w-3.5 h-3.5" />
            What I've built
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A showcase of my recent full-stack, cloud, and DevOps projects
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/rahulsinghkushwaha232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border/50 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}





