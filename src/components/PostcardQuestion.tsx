"use client"

import clsx from "clsx"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { type ReactNode, useState } from "react"
import { HiHashtag } from "react-icons/hi2"
import { RiExpandHeightLine } from "react-icons/ri"
import { twMerge } from "tailwind-merge"

interface PostcardProps {
    index: 1 | 2 | 3 | 4 | 5 | 6
    question: ReactNode
    questionImage?: StaticImport
    explanation: ReactNode
    explanationImage?: StaticImport
}

export function PostcardQuestion({
    index,
    question,
    questionImage,
    explanation,
    explanationImage,
}: PostcardProps) {
    const [open, setOpen] = useState(false)
    return (
        <main className="container flex flex-col gap-8 p-2">
            <section className="flex flex-col gap-4 leading-8 [&>p]:px-6">
                <h2 className="flex items-center gap-2">
                    <div className="flex size-12 items-center justify-center rounded-md">
                        <HiHashtag className="size-6" />
                    </div>
                    <span className="inline-flex gap-2 text-xl font-bold">
                        問題<span>{index}</span>
                    </span>
                </h2>
                {question}
                {questionImage && (
                    <Image src={questionImage} alt={`問題${index}の図`} className="mx-auto px-1" />
                )}
            </section>
            <section className={"flex flex-col gap-4 leading-8"}>
                <h2 className="flex items-center gap-2">
                    <div className="flex size-12 items-center justify-center rounded-md">
                        <HiHashtag className="size-6" />
                    </div>
                    <span className="text-xl font-bold">解説</span>
                    <button
                        className="ml-auto mr-2 flex size-fit select-none flex-row items-center gap-2 text-sm"
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        解説を{open ? "閉じる" : "開く"}
                        <RiExpandHeightLine className="size-6" />
                    </button>
                </h2>
                <div
                    className={twMerge(
                        clsx(
                            "interpolate-keywords flex flex-col gap-4 overflow-y-hidden transition-[display,height] duration-300 starting:h-0 [&>p]:px-6",
                            open || "hidden h-0",
                        ),
                    )}
                    style={{
                        transitionBehavior: "allow-discrete",
                    }}
                >
                    {explanationImage && (
                        <Image
                            src={explanationImage}
                            alt={`問題${index}の解説の図`}
                            className="mx-auto px-1"
                        />
                    )}
                    {explanation}
                </div>
            </section>
        </main>
    )
}
