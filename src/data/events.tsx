import type { ReactNode } from "react"

export const eventLocationMap = {
    court: "中庭",
    multimedia: "視聴覚",
    live: "本館",
    hall: "大講義",
    music: "音楽室",
    lecture: "講義教室",
    gym: "体育館",
} as const
export type EventLocation = keyof typeof eventLocationMap
export type EventDay = 0 | 1

export type EventTime = [hour: number, minute: number]
export interface EventScheduleData {
    title: ReactNode
    subtitle?: ReactNode
    day: EventDay
    location: EventLocation
    from: EventTime
    to: EventTime
}

export const eventSchedule: EventScheduleData[] = [
    {
        title: "オープニング",
        location: "court",
        day: 0,
        from: [9, 15],
        to: [9, 30],
    },
    {
        title: "Ms. 灘コンテスト",
        location: "court",
        day: 0,
        from: [9, 30],
        to: [10, 30],
    },
    {
        title: (
            <>
                書道
                <wbr />
                パフォーマンス
            </>
        ),
        location: "court",
        day: 0,
        from: [10, 45],
        to: [11, 15],
    },
    {
        title: "ODORIBA",
        location: "court",
        day: 0,
        from: [11, 30],
        to: [13, 0],
    },
    {
        title: "マジックショー",
        location: "court",
        day: 0,
        from: [13, 15],
        to: [13, 30],
    },
    {
        title: "ODORIBA",
        location: "court",
        day: 0,
        from: [13, 45],
        to: [15, 15],
    },
    {
        title: "N-1 グランプリ 2025 敗者復活戦",
        location: "multimedia",
        day: 0,
        from: [9, 15],
        to: [10, 15],
    },
    {
        title: (
            <>
                灘校生
                <wbr />
                格付けチェック
            </>
        ),
        location: "multimedia",
        day: 0,
        from: [10, 30],
        to: [11, 30],
    },
    {
        title: "IPPON グランプリ",
        location: "multimedia",
        day: 0,
        from: [12, 0],
        to: [12, 45],
    },
    {
        title: "N-1 グランプリ 2025",
        location: "multimedia",
        day: 0,
        from: [13, 15],
        to: [15, 15],
    },
    {
        title: (
            <>
                灘校一
                <wbr />
                受けたい授業
            </>
        ),
        location: "hall",
        day: 0,
        from: [9, 30],
        to: [10, 30],
    },
    {
        title: "新中一企画",
        subtitle: (
            <>
                -&nbsp;新入生が
                <wbr />
                語る
                <wbr />
                灘校生活&nbsp;-
            </>
        ),
        location: "hall",
        day: 0,
        from: [10, 45],
        to: [11, 45],
    },
    {
        title: "ボクシンク",
        location: "hall",
        day: 0,
        from: [12, 0],
        to: [13, 0],
    },
    {
        title: "NED",
        location: "hall",
        day: 0,
        from: [13, 15],
        to: [14, 15],
    },
    {
        title: "ESS 千夜一夜物語",
        location: "gym",
        day: 0,
        from: [13, 0],
        to: [13, 40],
    },
    {
        title: "YUKAI",
        location: "live",
        day: 0,
        from: [10, 30],
        to: [11, 0],
    },
    {
        title: "diagonal",
        location: "live",
        day: 0,
        from: [11, 0],
        to: [11, 30],
    },
    {
        title: "colors'",
        location: "live",
        day: 0,
        from: [11, 30],
        to: [11, 50],
    },
    {
        title: "The Stellar Mercury",
        location: "live",
        day: 0,
        from: [12, 0],
        to: [12, 20],
    },
    {
        title: "os1",
        location: "live",
        day: 0,
        from: [12, 30],
        to: [12, 45],
    },
    {
        title: "Roflic",
        location: "live",
        day: 0,
        from: [12, 45],
        to: [13, 5],
    },
    {
        title: "Salamander",
        location: "live",
        day: 0,
        from: [13, 15],
        to: [13, 25],
    },
    {
        title: "linKer.",
        location: "live",
        day: 0,
        from: [13, 30],
        to: [14, 0],
    },
    {
        title: "GCS",
        location: "live",
        day: 0,
        from: [14, 0],
        to: [14, 30],
    },
    {
        title: "Crescent Moon",
        location: "live",
        day: 0,
        from: [14, 30],
        to: [15, 0],
    },
    {
        title: "Pentamix",
        location: "live",
        day: 0,
        from: [15, 0],
        to: [15, 30],
    },
    {
        title: "クラシック研究部 第1部",
        location: "music",
        day: 0,
        from: [9, 15],
        to: [11, 20],
    },
    {
        title: "グリー部",
        location: "music",
        day: 0,
        from: [11, 30],
        to: [11, 55],
    },
    {
        title: "クラシック研究部 第2部",
        location: "music",
        day: 0,
        from: [12, 5],
        to: [15, 5],
    },
    {
        title: "Ms. 灘コンテスト",
        location: "court",
        day: 1,
        from: [9, 15],
        to: [10, 0],
    },
    {
        title: (
            <>
                書道
                <wbr />
                パフォーマンス
            </>
        ),
        location: "court",
        day: 1,
        from: [10, 15],
        to: [10, 30],
    },
    {
        title: "ODORIBA",
        location: "court",
        day: 1,
        from: [10, 45],
        to: [11, 45],
    },
    {
        title: "マジックショー",
        location: "court",
        day: 1,
        from: [11, 45],
        to: [12, 0],
    },
    {
        title: "筋肉王",
        location: "court",
        day: 1,
        from: [12, 15],
        to: [13, 0],
    },
    {
        title: "ODORIBA",
        location: "court",
        day: 1,
        from: [13, 15],
        to: [14, 15],
    },
    {
        title: "フィナーレ",
        location: "court",
        day: 1,
        from: [14, 30],
        to: [15, 15],
    },
    {
        title: (
            <>
                灘校生
                <wbr />
                格付けチェック
            </>
        ),
        location: "multimedia",
        day: 1,
        from: [9, 15],
        to: [10, 15],
    },
    {
        title: (
            <>
                学校対抗
                <wbr />
                クイズ大会
            </>
        ),
        location: "multimedia",
        day: 1,
        from: [10, 30],
        to: [11, 30],
    },
    {
        title: "N-1 グランプリ 2025",
        location: "multimedia",
        day: 1,
        from: [11, 45],
        to: [14, 15],
    },
    {
        title: "ESS 千夜一夜物語",
        location: "gym",
        day: 1,
        from: [12, 0],
        to: [12, 40],
    },
    {
        title: "diagonal",
        location: "live",
        day: 1,
        from: [9, 30],
        to: [10, 0],
    },
    {
        title: "colors'",
        location: "live",
        day: 1,
        from: [10, 0],
        to: [10, 20],
    },
    {
        title: "Salamander",
        location: "live",
        day: 1,
        from: [10, 30],
        to: [10, 40],
    },
    {
        title: "Roflic",
        location: "live",
        day: 1,
        from: [11, 0],
        to: [11, 20],
    },
    {
        title: "The Stellar Mercury",
        location: "live",
        day: 1,
        from: [11, 30],
        to: [11, 50],
    },
    {
        title: "Pentamix",
        location: "live",
        day: 1,
        from: [12, 0],
        to: [12, 30],
    },
    {
        title: "Crescent Moon",
        location: "live",
        day: 1,
        from: [12, 30],
        to: [13, 0],
    },
    {
        title: "GCS",
        location: "live",
        day: 1,
        from: [13, 15],
        to: [13, 45],
    },
    {
        title: "linKer.",
        location: "live",
        day: 1,
        from: [13, 45],
        to: [14, 15],
    },
    {
        title: "YUKAI",
        location: "live",
        day: 1,
        from: [14, 15],
        to: [14, 45],
    },
    {
        title: "os1",
        location: "live",
        day: 1,
        from: [14, 45],
        to: [15, 0],
    },
    {
        title: "クラシック研究部 第1部",
        location: "music",
        day: 1,
        from: [9, 15],
        to: [11, 30],
    },
    {
        title: "グリー部",
        location: "music",
        day: 1,
        from: [11, 40],
        to: [12, 5],
    },
    {
        title: "クラシック研究部 第2部",
        location: "music",
        day: 1,
        from: [12, 15],
        to: [15, 5],
    },
    {
        title: (
            <>
                灘校一
                <wbr />
                受けたい授業
            </>
        ),
        location: "hall",
        day: 1,
        from: [9, 30],
        to: [10, 30],
    },
    {
        title: "新中一企画",
        subtitle: (
            <>
                -&nbsp;新入生が
                <wbr />
                語る
                <wbr />
                灘校生活&nbsp;-
            </>
        ),
        location: "hall",
        day: 1,
        from: [10, 45],
        to: [11, 45],
    },
    {
        title: "ボクシンク",
        location: "hall",
        day: 1,
        from: [12, 0],
        to: [13, 0],
    },
    {
        title: "NED",
        location: "hall",
        day: 1,
        from: [13, 15],
        to: [14, 15],
    },
]
