"use client"

import { useState } from "react"
import { useInterval } from "usehooks-ts"

const eventDate = Date.parse(new Date("2025-05-02T00:00:00+09:00").toISOString())

/*
日付試験用ダミー (使うかもしれないので残しておいてください)

開催直前
const dummyDate1 = Date.parse(new Date("2025-05-01T23:59:00+09:00").toISOString())

開催当日切り替わりすぐ
const dummyDate2 = Date.parse(new Date("2025-05-02T00:00:00+09:00").toISOString())
*/

function getNoD() {
    const diff = (eventDate - Date.now()) / 86400000
    // ダミー試験をするときにご使用ください
    // onst diff = (eventDate - dummyDate1) / 86400000

    return Math.max(Math.ceil(diff), 0)
}

export const EventDateCounter = () => {
    const initialEventNoD = getNoD()
    const [eventNoD, setEventNoD] = useState<number>(initialEventNoD)

    useInterval(() => {
        setEventNoD(getNoD())
    }, 1000 * 60)
    return (
        <div className="flex items-center">
            {eventNoD == 0 ? (
                <span className="flex items-center text-xl font-bold dark:text-dark-primary">
                    本日開催！
                </span>
            ) : (
                <span className="flex items-center font-bold dark:text-dark-primary">
                    <span className="break-keep text-center">
                        開催まで
                        <wbr />
                        あと
                    </span>
                    <span className="text-3xl dark:text-theme">{eventNoD}</span>日！
                </span>
            )}
        </div>
    )
}
