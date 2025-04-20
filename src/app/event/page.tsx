import Event from "@/app/event/[category]/page"

export default function DefaultEvent() {
    return <Event params={{ category: "court" }} />
}
