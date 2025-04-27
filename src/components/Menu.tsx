"use client"

import Link from "next/link"
import { useState } from "react"
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2"

export const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
                <Link href="/circle">サークル</Link>
                <Link href="/event">イベント</Link>
                <Link href="/timetable">タイムテーブル</Link>
                {/*<Link href="/map">マップ</Link>*/}
                <Link href="/goods">グッズ</Link>
            </div>
            <div className="block select-none md:hidden">
                {open ? (
                    <>
                        <button
                            className="flex size-12 flex-col items-center"
                            onClick={() => {
                                setOpen((open) => !open)
                            }}
                        >
                            <HiXMark className="size-full" />
                            <span className="text-sm">CLOSE</span>
                        </button>
                        <div className="fixed left-0 top-16 flex w-screen flex-col border-b border-light-primary bg-background *:p-4 dark:border-dark-primary">
                            <Link href="/circle">サークル</Link>
                            <Link href="/event">イベント</Link>
                            <Link href="/timetable">タイムテーブル</Link>
                            {/*<Link href="/map">マップ</Link>*/}
                            <Link href="/goods">グッズ</Link>
                        </div>
                    </>
                ) : (
                    <button
                        className="flex size-12 flex-col items-center"
                        onClick={() => {
                            setOpen((open) => !open)
                        }}
                    >
                        <HiBars3BottomLeft className="size-full" />
                        <span className="text-sm">MENU</span>
                    </button>
                )}
            </div>
        </div>
    )
}
