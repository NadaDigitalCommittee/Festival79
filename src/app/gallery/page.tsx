import { WeaveLogo } from "@/components/WeaveLogo"
import { WeaveLogotype } from "@/components/WeaveLogotype"

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
                        href="/gallery/pamphlet.pdf"
                        download="第79回灘校文化祭『weave』 パンフレット.pdf"
                        className="self-start rounded-md bg-theme px-4 py-2 text-white"
                    >
                        Download
                    </a>
                </div>
            </div>
        </main>
    )
}
