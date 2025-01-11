import "@/app/globals.css"
import { Space_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Rohit.cpp - Portfolio",
    template: "%s | Rohit.cpp"
  },
  description: "Personal portfolio showcasing projects, notes and blogs about Computer Science, Web Development, and AI/ML.",
  keywords: ["Computer Science", "Web Development", "AI/ML", "Portfolio", "Student"],
  authors: [{ name: "Rohit" }],
  creator: "Rohit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohit-portfolio.vercel.app",
    title: "Rohit.cpp - Portfolio",
    description: "Personal portfolio showcasing projects, notes and blogs about Computer Science, Web Development, and AI/ML.",
    siteName: "Rohit.cpp Portfolio",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Rohit.cpp Portfolio'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit.cpp - Portfolio",
    description: "Personal portfolio showcasing projects, notes and blogs about Computer Science, Web Development, and AI/ML.",
    creator: "@rohit_cpp"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://rohit-portfolio.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} font-mono antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            {children}
          </ErrorBoundary>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

