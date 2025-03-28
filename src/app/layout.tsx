import type { Metadata } from "next"
import { BIZ_UDPGothic, Montserrat, PT_Sans_Narrow } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

// import { Footer } from "@/components/Footer"

const montserrat = Montserrat({
    weight: "variable",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-montserrat",
})

const bizUdpGothic = BIZ_UDPGothic({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-bizudpgothic",
})

const ptSansNarrow = PT_Sans_Narrow({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    variable: "--font-ptsansnarrow",
})

const udevGothic = localFont({
    src: "./UDEVGothicHSJPDOC-Regular.ttf",
    display: "swap",
    variable: "--font-udevgothic",
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
            <body
                className={`${montserrat.variable} ${bizUdpGothic.variable} ${ptSansNarrow.variable} ${udevGothic.variable} flex flex-col gap-10 font-body antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
