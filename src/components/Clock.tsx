import { type SVGProps, useId } from "react"

interface ClockProps extends SVGProps<SVGSVGElement> {
    hour: number
    minute: number
    title?: string
}

export const Clock = ({ hour, minute, title = "時計", ...props }: ClockProps) => {
    const titleId = useId()
    const strokeWidth = 6
    const radius = 32
    const minuteHandArg = 2 * Math.PI * (minute / 60)
    const hourHandArg = 2 * Math.PI * (((hour + minute / 60) / 12) % 1)
    const minuteHandLength = 22
    const hourHandLength = (minuteHandLength * 3) / 4

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            role="img"
            aria-labelledby={titleId}
            {...props}
        >
            <title id={titleId}>{title}</title>
            <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="bevel">
                <circle cx={radius} cy={radius} r={radius - strokeWidth / 2} />
                <polyline
                    points={`${
                        radius + hourHandLength * Math.sin(hourHandArg)
                    },${radius - hourHandLength * Math.cos(hourHandArg)} ${radius},${radius} ${
                        radius + minuteHandLength * Math.sin(minuteHandArg)
                    },${radius - minuteHandLength * Math.cos(minuteHandArg)}`}
                />
            </g>
        </svg>
    )
}
