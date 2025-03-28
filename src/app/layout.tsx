import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"

import "./globals.css"

// import { Footer } from "@/components/Footer"

const geistMono = Geist_Mono({
    weight: "variable",
    display: "swap",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "第79回灘校文化祭 weave",
    description:
        "2025年5月2日・5月3日に開催される第79回灘校文化祭「weave」の公式ウェブサイトです。",
    metadataBase: new URL("https://fest79.nada-sc.jp"),
    twitter: {
        card: "summary",
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ja">
            <body className={`${geistMono.className} antialiased`}>
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}
