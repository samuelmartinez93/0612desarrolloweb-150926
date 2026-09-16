import { Geist_Mono, Syne_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const syneMono = Syne_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", syneMono.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
