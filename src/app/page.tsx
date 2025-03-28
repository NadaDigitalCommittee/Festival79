import { HiCalendarDateRange, HiMapPin } from "react-icons/hi2"

import { LogoAnimation } from "@/components/LogoAnimation"
import { WeaveLogotype } from "@/components/WeaveLogotype"

export default function Home() {
    return (
        <main className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-14 p-10 md:grid-cols-2">
            <div className="col-start-1 col-end-2 flex justify-center rounded-xl">
                <div className="size-96">
                    <LogoAnimation className="drop-shadow-lg" />
                </div>
            </div>
            <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3">
                <div className="flex size-full flex-col justify-center gap-4">
                    <h1 className="break-keep p-2 text-5xl font-bold dark:text-theme">
                        第79回 <wbr />
                        灘校文化祭
                    </h1>
                    <WeaveLogotype className="max-w-80 pl-2 text-zinc-900 dark:text-[#dad8e5]" />
                    <section className="pt-4 text-xl leading-10 text-[#414145] dark:text-[#c2c0cf]">
                        <p>「weave」には、「織り成す」という意味があります。</p>
                        <p>
                            灘校生の熱中するものへの思いや努力それぞれを一本一本の糸にたとえ、灘校文化祭の数多くの場面でその糸を織り成し、華々しく表現してほしい。
                        </p>
                        <p>そんな思いが込められています。</p>
                    </section>
                </div>
            </div>
            <div className="col-start-1 col-end-2 flex flex-col justify-between rounded-2xl p-6 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row dark:text-[#dad8e5]">
                    <HiCalendarDateRange className="mx-2 my-auto text-4xl" />
                    <div className="my-auto text-3xl font-bold">開催日時</div>
                </h2>
                <span className="flex items-center gap-3 text-3xl font-bold dark:text-[#c2c0cf]">
                    <span className="text-4xl">5/2</span> ~<span className="text-4xl">5/3</span>
                </span>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-8">
                        <span className="text-2xl font-bold dark:text-[#c2c0cf]">1日目</span>
                        <span className="text-4xl dark:text-[#c2c0cf]">9:00 ~ XX:XX</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-2xl font-bold dark:text-[#c2c0cf]">2日目</span>
                        <span className="text-4xl dark:text-[#c2c0cf]">9:00 ~ XX:XX</span>
                    </div>
                    <span className="dark:text-[#c2c0cf]">※開場時間前の来場はご遠慮ください</span>
                </div>
            </div>
            <div className="col-start-1 col-end-2 flex flex-col rounded-2xl p-6 md:col-start-2 md:col-end-3 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row dark:text-[#dad8e5]">
                    <HiMapPin className="mx-2 my-auto text-4xl" />
                    <div className="my-auto text-3xl font-bold">アクセス</div>
                </h2>
                <div className="flex p-4">
                    <div className="aspect-[2/1] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.430097231349!2d135.26561937600025!3d34.71955168220066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008cfd8440bcc9%3A0x526d26ccfad6f4df!2z54GY5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1713313991974!5m2!1sja!2sjp"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="size-full rounded-lg"
                        ></iframe>
                    </div>
                </div>
                <h3 className="p-2 text-2xl text-[#414145] dark:text-[#c2c0cf]">
                    灘中学校・灘高等学校
                </h3>
                <p className="ml-2 text-[#414145] dark:text-[#c2c0cf]">
                    兵庫県神戸市 東灘区 魚崎北町8丁目5番1号
                </p>
            </div>
        </main>
    )
}
