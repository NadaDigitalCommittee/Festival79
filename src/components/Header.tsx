import Link from "next/link"

import { EventDateCounter } from "@/components/EventDateCounter"
import { WeaveLogo } from "@/components/WeaveLogo"
import { WeaveLogotype } from "@/components/WeaveLogotype"

export const Header = () => {
    return (
        <header className="container flex min-h-20 items-center justify-between">
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <WeaveLogo className="size-9" />
                    <WeaveLogotype className="h-4" />
                </Link>
                <EventDateCounter />
            </div>
            {/*
            現在その他ページの実装が行われていないため無効化
            その他ページの実装時にハンバーガーのコードを追加します
            (PCビューでは展開して表示します)
            <div className="flex gap-4">
                <Link href="/circle">サークル</Link>
                <Link href="/event">イベント</Link>
                <Link href="/timetable">タイムテーブル</Link>
                <Link href="/map">マップ</Link>
                <Link href="/goods">グッズ</Link>
            </div> */}
        </header>
    )
}
