import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button>
                    <Menu />
                </button>
            </SheetTrigger>
            <SheetContent className='flex flex-col justify-center items-center text-center w-full m-auto p-auto'>
                <SheetHeader>
                    <div className="flex flex-col justify-center gap-4 items-center text-center w-full space-y-6">
                        <a href="/" className="text-lg text-secondary m-0 hover:text-white">Home</a>
                        <a href="/service" className="text-lg text-secondary m-0 hover:text-white ">Services</a>
                        <a href="/about" className="text-lg text-secondary m-0 hover:text-white ">About</a>
                        <a href="/contact" className="text-lg text-secondary m-0 hover:text-white ">Contact</a>
                    </div>

                </SheetHeader>
                <SheetFooter>
                    <button className="flex justify-center py-2 px-6 rounded-md transition bg-greendark hover:bg-greenish text-secondary">
                        Connect wallet
                    </button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
