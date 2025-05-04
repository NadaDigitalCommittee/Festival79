import { EventDateCounter } from "@/components/EventDateCounter"
import { Menu } from "@/components/Menu"

export const Header = () => {
    return (
        <header className="container sticky top-0 z-20 flex items-center justify-between bg-background p-4">
            <EventDateCounter />
            <Menu />
        </header>
    )
}
