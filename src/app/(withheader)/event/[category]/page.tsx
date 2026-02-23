import { EventList, isEventCategory } from "@/components/EventList"
import { TabButton } from "@/components/TabButton"

type MaybePromise<T> = T | Promise<T>

export default async function Event({ params }: { params: MaybePromise<{ category?: string }> }) {
    const { category } = await params
    return (
        <main className="container mx-auto p-4 md:p-10">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
                <TabButton href="/event/court">中庭</TabButton>
                <TabButton href="/event/multimedia">視聴覚</TabButton>
                <TabButton href="/event/live">本館</TabButton>
                <TabButton href="/event/hall">大講義</TabButton>
                <TabButton href="/event/music">音楽室</TabButton>
                <TabButton href="/event/lecture">講義教室</TabButton>
            </div>
            {isEventCategory(category) ? (
                <div>
                    <EventList category={category} />
                </div>
            ) : (
                <div>
                    <span>Not Found Category {category}</span>
                </div>
            )}
        </main>
    )
}

export function generateStaticParams() {
    return ["court", "multimedia", "live", "hall", "music", "lecture"].map((v) => ({ category: v }))
}
