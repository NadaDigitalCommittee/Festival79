"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps } from "react"

type TabButtonProps = {
    href: ComponentProps<typeof Link>["href"]
    children?: ComponentProps<typeof Link>["children"]
} & ComponentProps<typeof Link>

export const TabButton = ({ href, children, ...linkProps }: TabButtonProps) => {
    const pathname = usePathname()
    return pathname === href || (pathname === "/events" && href === "/events/court") ? (
        <span className="pointer-events-none select-none rounded-lg bg-theme px-4 py-2 text-2xl text-light-background">
            {children}
        </span>
    ) : (
        <Link
            href={href}
            className="rounded-lg bg-dark-background px-4 py-2 text-2xl text-light-background"
            {...linkProps}
        >
            {children}
        </Link>
    )
}
