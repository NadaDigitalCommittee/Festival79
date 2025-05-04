"use client"

import clsx from "clsx"
import { useState } from "react"
import { useInterval } from "usehooks-ts"

import { FESTIVAL_DATE_END } from "@/data/festival"

export function EventDateDisplay() {
    const [now, setNow] = useState(Date.now())
    useInterval(() => {
        setNow(Date.now())
    }, 1000 * 60)

    const isFestivalEnded = FESTIVAL_DATE_END < now
    return (
        <>
            <div
                className={clsx(
                    "flex size-full flex-col justify-between p-4",
                    isFestivalEnded && "opacity-60 blur-[2px]",
                )}
            >
                <div className="flex h-16 items-center gap-2 font-date md:gap-4 lg:gap-6 dark:text-dark-secondary">
                    <div className="flex items-center">
                        <span className="text-5xl tracking-widest">5/2</span>
                        <span className="text-3xl [text-orientation:sideways] [writing-mode:vertical-rl]">
                            FRI
                        </span>
                    </div>
                    <span className="text-3xl">-</span>
                    <div className="flex items-center">
                        <span className="text-5xl tracking-widest">5/3</span>
                        <span className="text-3xl [text-orientation:sideways] [writing-mode:vertical-rl]">
                            SAT
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-[max-content_1fr] grid-rows-[1fr_1fr_max-content] gap-8">
                    <div className="col-span-2 grid grid-cols-subgrid items-center gap-8">
                        <span className="text-right text-2xl font-bold dark:text-dark-secondary">
                            1日目
                        </span>
                        <span className="text-4xl dark:text-dark-secondary">9:00 - 15:30</span>
                    </div>
                    <div className="col-span-2 grid grid-cols-subgrid items-center gap-8">
                        <span className="text-right text-2xl font-bold dark:text-dark-secondary">
                            2日目
                        </span>
                        <span className="text-4xl dark:text-dark-secondary">9:00 - 15:30</span>
                    </div>
                </div>
                <p className="col-span-2 text-sm sm:text-base dark:text-dark-secondary">
                    ※開場時間前のご来場はお控えください
                </p>
            </div>
            {isFestivalEnded && (
                <div className="absolute inset-x-8 bottom-8 top-24 flex origin-center -rotate-12 items-center justify-center break-keep text-center text-3xl">
                    ご来場いただき
                    <wbr />
                    ありがとう
                    <wbr />
                    ございました！
                </div>
            )}
        </>
    )
}
