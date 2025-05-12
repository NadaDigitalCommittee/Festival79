import * as glob from "glob"
import fs from "node:fs/promises"
import path from "node:path"
import { PDFDocument } from "pdf-lib"
import { HiExternalLink } from "react-icons/hi"
import { HiDownload, HiExclamationCircle, HiHashtag } from "react-icons/hi"

import { KebabMenuIcon } from "@/components/KebabMenuIcon"
import { MatchUserAgent } from "@/components/MatchUserAgent"
import { WeaveLogo } from "@/components/WeaveLogo"
import { WeaveLogotype } from "@/components/WeaveLogotype"
import { type CircleId, circleMap } from "@/data/circles"

const fsGalleryPath = path.join(process.cwd(), "public/gallery")
const formatBytes = (bytes: number, fractionDigits: number = 2) => {
    const k = 1000
    const prefixes = ["", "k", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"]
    const i = Math.max(0, Math.min(prefixes.length - 1, Math.floor(Math.log(bytes) / Math.log(k))))
    return `${+(bytes / k ** i).toFixed(fractionDigits)} ${prefixes[i] ?? ""}B`
}
const calcFileSize = async (...paths: string[]) => {
    const stats = await fs.stat(path.join(fsGalleryPath, ...paths))
    return formatBytes(stats.size)
}
const buildFileHref = (...paths: string[]) => path.join("/gallery", ...paths)

const brochurePath = "brochure.pdf"
const brochureFileSize = await calcFileSize(brochurePath)

interface GalleryFile {
    href: string
    title: string
    filename: string
    filesize: string
    circleId: CircleId
}

const fileList = await glob
    .glob("**/*.pdf", {
        ignore: brochurePath,
        cwd: fsGalleryPath,
    })
    .then(async (paths) =>
        Map.groupBy(
            await Promise.all(
                paths.map(async (filePath): Promise<GalleryFile> => {
                    const [circleId, filename] = filePath.split(path.sep) as [CircleId, string]
                    const circleName = circleMap[circleId]
                    const bytes = await fs.readFile(path.join(fsGalleryPath, filePath))
                    const pdfDoc = await PDFDocument.load(bytes)
                    const title = pdfDoc.getTitle() ?? filename
                    return {
                        circleId,
                        filename: `${circleName}_${title.replaceAll(" ", "_")}.pdf`,
                        filesize: formatBytes(bytes.length),
                        href: buildFileHref(filePath),
                        title,
                    }
                }),
            ),
            (item) => item.circleId,
        ).entries(),
    )

const DownloadButton = ({
    href,
    download,
    filesize,
}: {
    href: string
    download: string
    filesize: string
}) => (
    <div className="flex h-8 w-40 justify-between gap-2">
        <a
            href={href}
            download={download}
            title="ファイルをダウンロード"
            aria-label="ファイルをダウンロード"
            className="relative inline-flex items-center gap-1 overflow-hidden px-1 py-2 before:absolute before:bottom-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-theme before:transition-transform hover:before:scale-x-100"
        >
            <HiDownload className="size-5 shrink-0" />
            <span className="shrink whitespace-nowrap">{filesize}</span>
        </a>
        <a
            href={href}
            className="grid aspect-square h-full place-content-center rounded-md bg-zinc-400 text-white shadow-md transition-colors dark:bg-zinc-600 hover:dark:bg-zinc-600/90"
            target="_blank"
            title="ファイルをダウンロードせず別タブで開く"
            aria-label="ファイルをダウンロードせず別タブで開く"
            rel="noopener noreferrer"
        >
            <HiExternalLink className="size-5" />
        </a>
    </div>
)

export default function Download() {
    return (
        <main className="container mx-auto flex flex-col gap-8 p-4 sm:p-10">
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
            <div className="mx-auto grid grid-cols-1 grid-rows-2 gap-8 p-2 xs:grid-cols-[1fr_2fr] xs:grid-rows-1 lg:max-w-lg">
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
                    <div className="flex h-10 gap-2 self-start">
                        <a
                            href={buildFileHref(brochurePath)}
                            download="第79回灘校文化祭『weave』 パンフレット.pdf"
                            className="inline-flex items-center gap-1 rounded-md bg-theme px-4 py-2 text-white shadow-md transition-colors hover:bg-theme/90"
                        >
                            <HiDownload className="size-5 shrink-0" />
                            <span className="shrink whitespace-nowrap">
                                ダウンロード ({brochureFileSize})
                            </span>
                        </a>
                        <a
                            href={buildFileHref(brochurePath)}
                            className="grid aspect-square h-full place-content-center rounded-md bg-theme text-white shadow-md transition-colors hover:bg-theme/90"
                            target="_blank"
                            title="ダウンロードせずファイルを開く"
                            aria-label="ダウンロードせずファイルを開く"
                            rel="noopener noreferrer"
                        >
                            <HiExternalLink className="size-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto grid w-full gap-x-8 gap-y-4 lg:grid-cols-2">
                {[...fileList]
                    .toSorted(([, a], [, b]) => a.length - b.length)
                    .map(([circleId, files]) => (
                        <section key={circleId}>
                            <h2 className="flex items-center gap-2 break-keep">
                                <div className="flex size-12 items-center justify-center rounded-md">
                                    <HiHashtag className="size-6" />
                                </div>
                                <span className="inline-flex gap-2 text-xl font-bold">
                                    {circleMap[circleId]}
                                </span>
                            </h2>
                            <ul className="flex w-full flex-col gap-4 px-8 py-4">
                                {files.map((file) => (
                                    <li key={file.href} className="flex justify-between">
                                        <h3 className="inline-flex items-center whitespace-nowrap break-keep text-lg">
                                            {file.title}
                                        </h3>
                                        <DownloadButton
                                            filesize={file.filesize}
                                            href={file.href}
                                            download={file.filename}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
            </div>
        </main>
    )
}
