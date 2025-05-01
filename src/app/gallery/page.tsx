import fs from "node:fs/promises"
import path from "node:path"
import { HiExclamationCircle } from "react-icons/hi"

import { KebabMenuIcon } from "@/components/KebabMenuIcon"
import { MatchUserAgent } from "@/components/MatchUserAgent"
import { WeaveLogo } from "@/components/WeaveLogo"
import { WeaveLogotype } from "@/components/WeaveLogotype"

const formatBytes = (bytes: number, fractionDigits: number = 2) => {
    const k = 1000
    const prefixes = ["", "k", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"]
    const i = Math.max(0, Math.min(prefixes.length - 1, Math.floor(Math.log(bytes) / Math.log(k))))
    return `${+(bytes / k ** i).toFixed(fractionDigits)} ${prefixes[i] ?? ""}B`
}
const calcFileSize = async (filePath: string) => {
    const stats = await fs.stat(path.join(process.cwd(), "public", filePath))
    return formatBytes(stats.size)
}

const pamphletPath = "/gallery/pamphlet.pdf"
const pamphletFileSize = await calcFileSize(pamphletPath)

export default function Download() {
    return (
        <main className="container mx-auto flex flex-col gap-4 p-4 sm:p-10 lg:max-w-lg">
            <MatchUserAgent regex="Line" flags="i">
                <div className="flex items-center justify-start gap-2 rounded-lg bg-rose-200 p-4 text-light-primary dark:text-dark-background">
                    <HiExclamationCircle className="size-6 shrink-0"></HiExclamationCircle>
                    <p>
                        LINEアプリ内ブラウザでのファイルのダウンロードはサポートされていません。右下の
                        <KebabMenuIcon className="my-auto inline size-[1em] align-[-0.1lh]" />
                        メニューから「デフォルトのブラウザで開く」を選択して、他のブラウザでこのページを開いてください。
                    </p>
                </div>
            </MatchUserAgent>
            <div className="grid grid-cols-1 grid-rows-2 gap-8 p-2 xs:grid-cols-[1fr_2fr] xs:grid-rows-1">
                <div className="flex max-w-32 flex-col justify-center gap-2 xs:max-w-none">
                    <WeaveLogo className="drop-shadow" />
                    <WeaveLogotype />
                </div>
                <div className="relative flex flex-col justify-between gap-4">
                    <span className="break-keep text-xl font-bold">
                        第79回
                        <wbr />
                        灘校文化祭
                        <wbr />
                        『weave』
                        <br />
                        パンフレット
                    </span>
                    <a
                        href={pamphletPath}
                        download="第79回灘校文化祭『weave』 パンフレット.pdf"
                        className="self-start rounded-md bg-theme px-4 py-2 text-white shadow-md transition-colors hover:bg-theme/90"
                    >
                        Download ({pamphletFileSize})
                    </a>
                </div>
            </div>
        </main>
    )
}
