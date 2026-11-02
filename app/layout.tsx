import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MouseGlow } from "@/components/mouse-glow"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rahul Singh Kushwaha — Cloud Computing Student",
  description: "Cloud Computing student passionate about DevOps, automation, and scalable cloud infrastructure",
  keywords: ["Rahul Singh Kushwaha", "Software Developer", "Full Stack", "Cloud", "DevOps", "Java", "React", "AWS", "Portfolio"],
  authors: [{ name: "Rahul Singh Kushwaha" }],
  openGraph: { title: "Rahul Singh Kushwaha — Cloud Computing Student", description: "Cloud Computing student passionate about DevOps, automation, and scalable cloud infrastructure", type: "website" },
  twitter: { card: "summary_large_image", title: "Rahul Singh Kushwaha — Cloud Computing Student", description: "Cloud Computing student passionate about DevOps, automation, and scalable cloud infrastructure" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground">
        <MouseGlow />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}


