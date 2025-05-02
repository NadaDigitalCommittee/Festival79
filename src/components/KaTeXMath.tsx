import clsx from "clsx"
import { type KatexOptions, renderToString } from "katex"
import "katex/dist/katex.min.css"
import { twMerge } from "tailwind-merge"

export function KaTeXMath({
    tex,
    className,
    ...options
}: {
    tex: string
    className?: string
} & KatexOptions) {
    return (
        <span
            className={twMerge(clsx(options.displayMode || "mx-1", className))}
            dangerouslySetInnerHTML={{
                __html: renderToString(tex, options),
            }}
        />
    )
}

type TemplateInterpolatable = string | number | bigint | boolean | null | undefined

const substitute = (template: TemplateStringsArray, ...substitutions: TemplateInterpolatable[]) =>
    template.reduce((result, str, i) => `${result}${str}${substitutions[i]}`, "")

export const $ = (template: TemplateStringsArray, ...substitutions: TemplateInterpolatable[]) => (
    <KaTeXMath tex={substitute(template, ...substitutions, "")}></KaTeXMath>
)
export const $$ = (template: TemplateStringsArray, ...substitutions: TemplateInterpolatable[]) => (
    <KaTeXMath tex={substitute(template, ...substitutions, "")} displayMode></KaTeXMath>
)
