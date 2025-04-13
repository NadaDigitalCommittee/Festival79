import { TabButton } from "@/components/TabButton"

export default function EventsTabSwitcher() {
    return (
        <div className="grid grid-cols-6 gap-2">
            <TabButton href="/events/court">中庭</TabButton>
            <TabButton href="/events/multimedia">視聴覚</TabButton>
            <TabButton href="/events/hall">大講義</TabButton>
            <TabButton href="/events/live">本館ライブ</TabButton>
        </div>
    )
}
