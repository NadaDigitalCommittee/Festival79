"use client"

import { clsx } from "clsx"
import { type CSSProperties, Fragment, useState } from "react"

import {
    type EventDay,
    type EventLocation,
    type EventScheduleData,
    type EventTime,
    eventLocationMap,
    eventSchedule,
} from "@/data/event"

const days = [0, 1] as const satisfies EventDay[]
const daylabels = ["Day 1", "Day 2"]
const hours = [9, 10, 11, 12, 13, 14, 15] as const
const locations: EventLocation[] = [
    "court",
    "multimedia",
    "live",
    "hall",
    "music",
    // "lecture",
    "gym",
]

const buildKey = ({ location, from, to }: EventScheduleData) => [location, ...from, ...to].join(":")
const formatEventTime = (t: EventTime) => `${t[0]}:${t[1].toString().padStart(2, "0")}`

const hourRowHeight = 12
const locationColWidth = 10
const headerRowHeight = 6
const firstHourRowHeight = 9
const headerColWidth = 4
const firstColMarginRight = 0.5

const calcOffset = ({ location, from, to }: EventScheduleData): CSSProperties => {
    const [fromHour, fromMin] = from
    const [toHour, toMin] = to
    const top = firstHourRowHeight + (fromHour - hours[0] + fromMin / 60) * hourRowHeight
    const bottom = firstHourRowHeight + (toHour - hours[0] + toMin / 60) * hourRowHeight
    return {
        left: `${headerColWidth + locations.indexOf(location) * locationColWidth}rem`,
        top: `${top}rem`,
        width: `${locationColWidth}rem`,
        height: `${bottom - top}rem`,
    }
}

export default function Timetable() {
    const [activeDay, setDay] = useState<EventDay>(0)
    return (
        <main className="container mx-auto flex flex-col justify-center gap-2">
            <div className="flex justify-center gap-2 text-2xl">
                {days.map((day) => (
                    <button
                        className={clsx(
                            "rounded-lg px-4 py-2 font-bold transition-colors",
                            activeDay === day
                                ? "bg-theme text-white"
                                : "bg-theme/0 dark:bg-dark-muted dark:text-white",
                        )}
                        key={day}
                        onClick={() => {
                            setDay(day)
                        }}
                    >
                        {daylabels[day]}
                    </button>
                ))}
            </div>
            <div
                className="relative mx-auto grid size-full snap-x snap-mandatory overflow-x-auto"
                style={{
                    scrollPaddingLeft: `${headerColWidth - firstColMarginRight}rem`,
                    gridTemplateColumns: `${headerColWidth}rem repeat(${locations.length}, ${locationColWidth}rem)`,
                    gridTemplateRows: `${headerRowHeight}rem ${firstHourRowHeight}rem repeat(auto-fill, ${hourRowHeight}rem)`,
                }}
            >
                <div className="sticky left-0 z-10 col-span-1 snap-start bg-background"></div>
                {locations.map((location) => (
                    <div
                        className="col-span-1 flex snap-start items-center justify-center break-keep text-xl font-bold"
                        key={location}
                    >
                        {eventLocationMap[location]}
                    </div>
                ))}
                {hours.map((hour, i) => {
                    const isFirstRow = i === 0
                    return (
                        <Fragment key={hour}>
                            <div
                                className="sticky left-0 z-10 col-span-1 flex items-center justify-end border-r-2 border-current bg-background pr-3 text-3xl font-bold"
                                style={{
                                    height: `${isFirstRow ? firstHourRowHeight : hourRowHeight}rem`,
                                    marginRight: `${firstColMarginRight}rem`,
                                }}
                            >
                                <span
                                    style={{
                                        ...(isFirstRow && {
                                            marginTop: `calc(${hourRowHeight - firstHourRowHeight}rem - 0.5lh)`,
                                            marginBottom: "auto",
                                        }),
                                    }}
                                >
                                    {hour}
                                </span>
                            </div>
                            <div
                                className={clsx(
                                    "relative z-0 after:absolute after:left-0 after:h-0.5 after:w-full after:bg-current",
                                    // 0.125remはafterの高さ,
                                    // /3 は (8:45-9:00の15分) / (8:45-9:30の45分)
                                    // /2 は (8:30-9:00の30分) / (8:30-9:30の60分)
                                    isFirstRow
                                        ? "after:top-[calc(100%/3_-_0.125rem/2)]"
                                        : "after:top-[calc(100%/2_-_0.125rem/2)]",
                                )}
                                style={{
                                    gridColumn: `span ${locations.length}`,
                                }}
                            />
                        </Fragment>
                    )
                })}
                {eventSchedule
                    .filter((event) => event.day === activeDay)
                    .map((event) => (
                        <div
                            className="absolute bg-transparent p-1"
                            style={calcOffset(event)}
                            key={buildKey(event)}
                        >
                            <div className="bg-theme-faint flex size-full flex-col items-center justify-center rounded-lg shadow-md dark:bg-dark-muted">
                                <span className="break-keep text-center text-xl">
                                    {event.title}
                                </span>
                                {event.subtitle && (
                                    <span className="break-keep text-center text-lg">
                                        {event.subtitle}
                                    </span>
                                )}
                                <span className="text-sm">
                                    {formatEventTime(event.from)} - {formatEventTime(event.to)}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}
