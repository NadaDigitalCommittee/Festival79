import explanationImage from "./explanation.png"
import questionImage from "./question.png"

import { $ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

export default function PostcardQuestion1() {
    return (
        <PostcardQuestion
            index={1}
            {...{
                questionImage,
                explanationImage,
            }}
            question={
                <p>
                    図のように，正五角形の中に正方形があります．図の角度は何度ですか？ただし，同じ色の辺は同じ長さです．
                </p>
            }
            explanation={
                <>
                    <p>
                        正五角形の頂点を左下の頂点から反時計回りに{$`A,B,C,D,E`}
                        とし，正方形の頂点を左下の頂点から反時計回りに{$`F,G,H,I`}
                        と名付けます．そして，半直線{$`AE`}上にあり{$`FP=FG`}
                        として与えられている点を{$`P`}とします．
                    </p>
                    <p>
                        今，一辺が{$`CE`}の正方形{$`CEJK`}を直線{$`CE`}に対して点{$`A`}
                        と同じ側につくることを考えます．この時，{$`IH`}と{$`EC`}が平行なことから，
                        {$`HG:CK=IH:EC=DH:HC`}とわかり，これと{$`HG /\!/ CK`}より三角形{$`DHG`}
                        と三角形{$`DCK`}は相似とわかります．したがって，点{$`D,G,K`}
                        は同一直線上にあり，半直線{$`EA`}と半直線{$`CB`}の交点を{$`L`}とすると
                        {$`DL:CK=LG:GC`}となります．
                    </p>
                    <p>
                        ここで，半直線{$`AE`}と半直線{$`CD`}の交点を{$`M`}とすると，{$`GP /\\!/ CM`}
                        から
                        {$`LG:GC=LP:PM`}です．また，{$`CK=EC=ME=MD`}であるので，{$`DL:MD=LG:GC`}
                        です．よってこれらから{$`DL:DM=LG:GC=LP:PM`}であり，直線{$`DP`}は
                        {$`\\angle MDP`}の角の二等分線となります．よって
                        {$`\\angle MDL = 180^\\circ - \\angle CDL = 180^\\circ -\\dfrac{1}{2} \\times 108^\\circ = 126^{\\circ}`}
                        なので，{$`\\angle LDP = 63^{\\circ}`}とわかります．
                    </p>
                    <p>
                        あとは角度計算によって
                        {$`\\angle PLD = \\dfrac{1}{2} \\times \\angle ELC = 18^{\\circ}`}から
                        {$`\\angle DPA = \\angle DPL = 180^{\\circ} - 63^{\\circ} - 18^{\\circ} = 99^{\\circ}`}
                        と求まります．
                    </p>
                </>
            }
        />
    )
}
