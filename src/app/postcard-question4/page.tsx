import explanationImage from "./explanation.png"
import questionImage from "./question.png"

import { $, $$ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

export default function PostcardQuestion4() {
    return (
        <PostcardQuestion
            index={4}
            {...{
                questionImage,
                explanationImage,
            }}
            question={
                <p>
                    図のように，四角形{$`ABCD`}に円{$`O`}が内接しています．
                    {$`AO = 2\\,\\mathrm{cm}, CO = 3\\,\\mathrm{cm}, AB = 5\\,\\mathrm{cm}, CD = 7\\,\\mathrm{cm}`}
                    の時，辺{$`BC`}は何{$`\\mathrm{cm}`}ですか？
                </p>
            }
            explanation={
                <>
                    <p>
                        点{$`O`}から線分{$`AB, BC, CD, DA`}への垂線の足をそれぞれ点{$`P, Q, R, S`}
                        とします．
                        {$`\\angle OPB = \\angle OQB = 90^\\circ, OB = OB, OP = OQ`}より，三角形
                        {$`OPB`}と三角形{$`OQB`}は合同です．よって対応する辺の長さから{$`BP = BQ`}
                        が，対応する角度から{$`\\angle BOP = \\angle BOQ`}がわかります．
                    </p>
                    <p>
                        同様にして，以下の式が成り立ちます．
                        {$$`
                            CQ = CR,\\quad DR = DS,\\quad AS = AP,\\quad \\angle COQ = \\angle COR,\\quad \\angle DOR = \\angle DOS,\\quad \\angle AOS = \\angle AOP
                        `}
                        これらから，
                        {$$`
                            BP + CR + DR + AP = BQ + CQ + DS + AS
                        `}
                        すなわち，
                        {$$`
                            AB + CD = BC + DA \\tag{1}
                        `}
                        が導かれます．
                    </p>
                    <p>
                        また，
                        {$`\\angle BOP + \\angle COR + \\angle DOR + \\angle AOP = \\angle BOQ + \\angle COQ + \\angle DOS + \\angle AOS`}
                        から，{$`\\angle AOB + \\angle COD = \\angle BOC + \\angle DOA`}
                        がわかります．さらに，
                        {$`(\\angle AOB + \\angle COD) + (\\angle BOC + \\angle DOA) = 360^\\circ`}
                        であるので，{$`\\angle AOB + \\angle COD = 180^\\circ`}が得られます．
                    </p>
                    <p>
                        したがって，三角形{$`AOB`}と三角形{$`COD`}の面積の比は
                        {$`OA \\times OB : OC \\times OD = 2 \\times OB : 3 \\times OD`}
                        に等しいことがわかります．また，三角形{$`OAB`}の底辺を辺{$`AB`}，三角形
                        {$`OCD`}の底辺を辺{$`CD`}
                        として考えると，高さが等しいことからこれらの面積比は{$`AB : CD`}と等しく，
                        {$`5 : 7`}となります．したがって，{$`2 \\times OB : 3 \\times OD = 5 : 7`}
                        が成り立ち，{$`OB : OD = 15 : 14`}とわかります．
                    </p>
                    <p>
                        同様に三角形{$`OBC`}と三角形{$`ODA`}の面積比についても，
                        {$`OB \\times OC : OD \\times OA = BC : DA`}が成り立ちます．今，
                        {$`OB : OD = 15 : 14`}なので
                        {$`OB \\times OC : OD \\times OA = 15 \\times 3 : 14 \\times 2 = 45 : 28`}
                        です．また{$`(1)`}より，{$`BC + DA = AB + CD = 5 + 7 = 12\\,\\mathrm{cm}`}
                        なので，
                        {$`BC : DA = 45 : 28`}とあわせて
                        {$`BC = 12 \\times \\dfrac{45}{45 + 28} = \\dfrac{600}{73}\\,\\mathrm{cm}`}
                        と求まります．
                    </p>
                </>
            }
        />
    )
}
