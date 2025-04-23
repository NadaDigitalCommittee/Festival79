import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"

const GOODS: ComponentProps<typeof GoodsCard>[] = [
    {
        imageSrc: ["/img/thumbs/001_0.webp", "/img/thumbs/001_1.webp"],
        name: "文化祭ロゴTシャツ",
        price: 1500,
        description: (
            <>
                第79回灘校文化祭のテーマ「weave」がプリントされた、生徒デザインのコットンTシャツです。
                <br />
                サイズはS,M,L,XLの4種類をご用意しております♪
                <br />
                もちろん今年限定！文化祭の思い出にいかがですか？
            </>
        ),
        variants: ["Sサイズ", "Mサイズ", "Lサイズ", "XLサイズ"],
    },
    {
        imageSrc: ["/img/thumbs/005_0.webp", "/img/thumbs/005_1.webp"],
        name: "灘ロゴTシャツ",
        price: 1000,
        description: (
            <>
                胸元にNADA、背面には裾に灘とプリントされた、普段使いもしやすいシンプルなデザインのTシャツです。
                <br />
                サイズはS,M,L,LLの4種類をご用意しております!
                <br />
                (ポリエステル生地)
            </>
        ),
        variants: ["Sサイズ", "Mサイズ", "Lサイズ", "LLサイズ"],
    },
    {
        imageSrc: ["/img/thumbs/009.webp"],
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
        imageSrc: ["/img/thumbs/010.webp"],
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
        imageSrc: ["/img/thumbs/011.webp"],
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
        imageSrc: ["/img/thumbs/012.webp"],
        name: "A4クリアファイル2枚組",
        display_name: (
            <span className="break-keep">
                A4クリア
                <wbr />
                ファイル
                <wbr />
                2枚組
            </span>
        ),
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
        imageSrc: ["/img/thumbs/013.webp"],
        name: "アクリルキーホルダー",
        price: 300,
        description: (
            <>
                今年新作のアクリルキーホルダー！ロゴとテーマがプリントされています。
                <br />
                手頃なサイズなのでリュックやカバンのキーホルダーにいかがですか？
            </>
        ),
        variants: ["7cm x 4cm"],
    },
    {
        imageSrc: ["/img/thumbs/014_0.webp", "/img/thumbs/015_0.webp"],
        name: "弁当箱",
        price: 2000,
        description: (
            <>
                2024年度退職された書道の倉橋先生が書かれた「灘」の文字と矢絣模様が描かれた生徒デザインのお弁当箱です。
                <br />
                黒とオレンジの2色展開！
                <br />
                中にはしきりも入っています。
            </>
        ),
        variants: ["黒", "オレンジ"],
    },
    {
        imageSrc: ["/img/thumbs/016.webp"],
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
        imageSrc: ["/img/thumbs/017.webp"],
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
        imageSrc: ["/img/thumbs/018.webp"],
        name: "ホットマンタオル",
        price: 3000,
        description: (
            <>
                28cm四方のホットマンタオル！青空を背景に桜が咲いている、春の灘校正門が描かれています。
                <br />
                縁の色はグリーンとピンクの2色がございます♪
            </>
        ),
        variants: ["グリーン", "ピンク"],
    },
    {
        imageSrc: ["/img/thumbs/019.webp"],
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
    {
        imageSrc: ["/img/thumbs/020-022.webp"],
        name: "灘ベア",
        price: 1000,
        description: (
            <>
                例年より大きめサイズの灘ベア！白いくまちゃんが、胸元には灘校校章、背面には灘中・高の校章が入ったガウンを羽織っています♪
                <br />
                カラーはロイヤルブルー、えんじ、緑の3色がございます。
            </>
        ),
        variants: ["ロイヤルブルー", "えんじ", "緑"],
    },
    {
        imageSrc: ["/img/thumbs/023.webp"],
        name: "灘校手ぬぐい",
        price: 300,
        description: (
            <>
                灘中・高の校章と、本校の校是である「精力善用 自他共栄」が描かれた手拭いです。
                <br />
                これからの暑くなる季節にぜひいかがですか？
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/024-027.webp"],
        name: "ジェットストリーム4+1",
        price: 1000,
        description: (
            <>
                シャーペンとボールペンがセットになった多機能ペン！持ち手のところに灘校の校章がプリントされたオリジナルデザインになっています♪
                <br />
                ブラック、ブラッドオレンジ、ティールブルー、ペールグリーンの4色をご用意しております。
            </>
        ),
        variants: ["ブラック", "ブラッドオレンジ", "ティールブルー", "ペールグリーン"],
    },
    {
        imageSrc: ["/img/thumbs/028-031.webp"],
        name: "ユニアルファゲル\n(シャーペン)",
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
        imageSrc: ["/img/thumbs/032-035.webp"],
        name: "クリフターシャーペン",
        price: 100,
        description: (
            <>
                持ち手部分に校章と学校名がデザインされたシャーペン！
                <br />
                黒、白オレンジ、白黄緑、白青の4色展開です。日頃の勉強などにいかがですか？
            </>
        ),
        variants: ["黒", "白オレンジ", "白黄緑", "白青"],
    },
    {
        imageSrc: ["/img/thumbs/036-038.webp"],
        name: "ユニボールシグノ\n(単色ボールペン0.5)",
        price: 150,
        description: (
            <>
                黒、赤、青の単色ボールペンです。
                <br />
                持ち手には校章と学校名が書かれています♪
                <br />
                普段使いにどうぞ！
            </>
        ),
        variants: ["黒", "赤", "青"],
    },
    {
        imageSrc: ["/img/thumbs/039.webp"],
        name: "蛍光ペン3本組\nケース入り",
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
        imageSrc: ["/img/thumbs/040.webp"],
        name: "三菱鉛筆ユニスターB6本組",
        price: 400,
        description: (
            <>
                鉛筆の6本セットです。
                <br />
                校章と学校名が金色で印字されています♪
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/041.webp"],
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
        imageSrc: ["/img/thumbs/042-045.webp"],
        name: "消しゴムくるっと",
        price: 250,
        description: (
            <>
                ケースに入っていて、回すだけで出てくる！
                <br />
                六角形状で手にフィットしてとても使いやすい消しゴムです。
            </>
        ),
        variants: ["グリーン", "ブルー", "イエロー", "パープル"],
    },
    {
        imageSrc: ["/img/thumbs/046-047.webp"],
        name: "シャーペン芯",
        price: 200,
        description: (
            <>
                シャーペンの替え芯です。
                <br />
                HBとBの2種類の濃さがございます。
                <br />
                ケースには本校の校章のデザイン入り！
            </>
        ),
        variants: ["HB", "B"],
    },
    {
        imageSrc: ["/img/thumbs/048.webp"],
        name: "修正テープ\n(詰め替え型)",
        price: 400,
        description: (
            <>
                今年度初登場の修正テープ！
                <br />
                シンプルなデザインで詰め替えも可能なので、長く使っていただけます。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/049.webp"],
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
        imageSrc: ["/img/thumbs/050_0.webp", "/img/thumbs/050_1.webp"],
        name: "筆箱",
        price: 1300,
        description: (
            <>
                生徒デザインの筆箱♪
                <br />
                チャックで開け閉めできてポケットもたくさんある大容量サイズ！
                <br />
                グッズの定規やシャーペンと合わせていかがですか？
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/051-052.webp"],
        name: "ノート",
        price: 250,
        description: (
            <>
                使いやすい大学ノート！
                <br />
                オレンジ色のA罫と水色のB罫の2種類をご用意しております。
                <br />
                表紙には校章などがデザインされています♪
            </>
        ),
        variants: ["A罫", "B罫"],
    },
    {
        imageSrc: ["/img/thumbs/053.webp"],
        name: "柔道着付箋",
        price: 250,
        description: (
            <>
                灘校といえば柔道！
                <br />
                柔道着をモチーフにした付箋です。
                <br />
                胸元部分には「灘」の文字、帯には校是である「精力善用 自他共栄」が描かれています。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/054-055.webp"],
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
        imageSrc: ["/img/thumbs/056-060.webp"],
        name: "A4クリアファイル無地",
        price: 100,
        description: (
            <>
                普段使いに最適♪
                <br />
                シンプルなA4サイズのクリアファイルです。
                <br />
                透明、青、緑、黄、ピンクの5種類をご用意しております！
            </>
        ),
        variants: ["透明", "青", "緑", "黄", "ピンク"],
    },
    {
        imageSrc: ["/img/thumbs/061_0.webp", "/img/thumbs/061_1.webp"],
        name: "A5クリアファイル\n(ホットマン柄)",
        price: 200,
        description: (
            <>
                A5サイズのクリアファイルです。
                <br />
                表面にはホットマンタオルと同じ春の灘校正門の風景が、裏面には紺色と白でデザインされています！
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/062-065.webp"],
        name: "エコバッグ",
        price: 600,
        description: (
            <>
                グッズをたくさん買っても大丈夫！
                <br />
                普段のお買い物にも使っていただけるエコバッグです♪
                <br />
                ブラックとネイビー、レッド、ブラウンの4色がございます。
            </>
        ),
        variants: ["ブラック", "ネイビー", "レッド", "ブラウン"],
    },
    {
        imageSrc: ["/img/thumbs/066.webp"],
        name: "カプセルトイ",
        display_name: (
            <span className="break-keep">
                灘校オリジナル
                <wbr />
                カプセルトイ
            </span>
        ),
        price: 300,
        description: (
            <>
                今年の灘校文化祭はカプセルトイマシンが登場！
                <br />
                ロゴや校内の写真がデザインされたガラスマグネット・缶マグネット(特製ホログラムシール付き)がゲットできます！
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/067_0.webp", "/img/thumbs/067_1.webp"],
        name: "サクラサク合格祈願セット",
        price: 550,
        description: (
            <>
                頑張れ受験生！合格祈願セット！
                <br />
                縁起のいい五角形の鉛筆や缶バッジ、クリアファイルとノート、ポストカードもセットになっています♪
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/068.webp"],
        name: "灘校煎餅",
        price: 650,
        description: (
            <>
                中・高の校章の焼き印が入ったオリジナル煎餅です！
                <br />
                12枚入りです。文化祭記念のお土産としていかがですか？
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/069.webp"],
        name: "灘校三笠",
        price: 550,
        description: (
            <>
                2個入りの灘校三笠です。
                <br />
                中学・高校の校章の焼き印が押されたここだけのオリジナルお菓子！
                <br />
                お土産としてもオススメです。
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/070.webp"],
        name: "灘校ミント",
        price: 350,
        description: (
            <>
                気分スッキリタブレット！
                <br />
                生徒デザインの、校章があしらわれた黒のケースに入っています。
                <br />
                勉強中の眠気覚ましなどにピッタリです♪
            </>
        ),
    },
    {
        imageSrc: ["/img/thumbs/071-072.webp"],
        name: "灘校紅茶",
        price: 1000,
        description: (
            <>
                神戸紅茶の灘校ブレンドティーです！
                <br />
                こちらの缶も生徒がデザインしたもので、紅茶を飲み終えたあとも、入れ物などで活躍できるようなオシャレな缶です♪
            </>
        ),
        variants: ["オレンジアールグレイ", "マスカット"],
    },
    {
        imageSrc: ["/img/thumbs/073-074.webp"],
        name: "灘校バームクーヘン",
        price: 1250,
        description: (
            <>
                オリジナルデザインの箱に入ったバームクーヘンです。
                <br />
                箱は青と赤の2種類がございます。
            </>
        ),
        variants: ["青", "赤"],
    },
]

export const GoodsList = () => (
    <div className="grid max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {GOODS.map((v) => (
            <GoodsCard key={v.name} {...v} />
        ))}
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
            <GoodsThumb src={imageSrc} alt={`${name}のサムネイル画像`} />
        </div>
        <div className="flex justify-between">
            <span className="whitespace-pre-wrap text-xl font-bold text-light-primary dark:text-dark-primary">
                {display_name ? display_name : name}
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
