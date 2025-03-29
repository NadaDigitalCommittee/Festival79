import { HiCalendarDateRange, HiMapPin } from "react-icons/hi2"

import { LogoAnimation } from "@/components/LogoAnimation"
import { WeaveLogotype } from "@/components/WeaveLogotype"

export default function Home() {
    return (
        <main className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-14 p-4 md:grid-cols-2 md:p-10">
            <div className="col-start-1 col-end-2 flex justify-center rounded-xl">
                <div className="size-96">
                    <LogoAnimation className="drop-shadow-lg" />
                </div>
            </div>
            <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3">
                <div className="flex size-full flex-col justify-center gap-4">
                    <h1 className="break-keep p-2 text-5xl font-bold text-light-primary dark:text-theme">
                        第79回 <wbr />
                        灘校文化祭
                    </h1>
                    <WeaveLogotype className="max-w-80 pl-2 text-theme dark:text-dark-primary" />
                    <section className="pt-4 text-xl leading-8 text-light-secondary md:leading-10 dark:text-dark-secondary">
                        <p>「weave」には、「織り成す」という意味があります。</p>
                        <p>
                            灘校生の熱中するものへの思いや努力それぞれを一本一本の糸にたとえ、灘校文化祭の数多くの場面でその糸を織り成し、華々しく表現してほしい。
                        </p>
                        <p>そんな思いが込められています。</p>
                    </section>
                </div>
            </div>
            <div className="col-start-1 col-end-2 flex flex-col justify-between rounded-2xl p-4 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row p-2 dark:text-dark-primary">
                    <HiCalendarDateRange className="mx-2 my-auto text-4xl" />
                    <div className="my-auto text-3xl font-bold">開催日時</div>
                </h2>
                <div className="flex size-full flex-col justify-between p-4">
                    <div className="flex h-16 items-center gap-2 font-date md:gap-4 lg:gap-6 dark:text-dark-secondary">
                        <div className="flex items-center">
                            <span className="text-5xl tracking-widest">5/2</span>
                            <span className="text-3xl [text-orientation:sideways] [writing-mode:vertical-rl]">
                                FRI
                            </span>
                        </div>
                        <span className="text-3xl">-</span>
                        <div className="flex items-center">
                            <span className="text-5xl tracking-widest">5/3</span>
                            <span className="text-3xl [text-orientation:sideways] [writing-mode:vertical-rl]">
                                SAT
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] grid-rows-[1fr_1fr_max-content] gap-8">
                        <div className="col-span-2 grid grid-cols-subgrid items-center gap-8">
                            <span className="text-right text-2xl font-bold dark:text-dark-secondary">
                                1日目
                            </span>
                            <span className="text-4xl dark:text-dark-secondary">9:00 - XX:XX</span>
                        </div>
                        <div className="col-span-2 grid grid-cols-subgrid items-center gap-8">
                            <span className="text-right text-2xl font-bold dark:text-dark-secondary">
                                2日目
                            </span>
                            <span className="text-4xl dark:text-dark-secondary">9:00 - XX:XX</span>
                        </div>
                    </div>
                    <p className="col-span-2 text-sm sm:text-base dark:text-dark-secondary">
                        ※開場時間前の来場はご遠慮ください
                    </p>
                </div>
            </div>
            <div className="col-start-1 col-end-2 flex flex-col rounded-2xl p-4 md:col-start-2 md:col-end-3 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row p-2 dark:text-dark-primary">
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
                            title="灘中学校・灘高等学校のGoogleマップ"
                        ></iframe>
                    </div>
                </div>
                <h3 className="p-2 text-2xl text-light-secondary dark:text-dark-secondary">
                    灘中学校・灘高等学校
                </h3>
                <p className="ml-2 text-light-secondary dark:text-dark-secondary">
                    兵庫県神戸市 東灘区 魚崎北町8丁目5番1号
                </p>
            </div>
        </main>
    )
}
