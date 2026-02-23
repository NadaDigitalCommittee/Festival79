import { HiCalendarDateRange, HiMapPin } from "react-icons/hi2"

import { EventDateDisplay } from "@/components/EventDateDisplay"
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
            <div className="relative col-start-1 col-end-2 flex flex-col justify-between rounded-2xl p-4 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row p-2">
                    <HiCalendarDateRange className="mx-2 my-auto text-4xl" />
                    <div className="my-auto text-3xl font-bold">開催日時</div>
                </h2>
                <EventDateDisplay />
            </div>
            <div className="col-start-1 col-end-2 flex flex-col rounded-2xl p-4 md:col-start-2 md:col-end-3 dark:bg-zinc-700">
                <h2 className="flex h-16 flex-row p-2">
                    <HiMapPin className="mx-2 my-auto text-4xl" />
                    <div className="my-auto text-3xl font-bold">アクセス</div>
                </h2>
                <div className="flex size-full flex-row gap-2 max-xs:flex-col md:max-lg:flex-col">
                    <div className="flex size-full min-h-0 min-w-0 flex-col justify-between gap-4 p-4">
                        <section>
                            <h3 className="text-2xl text-light-secondary dark:text-dark-secondary">
                                灘中学校・灘高等学校
                            </h3>
                            <p className="text-light-secondary dark:text-dark-secondary">
                                兵庫県神戸市 東灘区
                                <br />
                                魚崎北町8丁目5番1号
                            </p>
                        </section>
                        <div className="aspect-[2/1_auto] size-full min-h-0">
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
                    <div className="flex shrink-0 grow-0 flex-col justify-start gap-4 break-keep text-xl max-xs:flex-row max-xs:justify-between max-xs:gap-1 max-xs:text-lg md:max-lg:flex-row md:max-lg:justify-between md:max-lg:gap-1 md:max-lg:text-lg">
                        <div>
                            <div className="font-bold">JR住吉駅</div>
                            <p>
                                徒歩<span className="mx-1 font-bold text-theme">10</span>分
                            </p>
                        </div>
                        <div>
                            <div className="font-bold">阪神魚崎駅</div>
                            <p>
                                徒歩<span className="mx-1 font-bold text-theme">10</span>分
                            </p>
                        </div>
                        <div>
                            <div className="font-bold">阪急岡本駅</div>
                            <p>
                                徒歩<span className="mx-1 font-bold text-theme">25</span>分
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
