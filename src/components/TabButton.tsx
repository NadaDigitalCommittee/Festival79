"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TabButtonProps = {
    href: ComponentProps<typeof Link>["href"]
    children?: ComponentProps<typeof Link>["children"]
} & ComponentProps<typeof Link>

export const TabButton = ({ href, children, className, ...linkProps }: TabButtonProps) => {
    const pathname = usePathname()
    return pathname === href || (pathname === "/event" && href === "/event/court") ? (
        <span className="pointer-events-none select-none rounded-lg bg-theme px-4 py-2 text-2xl text-light-background">
            {children}
        </span>
    ) : (
        <Link
            href={href}
            className={twMerge(
                "select-none rounded-lg border border-transparent bg-dark-background px-4 py-2 text-2xl text-light-background dark:border-dark-primary",
                className,
            )}
            {...linkProps}
        >
            {children}
        </Link>
    )
}
