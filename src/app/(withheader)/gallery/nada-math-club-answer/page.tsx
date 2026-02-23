import { $, $$ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

const Figure = <T extends string | number>({
    labels: [a, b, c, d, e, f, g, h, i],
}: {
    labels: [T, T, T, T, T, T, T, T, T]
}) => (
    <div className="mx-auto grid grid-cols-[repeat(5,3rem)] grid-rows-[repeat(5,3rem)] border-current text-2xl [&>div]:col-span-1 [&>div]:grid [&>div]:place-content-center">
        <div className="rounded-full border">{$`${a}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${b}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${c}`}</div>
        <div></div>
        <div>{$`20`}</div>
        <div></div>
        <div>{$`26`}</div>
        <div></div>
        <div className="rounded-full border">{$`${d}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${e}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${f}`}</div>
        <div></div>
        <div>{$`23`}</div>
        <div></div>
        <div>{$`15`}</div>
        <div></div>
        <div className="rounded-full border">{$`${g}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${h}`}</div>
        <div></div>
        <div className="rounded-full border">{$`${i}`}</div>
    </div>
)

export default function PostcardQuestion1() {
    return (
        <PostcardQuestion
            question={
                <>
                    <p>
                        ◯には{$`\\text{1 -- 9}`}の数が{$`1`}つずつ入ります．{$`20,26,23,15`}
                        はそれぞれの周りの{$`4`}つの◯に入る数の和になっています．
                    </p>
                    <p>それぞれ◯に入る数を確定させましょう！</p>
                    <Figure labels={["", "", "", "", "", "", "", "", ""]} />
                </>
            }
            explanation={
                <>
                    <Figure labels={["A", "B", "C", "D", "E", "F", "G", "H", "I"]} />
                    <p>
                        図のようにそれぞれの◯に{$`A`}から{$`I`}
                        までのアルファベットをあてはめます．問題文の条件から{$`4`}
                        つの式が立てられます．
                    </p>
                    <p>
                        {$$`
                        \\begin{gather}
                            A+B+D+E = 20\\\\
                            B+C+F+E = 26\\\\
                            D+G+H+E = 23\\\\
                            F+H+I+E = 15\\\\
                        \\end{gather}`}
                        {$`(2)+(3)-(1)-(4)`}より
                        {$$`\\begin{equation*}
                            C+G-A-I=14
                        \\end{equation*}`}
                        と分かります．これを満たす{$`1`}以上{$`9`}以下の数の組は，{$`{A,I}={1,2}`}
                        かつ{$`{C,G}={8,9}`}の時だけです．これから
                        {$$`\\begin{equation}
                            C+G+A+I=20
                        \\end{equation}`}
                        が分かります．
                        {$$`\\begin{equation}
                            (1)+(2)+(3)+(4)+(5) = 2\\times E+2\\times (A+B+C+D+E+F+G+H+I)
                        \\end{equation}`}
                        {$`A`}から{$`I`}までの総和は{$`1`}から{$`9`}までの総和に等しいことに注意して
                        {$`(6)`}を計算すると
                        {$$`\\begin{equation*}
                            E=(20+26+23+15+20)\\div2-45=7
                        \\end{equation*}`}
                        と分かります．したがって{$`B,D,F,E`}は{$`3,4,5,6`}のいずれかです．{$`I=2`}
                        と仮定すると
                        {$$`\\begin{equation*}
                            F+H+I+E\\geqq (3+4)+2+7>15
                        \\end{equation*}`}
                        となり，{$`(4)`}に矛盾します．これから{$`I=1`}で，また{$`F`}は{$`3`}または
                        {$`4`}と分かります．{$`C=8`}と仮定すると
                        {$$`\\begin{equation*}
                            B+F+C+E\\leqq (4+6)+8+7<26
                        \\end{equation*}`}
                        となり，{$`(2)`}に矛盾します．よって{$`C=9,B=6,F=4`}と分かります．
                    </p>
                    <p>あとは適切に計算すれば{$`A=2,G=8,D=5,H=3`}が得られます．</p>
                    <Figure labels={[2, 6, 9, 5, 7, 4, 8, 3, 1]} />
                </>
            }
        />
    )
}
