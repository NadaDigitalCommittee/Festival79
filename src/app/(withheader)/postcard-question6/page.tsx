import { $, $$ } from "@/components/KaTeXMath"
import { PostcardQuestion } from "@/components/PostcardQuestion"

export default function PostcardQuestion6() {
    return (
        <PostcardQuestion
            index={6}
            question={
                <p>
                    相異なる正の整数{$`a,b,c,d`}であって，
                    {$`a\\times b,a\\times c,a\\times d,b\\times c,b\\times d,c\\times d`}
                    のうち少なくとも
                    {$`4`}つが平方数となりました．{$`a\\times b\\times c\\times d`}
                    としてあり得る最も小さい値を求めてください．ただし平方数とは{$`1`}
                    以上の同じ整数を{$`2`}回掛け合わせたもののことを指します．
                </p>
            }
            explanation={
                <>
                    <p>
                        （ある数{$`a`}を{$`m`}回かけた数を{$`a^m`}と表します．例えば
                        {$`5^2 = 5 \\times 5, 3^5 = 3 \\times 3\\times 3\\times 3\\times 3`}です．）
                    </p>
                    <p>対称性より{$`a < b < c < d`}としても一般性を失いません．</p>
                    <p>
                        {$`a\\times b, a\\times c, a\\times d, b\\times c, b\\times d, c\\times d`}
                        のうち少なくとも{$`4`}つが平方数であることから，
                        {$`(a\\times b, c\\times d), (a\\times c, b\\times d), (a\\times d, b\\times c)`}
                        の{$`3`}組の中にどちらも平方数であるような組が少なくとも{$`1`}つ存在します．
                        ここで，{$`N = a \\times b \\times c \\times d`}とおくと，{$`N`}
                        は平方数です． 一方，
                        {$`(a\\times b, c\\times d), (a\\times c, b\\times d), (a\\times d, b\\times c)`}
                        の中にいずれか一方が平方数であるような組が存在した場合，{$`N`}
                        は平方数とならず矛盾します．
                    </p>
                    <p>
                        {$`a`} を割り切る最大の平方数 {$`a'`} を考え，{$`a`} を {$`a'`} で割った商を
                        {$`p`} と置きます． （例えば {$`a = 108`} であれば {$`a' = 36`} となり{" "}
                        {$`p = 3`}
                        となります．）
                        {$`a\\times b, a\\times c, a\\times d`}の中に平方数であるものが少なくとも
                        {$`2`}
                        つ存在します． 例えばそれが {$`a\\times b, a\\times c`} であったとき，
                        {$`b, c`}
                        はともに {$`p`} で最大奇数回割り切れます． ここで，
                        {$`a\\times d, b\\times d, c\\times d`} に平方数が含まれるため，{$`d`} も
                        {$`p`}
                        で最大奇数回割り切れます． すなわち，{$`a, b, c, d`} はある{$`1`}以上の整数
                        {$`p, x, y, z, w`} を用いて
                        {$$`
                        a = p\\times x^2, \\quad b = p\\times y^2, \\quad c = p\\times z^2, \\quad d = p\\times w^2
                        `}
                        と表せます．つまり
                        {$$`
                        N = p^4\\times(x\\times y\\times z\\times w)^2
                        `}
                        になります． このとき {$`x < y < z < w`} より
                        {$$`
                        N \\geq 1^4 \\times (1 \\times 2 \\times 3 \\times 4)^2 = 576
                        `}
                        が得られます． 逆に，{$`(a, b, c, d) = (1, 4, 9, 16)`}
                        とすることで問題の条件を満たし，{$`N = 576`}となります． 以上より，
                        {$`a \\times b \\times c \\times d`}としてあり得る最小値は{$`576`}です．
                    </p>
                </>
            }
        />
    )
}
