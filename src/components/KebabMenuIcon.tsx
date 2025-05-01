import { type SVGProps, useId } from "react"

export const KebabMenuIcon = (props: SVGProps<SVGSVGElement>) => {
    const titleId = useId()
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            role="img"
            aria-labelledby={titleId}
            {...props}
        >
            <title id={titleId}>縦に点が3つ並んだメニューアイコン</title>
            <g fill="currentColor" stroke="none">
                <circle cx="8" cy="4" r="1" />
                <circle cx="8" cy="8" r="1" />
                <circle cx="8" cy="12" r="1" />
            </g>
        </svg>
    )
}
