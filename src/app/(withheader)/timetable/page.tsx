"use client"

import { clsx } from "clsx"
import { type CSSProperties, Fragment, useState } from "react"
import { useInterval } from "usehooks-ts"

import { Clock } from "@/components/Clock"
import {
    type EventDay,
    type EventLocation,
    type EventScheduleData,
    type EventTime,
    eventLocationMap,
    eventSchedule,
} from "@/data/events"

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
const headerColMarginRight = 0.25
const headerColPaddingRight = 0.75
const headerColBorderRightWidth$px = 4
const horizontalLineWidth$px = 2
const clockSize = 2
const gridFullWidth = headerColWidth + locations.length * locationColWidth

const calcYOffset = ([h, m]: EventTime) =>
    firstHourRowHeight + (h - hours[0] + m / 60) * hourRowHeight

const calcEventBoxPosition = ({ location, from, to }: EventScheduleData): CSSProperties => {
    const top = calcYOffset(from)
    const bottom = calcYOffset(to)
    return {
        left: `${headerColWidth + locations.indexOf(location) * locationColWidth}rem`,
        top: `${top}rem`,
        width: `${locationColWidth}rem`,
        height: `${bottom - top}rem`,
    }
}

const FESTIVAL_DAY1_TIMETABLE_START = new Date("2025-05-02T08:45:00+09:00").getTime()
const FESTIVAL_DAY1_TIMETABLE_END = new Date("2025-05-02T15:30:00+09:00").getTime()
const FESTIVAL_DAY2_TIMETABLE_START = new Date("2025-05-03T08:45:00+09:00").getTime()
const FESTIVAL_DAY2_TIMETABLE_END = new Date("2025-05-03T15:30:00+09:00").getTime()
const isDay2 = (date: Date) =>
    date.getFullYear() === 2025 && date.getMonth() + 1 === 5 && date.getDate() === 3

const isInRange = (n: number, min: number, max: number) => min <= n && n <= max

export default function Timetable() {
    const [now, setNow] = useState(new Date())
    useInterval(() => {
        setNow(new Date())
    }, 1000 * 60)

    const nowHour = now.getHours()
    const nowMinutes = now.getMinutes()
    const nowTimestamp = now.getTime()
    const nowLabel = formatEventTime([nowHour, nowMinutes])
    const nowBorderYOffset = calcYOffset([nowHour, nowMinutes])
    const clockVerticalShift =
        (nowMinutes < 10 && calcYOffset([nowHour, 10]) - nowBorderYOffset) ||
        (45 < nowMinutes && calcYOffset([nowHour, 45]) - nowBorderYOffset)
    const shouldShowNowBorder =
        isInRange(nowTimestamp, FESTIVAL_DAY1_TIMETABLE_START, FESTIVAL_DAY1_TIMETABLE_END) ||
        isInRange(nowTimestamp, FESTIVAL_DAY2_TIMETABLE_START, FESTIVAL_DAY2_TIMETABLE_END)

    const [activeDay, setDay] = useState<EventDay>(isDay2(now) ? 1 : 0)
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
                    containerType: "inline-size",
                    scrollPaddingLeft: `${headerColWidth}rem`,
                    gridTemplateColumns: `${headerColWidth}rem repeat(${locations.length}, ${locationColWidth}rem)`,
                    gridTemplateRows: `${headerRowHeight}rem ${firstHourRowHeight}rem repeat(auto-fill, ${hourRowHeight}rem)`,
                    paddingBottom: `calc(${clockSize / 2}rem + 1lh)`,
                }}
            >
                <div
                    className="sticky left-0 z-10 col-span-1 snap-start bg-background"
                    style={{
                        width: `${headerColWidth - headerColMarginRight}rem`,
                    }}
                ></div>
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
                    const height = isFirstRow ? firstHourRowHeight : hourRowHeight
                    return (
                        <Fragment key={hour}>
                            <div
                                className="sticky left-0 z-10 col-span-1 flex items-center justify-end border-current bg-background text-3xl font-bold"
                                style={{
                                    borderRightWidth: `${headerColBorderRightWidth$px}px`,
                                    paddingRight: `${headerColPaddingRight}rem`,
                                    height: `${height}rem`,
                                    marginRight: `${headerColMarginRight}rem`,
                                }}
                            >
                                <span
                                    style={{
                                        ...(isFirstRow && {
                                            marginTop: `calc(${hourRowHeight - height}rem - 0.5lh)`,
                                            marginBottom: "auto",
                                        }),
                                    }}
                                >
                                    {hour}
                                </span>
                            </div>
                            <div
                                className="sticky left-0 w-[100cqw]"
                                style={{
                                    gridColumn: `span ${locations.length}`,
                                    marginLeft: `${-headerColWidth}rem`,
                                }}
                            >
                                <span
                                    className="absolute left-0 z-0 w-[100cqw] bg-current"
                                    style={{
                                        clipPath: `inset(0 0 0 ${headerColWidth}rem)`,
                                        height: `${horizontalLineWidth$px}px`,
                                        top: `calc(${((height - hourRowHeight / 2) / height) * 100}% - ${horizontalLineWidth$px}px/2)`,
                                    }}
                                />
                            </div>
                        </Fragment>
                    )
                })}
                {eventSchedule
                    .filter((event) => event.day === activeDay)
                    .map((event) => (
                        <div
                            className="absolute bg-transparent"
                            style={{
                                padding: `${headerColMarginRight}rem`,
                                ...calcEventBoxPosition(event),
                            }}
                            key={buildKey(event)}
                        >
                            <div className="flex size-full flex-col items-center justify-center rounded-lg bg-theme-faint shadow-md dark:bg-dark-muted">
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
                <div
                    className={clsx(
                        "absolute inset-x-0 text-rose-600",
                        !shouldShowNowBorder && "hidden",
                    )}
                    style={{
                        width: `${gridFullWidth}rem`,
                        top: `calc(${nowBorderYOffset - clockSize / 2}rem)`,
                    }}
                >
                    <div
                        className="sticky left-0 z-10"
                        style={{
                            width: `calc(${headerColWidth - headerColMarginRight}rem - ${headerColBorderRightWidth$px}px)`,
                        }}
                    >
                        <span
                            className="absolute left-0 block size-full w-[100cqw] bg-current"
                            style={{
                                top: `calc(${clockSize / 2}rem - ${horizontalLineWidth$px / 2}px)`,
                                clipPath: `inset(0 0 0 ${headerColWidth}rem)`,
                                height: `${horizontalLineWidth$px}px`,
                            }}
                        />
                        <span
                            className="flex flex-col items-center justify-center text-base"
                            style={{
                                ...(clockVerticalShift && {
                                    transform: `translateY(${clockVerticalShift}rem)`,
                                }),
                            }}
                        >
                            <Clock
                                hour={now.getHours()}
                                minute={now.getMinutes()}
                                title={`現在時刻 ${nowLabel}`}
                                style={{
                                    width: `${clockSize}rem`,
                                    height: `${clockSize}rem`,
                                }}
                            />
                            {nowLabel}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}
