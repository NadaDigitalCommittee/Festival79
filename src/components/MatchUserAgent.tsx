"use client"

import { type PropsWithChildren, type ReactNode, useEffect, useState } from "react"

export function MatchUserAgent({
    regex,
    flags,
    children,
}: PropsWithChildren<{ regex: string; flags?: string }>): ReactNode {
    const [userAgent, setUserAgent] = useState<string | null>(null)
    useEffect(() => {
        setUserAgent(navigator.userAgent)
    }, [])
    return userAgent && new RegExp(regex, flags).test(userAgent) && children
}
