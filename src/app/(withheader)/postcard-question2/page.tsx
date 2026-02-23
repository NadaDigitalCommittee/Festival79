import explanationImage from "./explanation.png"
import questionImage from "./question.png"

import { $ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

export default function PostcardQuestion2() {
    return (
        <PostcardQuestion
            index={2}
            {...{
                questionImage,
                explanationImage,
            }}
            question={
                <p>
                    図のように，{$`AB = AC = 7\\,\\mathrm{cm}`}を満たす二等辺三角形{$`ABC`}
                    があります．今，辺{$`AB`}
                    上に{$`AD = 4\\,\\mathrm{cm}`}となるように点{$`D`}を取ると，
                    {$`\\angle{BDC} = 2\\times\\angle{BCD}`}となりました．この時，{$`CD`}の長さは何
                    {$`\\mathrm{cm}`}ですか？
                </p>
            }
            explanation={
                <p>
                    点{$`A`}から辺{$`BC`}への垂線と線分{$`DC`}との交点を点{$`X`}とすると，
                    {$`BX = CX`}が成り立つので三角形{$`BXC`}は二等辺三角形です．よって，
                    {$`\\angle XBC = \\angle XCB`}から{$`\\angle DXB = 2 \\times \\angle XCB`}
                    がわかります．また，
                    {$`\\angle BDX = \\angle BDC = 2 \\times \\angle DCB = 2 \\times \\angle XCB = \\angle BXD`}
                    なので，三角形{$`BDX`}も二等辺三角形です．したがって，
                    {$`BD = BX = XC = 3\\,\\mathrm{cm}`}です．ここで，直線{$`AX`}は{$`\\angle DAC`}
                    の角の二等分線なので，{$`AD : AC = DX : CX = 4 : 7`}です．したがって，
                    {$`CX = 3\\,\\mathrm{cm}`}とあわせて
                    {$`DC = 3 \\times \\dfrac{4+7}{7} = \\dfrac{33}{7}\\,\\mathrm{cm}`}となります．
                </p>
            }
        />
    )
}
