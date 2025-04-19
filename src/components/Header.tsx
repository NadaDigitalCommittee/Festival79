import Link from "next/link"

import { EventDateCounter } from "@/components/EventDateCounter"
import { Menu } from "@/components/Menu"
import { WeaveLogo } from "@/components/WeaveLogo"
import { WeaveLogotype } from "@/components/WeaveLogotype"

export const Header = () => {
    return (
        <header className="container sticky top-0 z-10 flex items-center justify-between bg-background p-4">
            <div className="flex min-h-9 items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <WeaveLogo className="size-9" />
                    <WeaveLogotype className="hidden h-4 sm:block dark:text-dark-primary" />
                </Link>
                <EventDateCounter />
            </div>
            <Menu />
        </header>
    )
}
