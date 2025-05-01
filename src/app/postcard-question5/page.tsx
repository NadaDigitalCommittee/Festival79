import explanationImage from "./explanation.png"
import questionImage from "./question.png"

import { $ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

const ctext = (n: number) => `\\text{\\textcircled{\\scriptsize${n}}}`

export default function PostcardQuestion5() {
    return (
        <PostcardQuestion
            index={5}
            {...{
                questionImage,
                explanationImage,
            }}
            question={
                <p>
                    図のような展開図を組み立てたときの立体の体積は，一辺が{$`1\\,\\mathrm{cm}`}
                    の正四面体の体積の何倍の大きさですか？
                </p>
            }
            explanation={
                <>
                    <p>
                        {$`XP = XQ = XR = 1\\,\\mathrm{cm}, \\angle PXQ = 120^\\circ, \\angle QXR = 90^\\circ, \\angle RXP = 60^\\circ`}
                        を満たす四角錐{$`X\\text{-}PQR`}を考えます．このとき，求める体積は四角錐
                        {$`X\\text{-}PQR`}
                        の体積の{$`3 \\times 4 \\times 5`}倍です．
                    </p>
                    <p>
                        ここで，四角錐{$`X\\text{-}PQR`}
                        は図のような立方体上に描くことができます．（立方体上の適切な辺の中点同士を結ぶことで，
                        {$`60^\\circ, 90^\\circ, 120^\\circ`}を作ることができます．）
                    </p>
                    <p>
                        一辺{$`1\\,\\mathrm{cm}`}の正四面体の体積を{$`${ctext(1)}`}
                        とします．この立方体の体積は，正方形の対角線の長さが{$`2\\,\\mathrm{cm}`}
                        であることから，
                        {$`${ctext(1)} \\times 2 \\times 2 \\times 2 \\times 3 = ${ctext(24)}`}
                        とわかります．また四角錐{$`X\\text{-}PQR`}について，底面を三角形{$`XQR`}
                        として考えると，底面の三角形{$`XQR`}の面積は正方形の{$`\\dfrac{1}{4}`}
                        倍の大きさ，高さはちょうど立方体の半分なので，四角錐{$`X\\text{-}PQR`}
                        の体積は立方体の体積の
                        {$`\\dfrac{1}{4} \\times \\dfrac{1}{2} \\times \\dfrac{1}{3}`}
                        倍，すなわちちょうど{$`${ctext(1)}`}です．よって求める体積は
                        {$`${ctext(1)} \\times  3 \\times 4 \\times 5`}であり，答えるべき値は
                        {$`120`}
                        倍となります．
                    </p>
                </>
            }
        />
    )
}
