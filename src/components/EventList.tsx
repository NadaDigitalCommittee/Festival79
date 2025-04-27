import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import { HiChevronDoubleRight, HiHashtag } from "react-icons/hi2"

import type { EventLocation as EventCategory } from "@/data/event"

type Event = {
    logo?: ComponentProps<typeof Image>["src"]
    name: string
    description: ReactNode
}

type Events = Record<EventCategory, Event[]>

const Section = ({ title, children }: { title?: string; children?: ReactNode }) => {
    return (
        <div className="p-2">
            <span className="flex items-center gap-2 text-lg font-bold underline">
                <HiChevronDoubleRight />
                {title}
            </span>
            <div className="px-2">{children}</div>
        </div>
    )
}

const EventData = {
    court: [
        {
            logo: undefined,
            name: "Ms. 灘コンテスト",
            description: (
                <>
                    最高の美女を決める大人気企画！
                    <br />
                    灘に舞い降りた10人の美女の躍動を見逃すな！
                    <br />
                    <span className="text-sm">
                        ※毎年心を奪われてしまうお客様が大変多いです。お気をつけください。
                    </span>
                </>
            ),
        },
        {
            name: "筋肉王",
            description: (
                <>
                    ボディビル界で”QuadFather”(大腿四頭筋の父)の異名を持ち、怪物的に太ももがデカく強かったトム・プラッツ氏は言う。
                    <br />
                    「自分自身と約束するんだ 絶対に中途半端にしない 常にすべてを出しきるんだ」と。
                    <br />
                    筋トレに青春を捧げた灘生の生き様をご覧あれ！
                </>
            ),
        },
        {
            name: "ODORIBA",
            description: (
                <>
                    ODORIBAを見ずして灘校文化祭は語れない。
                    <br />
                    爽やかなイケメンから全力の女装・コスプレまで、様々な灘校生が披露する圧巻のダンスは必見です！
                </>
            ),
        },
        {
            name: "マジックショー",
            description: (
                <>観客の皆さんも巻き込む、一風変わったステージマジックの数々をとくとご覧あれ！！</>
            ),
        },
        {
            name: "書道パフォーマンス",
            description: (
                <>
                    書道同好会による書道パフォーマンスが 5年ぶりに復活！
                    <br />
                    あの大ヒット曲に合わせて、ダイナミックなパフォーマンスをお届けします！
                </>
            ),
        },
    ],
    multimedia: [
        {
            name: "N-1 グランプリ 2025",
            description: (
                <>
                    ボケとツッコミの頂上決戦！知性と笑いの化学反応を見逃すな！
                    <br />
                    笑いのリングに生き残るのは一体誰だ？！
                </>
            ),
        },
        {
            name: "IPPON グランプリ",
            description: (
                <>
                    灘生の瞬発力や独創性、いわゆる大喜利力のみを競うシンプルな戦いが今年も開催！
                    <br />
                    今年の灘校大喜利チャンピオンは誰だ？！灘生のユーモア、とくとご覧あれ！
                </>
            ),
        },
        {
            name: "灘校生格付けチェック",
            description: (
                <>
                    灘校で一番、違いがわかる男は誰だ‼
                    <br />
                    様々なジャンルで一流の品を見分ける、テレビ番組でもおなじみの「芸能人格付けチェック」に灘校生が挑戦。
                </>
            ),
        },
        {
            name: "クイズ",
            description: (
                <>
                    クイズの強豪校達が、今日特別に視聴覚室に集結！！
                    <br />
                    普段画面の向こうでしか見られない超人達の最高峰の知力対決を見逃すな！
                </>
            ),
        },
    ],
    live: [
        {
            name: "Pentamix",
            description: "正真正銘ラストライブ、前部長バンドの意地を見せます",
        },
        {
            name: "diagonal",
            description: "全員サッカー部のバンドです(1人を除く)",
        },
        {
            name: "YUKAI",
            description: "ほな、かましますか",
        },
        {
            name: "linKer.",
            description: (
                <>
                    高三バンドのlinKer.です！
                    <br />
                    メンバー出身地は東京大阪福岡広島、演奏で日本を繋ぎます
                </>
            ),
        },
        {
            name: "Crescent Moon",
            description: "3年目高3バンドのラストライブ、会場ぶち上げます",
        },
        {
            name: "GCS",
            description: "部長バンドです Come and See!!",
        },
        {
            name: "Roflic",
            description: (
                <>
                    初めての文化祭ライブ！
                    <br />
                    ぜひ見に来てください！！
                </>
            ),
        },
        {
            name: "os1",
            description: "苦しい時にそばにいるバンド",
        },
        {
            name: "The Stellar Mercury",
            description: "昼頃の演奏ですが皆さんを盛り上げて行きたいので頑張ります！！",
        },
        {
            name: "Salamander",
            description: (
                <>
                    文化祭初参加です！
                    <br />
                    盛り上がれる超定番の曲持ってきました！
                </>
            ),
        },
        {
            name: "colors'",
            description: (
                <>
                    唯一の81回生バンド！
                    <br />
                    初の文化祭ライブ、見にきてね！
                </>
            ),
        },
    ],
    hall: [
        {
            name: "新中一企画 - 新入生が語る灘校生活は？",
            description: (
                <>
                    部活は？勉強は？灘校の魅力は？
                    <br />
                    新中1のリアルに迫る大人気企画を今年も開催！
                    <br />
                    皆さんも一緒に灘校の生活を覗いてみませんか？
                </>
            ),
        },
        {
            name: "灘校一受けたい授業",
            description: (
                <>
                    この日しか受けられない、灘校の大人気教師による特別授業。
                    <br />
                    灘校の知らない世界が待っている！
                </>
            ),
        },
        {
            name: "NED",
            description: (
                <>
                    灘校生たちがそれぞれの得意分野や研究テーマについての講義を行う新企画。
                    <br />
                    知的好奇心を刺激するひとときをぜひ！
                </>
            ),
        },
        {
            name: "ボクシンク",
            description: (
                <>
                    知の格闘技、ボクシンクが今年も開催！
                    <br />
                    蝶のように論を立て、蜂のように相手を刺す選手たち。
                    <br />
                    ぜひご観戦ください！
                </>
            ),
        },
    ],
    music: [
        {
            name: "クラシック研究部",
            description: (
                <>
                    クラシック研究部(通称クラ研)では、毎年恒例の文化祭コンサートを音楽室で開催しています！
                    <br />
                    あの名曲「英雄」「ラ・カンパネラ」「ラフマニノフピアノ協奏曲第2番」や、Jpopも聴けるかも！？
                    <br />
                    是非、第一グラウンド前ピロティ横の音楽室までお越し下さい！
                </>
            ),
        },
        {
            name: "グリー部",
            description: (
                <>
                    僕たちグリー部は、一人ひとりの声を重ね合わせ、心に響く音楽を届けることを目指し、日々楽しく活動しています。今年の文化祭では、音楽室でコンサートを開催します。
                    <br />
                    学年を超えた仲の良さを活かした、美しいハーモニーにご注目！ぜひお越しください！
                </>
            ),
        },
    ],
    lecture: [
        {
            name: "オセロ対抗戦",
            description: (
                <>
                    今年もやります！
                    <br />
                    灘校オセロサークルNSOCと京大オセロサークルKIJINのオセロ対抗戦！
                    <br />
                    ここではその解説をやってます！
                    <br />
                    オセロの奥深さ味わってみませんか？
                </>
            ),
        },
        {
            name: "物理実験ショー",
            description: (
                <>
                    物理実験ショーでは、液体窒素を使った普段ではなかなか見られない様々な実験ショーを行います。
                    <br />
                    不思議な物理を間近で見てみたいという方は是非お越しください。
                </>
            ),
        },
        {
            name: "パソコン解体",
            description: (
                <>
                    皆さんがいつも使っているパソコン、その中身を覗いたことはありますか？
                    <br />
                    中2の部員がパソコンを解体して解説します！
                </>
            ),
        },
        {
            name: "折り紙作品の制作体験",
            description: (
                <>
                    折り紙作品を、部員と一緒に折ってみませんか？年齢問わず楽しめます。
                    <br />
                    少し難しいですが、家族と、友達と、是非参加してみてください！
                </>
            ),
        },
        {
            name: "数学研究部",
            description: (
                <div className="flex flex-col">
                    <Section title="小学生でもわかる数オリマス目入門">
                        数学オリンピックで頻出のマス目問題の中から、小学生の知識で解けるものを厳選してきました。
                        <br />
                        難しい問題を解く快感を一緒に味わいましょう！
                    </Section>
                    <Section title="「濃度」のおはなし">
                        整数と分数ではどちらが「たくさんある」でしょう？
                        <br />
                        実は「濃度」という考え方によると、これらの個数は同じだというのです。
                        <br />
                        この話題とカントールの対角線論法について、小学生にも分かるように解説していきます。
                    </Section>
                    <Section title="球面幾何学の初歩">
                        学校でよく扱う平面ではなく、球面上での幾何学の不思議な性質について解説します。
                    </Section>
                    <Section title="反転からみる和算の世界">
                        日本人が独自に発達させた「和算」。
                        <br />
                        その美しい問題を反転と呼ばれるお洒落テクニックを使って解いていきましょう。
                        <br />
                        小学生大歓迎です！
                    </Section>
                    <Section title="入試模試解説">
                        灘中入試模試の作問者が問題作成の背景とともに詳しく、わかりやすく解説します。
                    </Section>
                    <Section title="素数の整数問題を解く！">
                        大学受験や競技数学でよく出る整数問題。
                        <br />
                        今回はその中でも「素数」に注目して、さまざまな解法を例題とともに紹介します！
                    </Section>
                </div>
            ),
        },
    ],
    gym: [],
} satisfies Events

export function isEventCategory(v: unknown): v is EventCategory {
    return Object.keys(EventData).indexOf(v as EventCategory) != -1
}

type EventListProp = {
    category: EventCategory
}

export const EventList = ({ category }: EventListProp) => {
    return (
        <ul className="container mx-auto p-0 sm:p-2 md:p-10">
            {EventData[category].map((event: Event) => {
                return (
                    <li key={event.name} className="flex flex-col gap-3 p-6">
                        <div className="flex items-center gap-4">
                            {event.logo ? (
                                <Image
                                    width={32}
                                    height={32}
                                    src={event.logo}
                                    alt={`${event.name}のロゴ`}
                                    className="size-12 rounded-md"
                                />
                            ) : (
                                <div className="flex size-12 items-center justify-center rounded-md">
                                    <HiHashtag className="size-6" />
                                </div>
                            )}
                            <span className="text-xl font-bold">{event.name}</span>
                        </div>
                        <div className="px-4">{event.description}</div>
                    </li>
                )
            })}
        </ul>
    )
}
