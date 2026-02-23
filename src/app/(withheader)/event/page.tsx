import Event from "@/app/(withheader)/event/[category]/page"

export default function DefaultEvent() {
    return <Event params={{ category: "court" }} />
}
