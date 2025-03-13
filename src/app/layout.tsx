import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/Footer"

const geistSans = Geist({ subsets: ["latin"] })

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "第79回灘校文化祭 weave",
    description:
        "2025年5月2日・5月3日に開催される第79回灘校文化祭「weave」の公式ウェブサイトです。",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
                {children}
                <Footer />
            </body>
        </html>
    )
}
