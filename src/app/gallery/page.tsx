import fs from "node:fs/promises"
import path from "node:path"

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
        <main className="container mx-auto p-4 sm:p-10 lg:max-w-lg">
            <div className="grid grid-cols-1 grid-rows-2 gap-8 p-2 xs:grid-cols-[1fr_2fr] xs:grid-rows-1">
                <div className="flex max-w-32 flex-col justify-center gap-2 xs:max-w-none">
                    <WeaveLogo className="drop-shadow" />
                    <WeaveLogotype />
                </div>
                <div className="flex flex-col justify-between gap-4">
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
                        className="self-start rounded-md bg-theme px-4 py-2 text-white"
                    >
                        Download ({pamphletFileSize})
                    </a>
                </div>
            </div>
        </main>
    )
}
