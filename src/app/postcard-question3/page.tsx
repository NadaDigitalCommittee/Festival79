import explanationImage from "./explanation.png"
import questionImage from "./question.png"

import { $ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

export default function PostcardQuestion3() {
    return (
        <PostcardQuestion
            index={3}
            {...{
                questionImage,
                explanationImage,
            }}
            question={
                <p>
                    図のように，正方形が二つあります．二本の緑の線の長さが図のようになっているとき，黄色の四角形の面積は何
                    {$`\\mathrm{cm}^2`}ですか？
                </p>
            }
            explanation={
                <>
                    <p>
                        {$`AG = 7\\,\\mathrm{cm}, CE = 2\\,\\mathrm{cm}`}
                        となるように反時計回りに点に名前をつけます．（図参照）
                    </p>
                    <p>
                        四角形{$`AGHD`}（水色），四角形{$`ABFG`}（緑色），四角形{$`DCEH`}
                        （赤色），四角形
                        {$`BCFE`}(黄色)の面積をそれぞれ{$`P, Q, R, S`}とします．これら{$`4`}
                        種類の四角形を{$`2`}個ずつ図のように並べると，これは「一辺
                        {$`7\\,\\mathrm{cm}`}の正方形」から「その正方形と中心が等しい一辺
                        {$`2\\,\\mathrm{cm}`}の正方形」を除いた図形です．したがって，
                        {$`2 \\times (P + Q + R + S) = 7 \\times 7 - 2 \\times 2\\,\\mathrm{cm}^2`}
                        となります．
                    </p>
                    <p>
                        また，求めるべき四角形の面積は簡単な議論で
                        {$`\\dfrac{1}{2} \\times (P + Q + R + S)`}とわかるので，
                        {$`(7 \\times 7 - 2 \\times 2) \\div \\left(2\\times 2\\right) = \\dfrac{45}{4}\\,\\mathrm{cm}^2`}
                        となります．
                    </p>
                </>
            }
        />
    )
}
