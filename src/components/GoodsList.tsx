import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"

const GOODS: ComponentProps<typeof GoodsCard>[] = [
    {
        imageSrc: ["/img/goods/001_0.png", "/img/goods/001_1.png"],
        name: "文化祭ロゴTシャツ",
        price: 1500,
        description: (
            <>
                第79回灘校文化祭のテーマ「weave」
                がプリントされた、生徒デザインのコットンTシャツです。
                <br />
                サイズはS,M,L,XLの4種類をご用意しております♪
                もちろん今年限定！文化祭の思い出にいかがですか？
            </>
        ),
        variants: ["Sサイズ", "Mサイズ", "Lサイズ", "XLサイズ"],
    },
    {
        imageSrc: ["/img/goods/005_0.png", "/img/goods/005_1.png"],
        name: "灘ロゴTシャツ",
        price: 1000,
        description: (
            <>
                胸元にNADA、背面には裾に灘とプリントされた、普段使いもしやすいシンプルなデザインのTシャツです。
                <br />
                サイズはS,M,L,LLの4種類をご用意しております!
            </>
        ),
        variants: ["Sサイズ", "Mサイズ", "Lサイズ", "LLサイズ"],
    },
    {
        imageSrc: ["/img/goods/009.png"],
        name: "マフラータオル",
        price: 1000,
        description: (
            <>
                今年度文化祭のロゴと、テーマ「weave」がデザインされたマフラータオルです。
                <br />
                20cm×110cmでお手頃なサイズ！スポーツをする際などにいかがですか?
            </>
        ),
        variants: ["20cm x 110cm"],
    },
    {
        imageSrc: ["/img/goods/010.png"],
        name: "マグカップ",
        price: 1600,
        description: (
            <>
                黒色をベースにロゴなどがデザインされた、シックなデザインのマグカップ！ステンレス製で頑丈です。
            </>
        ),
        variants: ["380ml"],
    },
    {
        imageSrc: ["/img/goods/011.png"],
        name: "トートバッグ",
        price: 1300,
        description: (
            <>
                40×35cmの大容量で使いやすい内ポケット付き！
                灘校グッズを買いすぎてしまっても安心です！
                <br />
                こちらも生徒デザインの商品で、黒地に白のロゴが映えるシックな印象の一品です。
            </>
        ),
        variants: ["40cm x 35cm"],
    },
    {
        imageSrc: ["/img/goods/012.png"],
        name: "A4クリアファイル2枚組",
        price: 400,
        description: (
            <>
                生徒がデザインしたもので、第79回灘校文化祭のロゴとテーマが描かれた2色組の商品です！
                <br />
                ぜひおみやげにどうぞ！
            </>
        ),
    },
    {
        imageSrc: ["/img/goods/013.png"],
        name: "アクリルキーホルダー",
        price: 300,
        description: (
            <>
                今年新作のアクリルキーホルダー！ロゴとテーマがプリントされています。
                <br />
                手頃なサイズ何でリュックやカバンのキーホルダーにいかがですか？
            </>
        ),
        variants: ["7cm x 4cm"],
    },
    {
        imageSrc: ["/img/goods/014_0.png", "/img/goods/015_0.png"],
        name: "弁当箱",
        price: 2000,
        description: (
            <>
                今年度退職された書道の倉橋先生が書かれた「灘」の文字と矢絣模様が描かれたお弁当箱です。
                <br />
                黒とオレンジの2色展開！中にはしきりも入っています。
            </>
        ),
        variants: ["黒", "オレンジ"],
    },
    {
        imageSrc: ["/img/goods/016.png"],
        name: "風呂敷",
        price: 2000,
        description: (
            <>
                京都の染めの老舗「四季彩」の特製で、紺色の生地に白で校名と校歌の歌詞が書かれています！
                <br />
                惜しまれつつも2024年度で退任される本校書道教諭、倉橋奇艸先生の新作で、弁当箱とともに現役最後の灘校グッズ作品です♪
            </>
        ),
    },
    {
        imageSrc: ["/img/goods/017.png"],
        name: "アクリルオブジェ",
        price: 550,
        description: (
            <>
                灘校の正門の風景がデザインされた、生徒デザインのアクリルオブジェです。
                <br />
                今年度の新作で縁起のいい五角形！合格祈願にもぴったりです。
            </>
        ),
    },
    {
        imageSrc: ["/img/goods/018.png"],
        name: "ホットマンタオル",
        price: 3000,
        description: (
            <>
                28cm四方のホットマンタオル！青空を背景に桜が咲いている、春の灘校正門が描かれています。
                <br />
                縁の色はピンクとグリーンの2色がございます♪
            </>
        ),
        variants: ["ピンク", "グリーン"],
    },
    {
        imageSrc: ["/img/goods/019.png"],
        name: "パスケース",
        price: 1500,
        description: (
            <>
                便利なフックとリール付き！灘中・高の校章が描かれた、普段使いしやすい黒のパスケースです。
                <br />
                カードや定期券入れにおすすめ！
            </>
        ),
    },
]

export const GoodsList = () => (
    <div className="grid max-w-60 grid-cols-1 sm:max-w-full sm:grid-cols-2 lg:grid-cols-3">
        {GOODS.map((v) => (
            <GoodsCard key={v.name} {...v} />
        ))}
    </div>
)

type GoodsCardProps = {
    imageSrc: ComponentProps<typeof GoodsThumb>["src"]
    name: string
    price: number
    description: ReactNode
    variants?: [string, ...string[]] | [...string[], string]
}

const GoodsCard = ({ imageSrc, name, price, description, variants }: GoodsCardProps) => (
    <div className="row-span-4 grid grid-rows-subgrid gap-y-4 p-4">
        <div className="aspect-video">
            <GoodsThumb src={imageSrc} alt={`${name}のサムネイル画像`} />
        </div>
        <div className="flex justify-between">
            <span className="text-xl font-bold text-light-primary dark:text-dark-primary">
                {name}
            </span>
            <span className="text-xl font-bold text-light-primary dark:text-dark-primary">
                ￥{price}
            </span>
        </div>
        <div className="overflow-hidden">
            <p className="text-light-secondary dark:text-dark-secondary">{description}</p>
        </div>
        <div>
            {variants && (
                <span className="font-bold text-light-primary dark:text-dark-primary">種類</span>
            )}
            <div className="flex flex-wrap gap-2 overflow-hidden">
                {variants?.map((v) => (
                    <span
                        className="break-keep rounded-lg bg-orange-600 px-2 py-1 text-sm text-light-background dark:text-dark-background"
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
                className="size-full object-cover"
                width={600}
                height={400}
                src={src[0]}
                alt={alt}
            />
        )
    else if (len === 2)
        return (
            <div className="flex size-full items-center gap-1">
                <Image
                    className="w-1/2 object-cover"
                    width={600}
                    height={400}
                    src={src[0]}
                    alt={alt}
                />
                <Image
                    className="w-1/2 object-cover"
                    width={600}
                    height={400}
                    src={src[1]}
                    alt={alt}
                />
            </div>
        )
    else return <div className="size-full bg-gray-500" />
}
