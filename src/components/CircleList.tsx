import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import { HiHashtag } from "react-icons/hi2"

import master from "@/components/circle.json"

type Circle = {
    logo?: ComponentProps<typeof Image>["src"]
    name: string
    club: string
    description: ReactNode
}

const CircleData: Circle[] = master.map((v) => ({
    name: v.name,
    club: v.club,
    description: v.description,
}))

export const CircleList = () => {
    return (
        <ul className="container mx-auto p-0 sm:p-2 md:p-10">
            {CircleData.map((circle) => {
                return (
                    <li key={circle.name} className="flex flex-col gap-3 p-6">
                        <div className="flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-md">
                                <HiHashtag className="size-6 text-light-primary dark:text-dark-primary" />
                            </div>
                            <span className="text-xl font-bold text-light-primary dark:text-dark-primary">
                                {circle.name}
                            </span>
                            <span className="text-xs text-light-primary dark:text-dark-primary">
                                by {circle.club}
                            </span>
                        </div>

                        <div className="px-4 text-light-primary dark:text-dark-primary">
                            {circle.description}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
