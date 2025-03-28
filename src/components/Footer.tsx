import { SiFacebook, SiInstagram, SiLine, SiX, SiYoutube } from "react-icons/si"

import { WeaveLogo } from "./WeaveLogo"
import { WeaveLogotype } from "./WeaveLogotype"

export const Footer = () => (
    <footer className="flex flex-col justify-center gap-8 border-t border-[#c2c0cf] bg-[#242529] p-8 text-neutral-100 md:flex-row md:justify-between md:px-16">
        <div className="flex justify-center gap-2">
            <WeaveLogo className="my-auto size-full max-h-24 max-w-24" />
            <div className="flex w-min flex-col justify-center gap-3">
                <span className="text-nowrap text-xs sm:text-sm">79th Nada School Festival</span>
                <WeaveLogotype className="box-border w-full border-b border-current pb-1" />
            </div>
        </div>
        <section className="flex flex-col gap-8">
            <p className="mx-auto text-3xl">Follow us</p>
            <ul className="flex items-center justify-center gap-4 sm:gap-6 [&>li>a>svg]:size-full [&>li]:inline-block [&>li]:size-9 [&>li]:list-none sm:[&>li]:size-10">
                <li>
                    <a
                        href="https://www.youtube.com/@nada_schoolfestival"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiYoutube aria-label="YouTubeチャンネル" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/nada_festival" //
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiX aria-label="Xアカウント" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/NadaSchoolFestival"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiFacebook aria-label="Facebookアカウント" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://page.line.me/nada_festival"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiLine aria-label="LINE公式アカウント" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/nada_schoolfestival"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiInstagram aria-label="Instagramアカウント" />
                    </a>
                </li>
            </ul>
        </section>
    </footer>
)
