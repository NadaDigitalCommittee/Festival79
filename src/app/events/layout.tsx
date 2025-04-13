import type { ReactNode } from "react"

export default function Events(props: { event: ReactNode; children: ReactNode }) {
    return (
        <main className="container mx-auto p-4 md:p-10">
            {props.children}
            {props.event}
        </main>
    )
}
