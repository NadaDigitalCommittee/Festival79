import type { Metadata } from "next"
import { BIZ_UDPGothic, Montserrat } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/Footer"

const montserrat = Montserrat({
    weight: "variable",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-montserrat",
})

const bizUdpGothic = BIZ_UDPGothic({
    weight: "400",
    display: "swap",
    variable: "--font-bizudpgothic",
})

export const metadata: Metadata = {
    title: "第79回灘校文化祭 weave",
    description:
        "2025年5月2日・5月3日に開催される第79回灘校文化祭「weave」の公式ウェブサイトです。",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ja">
            <body
                className={`${montserrat.variable} ${bizUdpGothic.variable} font-body antialiased`}
            >
                {children}
                <Footer />
            </body>
        </html>
    )
}
