"use client"

import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { useInterval } from "usehooks-ts"

import { WeaveLogo } from "./WeaveLogo"
import { WeaveLogotype } from "./WeaveLogotype"

import { FESTIVAL_DATE_END, FESTIVAL_DATE_START } from "@/data/festival"

/*
日付試験用ダミー (使うかもしれないので残しておいてください)

開催直前
const dummyDate1 = Date.parse(new Date("2025-05-01T23:59:00+09:00").toISOString())

開催当日切り替わりすぐ
const dummyDate2 = Date.parse(new Date("2025-05-02T00:00:00+09:00").toISOString())
*/

export const EventDateCounter = () => {
    const [now, setNow] = useState(Date.now())
    useInterval(() => {
        setNow(Date.now())
    }, 1000 * 60)

    const eventNoD = Math.max(Math.ceil((FESTIVAL_DATE_START - now) / 86400000), 0)
    const isFestivalEnded = FESTIVAL_DATE_END < now
    return (
        <div className="flex min-h-9 items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
                <WeaveLogo className="size-9" />
                <WeaveLogotype
                    className={clsx(
                        isFestivalEnded || "hidden",
                        "h-4 sm:block dark:text-dark-primary",
                    )}
                />
            </Link>
            {isFestivalEnded || (
                <div className="flex items-center">
                    {eventNoD == 0 ? (
                        <span className="flex items-center text-xl font-bold">本日開催！</span>
                    ) : (
                        <span className="flex items-center font-bold">
                            <span className="break-keep text-center">
                                <span className="max-[300px]:hidden">開催まで</span>
                                <wbr />
                                あと
                            </span>
                            <span className="mx-1 text-3xl dark:text-theme">{eventNoD}</span>日！
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}
