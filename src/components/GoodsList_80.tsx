import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"

const GOODS: ComponentProps<typeof GoodsCard>[] = [
    //生徒会企画
    {
        imageSrc: ["/img/thumbs2/001.webp"],
        name: "Tシャツ",
        price: 1200,
        description: (
            <>
                毎年大好評のTシャツ。
                <br />
                文化祭ロゴ入りで、黒・白の2色展開です。
                <br />
                今しか手に入らない一枚となっています。
            </>
        ),
        variants: ["黒 Mサイズ", "黒 Lサイズ", "白 Mサイズ", "白 Lサイズ"],
    },
    {
        imageSrc: ["/img/thumbs2/005.webp"],
        name: "トートバック",
        price: 1500,
        description: (
            <>
                ネイビー地に文化祭ロゴをあしらったトートバッグ。
                <br />
                通学や外出にも使いやすく、文化祭の思い出にぴったりです。
                <br />
                通学や外出にも使いやすく、文化祭の思い出にぴったりです。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/006.webp"],
        name: "保冷ランチバック",
        price: 1200,
        description: (
            <>
                汚れにくい黒色で、普段使いに最適な保冷バッグ。
                <br />
                塾や学校のお弁当入れとしてもおすすめです。
                <br />
                この機会にぜひお買い求めください。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/007.webp"],
        name: "トランプ",
        price: 800,
        description: (
            <>
                灘校生がデザインした絵札とジョーカーを収録。
                <br />
                シックなデザインで、大人の方にもお楽しみいただけるオリジナルトランプです。
                <br />
                記念にぜひお買い求めください。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/008.webp"],
        name: "マスキングテープ",
        price: 250,
        description: (
            <>
                カラフルでかわいい、灘校オリジナルのマスキングテープ。
                <br />
                灘らしさあふれるデザインで、お土産にもおすすめです。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/009.webp"],
        name: "アクリルキーホルダー",
        price: 300,
        description: (
            <>
                文化祭ロゴ入りのアクリルキーホルダー。
                <br />
                リュックやバッグにつけてお楽しみいただけます。
                <br />
                記念品としてぜひお買い求めください。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/010.webp"],
        name: "ロゴシール",
        price: 100,
        description: (
            <>
                Polaris要素をふんだんに盛り込んだデザインのシールです。
                <br />
                ぜひ購入して、散りばめられた数々の灘要素を探してみてください。
            </>
        ),
    },
    //育英会企画
    {
        imageSrc: ["/img/thumbs2/011.webp"],
        name: "灘ベア 80th記念\n(ストラップ付)",
        price: 1000,
        description: (
            <>
                柔道着を着たグレーのクマのチャームポイントは水色の足の裏。
                <br />
                文化祭開催80回目を記念して、80thのサイン入り！
                <br />
                黒とオレンジの2色展開！
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/012.webp"],
        name: "シマエnada\n(ストラップ付)",
        price: 1000,
        description: (
            <>
                文化祭開催以来 初のシマエナガ登場！
                <br />
                シマエナガは雪の妖精と呼ばれ、癒しや幸福の象徴といわれています。
                <br />
                灘校の制帽をかぶった手のひらサイズのシマエナガ、かわいいです！
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/013.webp"],
        name: "ホットマンタオル",
        price: 2500,
        description: (
            <>
                28cm四方のホットマンのタオル！
                <br />
                今年はツツジが咲いている文化祭前の正門が描かれています。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/015.webp"],
        name: "3色ペンJuice up",
        price: 500,
        description: (
            <>
                PILOTの灘校ロゴ入りゲルインキボールペン⭐️
                <br />
                灘校の生徒おすすめ！
                <br />
                なめらかな書き心地に加え1本で色分け使いができる便利さプラス！
            </>
        ),
        variants: ["黒", "シルバー"],
    },
    {
        imageSrc: ["/img/thumbs2/017.webp"],
        name: "ジェットストリーム0.5",
        price: 150,
        description: (
            <>
                持ち手のところに灘校の校章がプリントされたオリジナルデザインになっています！
                <br />
                黒、赤、青の3色をご用意しております。
            </>
        ),
        variants: ["黒", "赤", "青"],
    },
    {
        imageSrc: ["/img/thumbs2/020.webp"],
        name: "フリクションスリム",
        price: 200,
        description: (
            <>
                スリムなフリクションは灘校生にも大人気！何度でも書き消し可能⭐️
                <br />
                利便性が高く細軸でかさばりません❤️
                <br />
                もちろん灘校ロゴ入りです！
            </>
        ),
        variants: ["黒", "赤"],
    },
    {
        imageSrc: ["/img/thumbs2/022.webp"],
        name: "定規",
        price: 300,
        description: (
            <>
                作図に最適？！
                <br />
                15cmのプラスチック製定規です。
                <br />
                中高の校章と学校名が書かれています。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/023.webp"],
        name: "灘校オリジナル付箋",
        price: 200,
        description: (
            <>
                毎年大人気の灘校オリジナル付箋です✨
                <br />
                数量限定、売り切れ御免！
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/024.webp"],
        name: "下敷き",
        price: 200,
        description: (
            <>
                金文字で校章と学校名が印字された下敷きです。
                <br />
                赤と緑の2色展開！
                <br />
                暗記シートとしてもお使いいただけます。
            </>
        ),
        variants: ["赤", "緑"],
    },
    {
        imageSrc: ["/img/thumbs2/026.webp"],
        name: "A4アクリルファイル",
        price: 100,
        description: (
            <>
                普段使いに最適🎶
                <br />
                シンプルなA4サイズのクリアファイルです。
                <br />
                透明、青、緑、黄、ピンクの5種類をご用意しております！
            </>
        ),
        variants: ["透明", "青", "緑", "黄", "ピンク"],
    },
    {
        imageSrc: ["/img/thumbs2/031.webp"],
        name: "ユニアルファンゲル",
        price: 500,
        description: (
            <>
                これで勉強のモチベーションもアップ？！
                <br />
                ホワイト、ネイビー、レッド、ガンメタの4色がございます。
            </>
        ),
        variants: ["ホワイト", "ネイビー", "レッド", "ガンメタ"],
    },
    {
        imageSrc: ["/img/thumbs2/035.webp"],
        name: "クリフターシャーペン",
        price: 100,
        description: (
            <>
                持ち手部分に校章と学校名がデザインされたシャーペン！
                <br />
                黒、オレンジ、黄緑、青の4色展開です。日頃の勉強などにいかがですか？
            </>
        ),
        variants: ["黒", "オレンジ", "黄緑", "青"],
    },
    {
        imageSrc: ["/img/thumbs2/040.webp"],
        name: "蛍光ペン3本組\n灘校章ケース入",
        price: 400,
        description: (
            <>
                太字、細字の両方に対応していて便利！
                <br />
                空、黄、桃色の3色の蛍光ペンセットです。
                <br />
                校章、学校名がプリントされたケースに入っています♪
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/041.webp"],
        name: "合格五角形鉛筆B2本組",
        price: 150,
        description: (
            <>
                合格祈願の五角形鉛筆の2本セット！
                <br />
                「合格」の文字と校章、学校名が金文字で印字されています。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/042.webp"],
        name: "三菱鉛筆ユニスターB6本組",
        price: 500,
        description: (
            <>
                鉛筆の6本セットです。
                <br />
                校章と学校名が金色で印字されています♪
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/053.webp"],
        name: "灘校手拭い",
        price: 300,
        description: (
            <>
                灘中・高の校章と、本校の校是である「精力善用 自他共栄」が描かれた手拭いです。
                <br />
                これから暑くなる季節にぜひいかがですか？
            </>
        ),
    },
    //食品企画
    {
        imageSrc: ["/img/thumbs2/054.webp"],
        name: "灘校カレー(MCC)",
        price: 500,
        description: (
            <>
                国産牛肉を使用したMCC食品のカレーは間違いない美味しさです。
                <br />
                灘校の校門の写真を使用した美しいオリジナルパッケージはお土産にもおすすめです。
                <br />
                文化祭の思い出にいかがでしょうか？
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/055.webp"],
        name: "神戸コーヒー(神戸珈琲)",
        price: 800,
        description: (
            <>
                神戸珈琲のドリップコーヒー、5袋入りです。ハウスブレンドとクラシックブレンドの2種類のお味をご用意しました。
                <br />
                灘校生デザインのほか、いぬづか写真室撮影の写真も入っています。
                <br />
                パッケージデザインとともに、美味しいコーヒーをお楽しみください。
            </>
        ),
        variants: ["ハウスブレンド", "クラシックブレンド"],
    },
    {
        imageSrc: ["/img/thumbs2/057.webp"],
        name: "ホロホロクッキー\n(ショウタニ)",
        price: 1200,
        description: (
            <>
                ケーキハウスショウタニの定番クッキー！
                <br />
                阿波和三盆と深煎りきな粉の2種類をご用意しました。
                <br />
                素敵なオリジナル缶もお楽しみください。
            </>
        ),
        variants: ["和三盆", "きな粉"],
    },
    {
        imageSrc: ["/img/thumbs2/059.webp"],
        name: "抹茶クリームロールせんべい\n(祇園辻利の抹茶使用)",
        price: 750,
        description: (
            <>
                祇園辻利特製の石臼引き抹茶のクリームせんべい。
                <br />
                濃厚なお抹茶と、控えめな甘さのせんべいの食感をお楽しみください。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs2/060.webp"],
        name: "灘校せんべい(梅香堂)",
        price: 650,
        description: (
            <>
                砂糖や小麦粉など原材料にこだわり、昔ながらの製法でつくられたまろやかな甘さのせんべい。
                <br />
                灘中学・高校の焼き印入り！
                <br />
                9枚入りです。
            </>
        ),
    },
]

export const GoodsListB = () => (
    <div>
        <div className="mx-auto flex flex-col justify-center p-10">
            <p className="text-2xl font-bold">
                このページは80回灘校文化祭Weaveのグッズ一覧ページです。
            </p>
        </div>
        <div className="grid max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {GOODS.map((v) => (
                <GoodsCard key={v.name} {...v} />
            ))}
        </div>
    </div>
)

type GoodsCardProps = {
    imageSrc: ComponentProps<typeof GoodsThumb>["src"]
    name: string
    display_name?: ReactNode
    price: number
    description: ReactNode
    variants?: [string, ...string[]] | [...string[], string]
}

const GoodsCard = ({
    imageSrc,
    name,
    price,
    description,
    variants,
    display_name,
}: GoodsCardProps) => (
    <div className="row-span-4 grid grid-rows-subgrid gap-y-4 p-4">
        <div className="aspect-video">
            <GoodsThumb src={imageSrc} alt={`画像無し`} />
        </div>
        <div className="flex justify-between">
            <span className="whitespace-pre-wrap text-xl font-bold">
                {display_name ? display_name : name}
            </span>
            <span className="inline-flex items-center text-lg font-bold">￥{price}</span>
        </div>
        <div>
            <p className="text-light-secondary dark:text-dark-secondary">{description}</p>
        </div>
        <div>
            {variants && <span className="font-bold">種類</span>}
            <div className="flex flex-wrap gap-2 overflow-hidden">
                {variants?.map((v) => (
                    <span
                        className="break-keep rounded-lg bg-blue-400 px-2 py-1 text-sm text-light-background dark:text-dark-background"
                        key={`${name}-${v}`}
                    >
                        {v}
                    </span>
                ))}
            </div>
        </div>
    </div>
)

type GoodsThumbProps = {
    src: ComponentProps<typeof Image>["src"][]
    alt: string
}

const GoodsThumb = ({ src, alt }: GoodsThumbProps) => {
    const len = src.length

    if (len === 1)
        return (
            <Image
                className="size-full object-contain"
                width={450}
                height={300}
                src={src[0]}
                alt={alt}
            />
        )
    else if (len === 2)
        return (
            <div className="flex size-full items-center gap-1">
                <Image
                    className="w-1/2 object-contain"
                    width={450}
                    height={300}
                    src={src[0]}
                    alt={alt}
                />
                <Image
                    className="w-1/2 object-contain"
                    width={450}
                    height={300}
                    src={src[1]}
                    alt={alt}
                />
            </div>
        )
    else return <div className="size-full bg-gray-500" />
}
