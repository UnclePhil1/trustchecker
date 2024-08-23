import { MobileNav } from "./mobileNav"

function Navbar() {

    return (
            <nav className="flex justify-between items-center p-6 text-white gap-4">
                <div className="flex items-center relative w-[160px] h-[30px]">
                   <img src='/images/trust.png' className='w-[160px] h-[160px] absolute -top-[65px] -left-6' />
                </div>
                <div className='md:hidden'>
                    <MobileNav />
                </div>
                <div className="hidden md:flex justify-center gap-4 items-center">
                    <a href="/" className="text-lg hover:text-gray-300">Home</a>
                    <a href="/service" className="text-lg hover:text-gray-300 ml-4">Services</a>
                    <a href="/about" className="text-lg hover:text-gray-300 ml-4">About</a>
                    <a href="/contact" className="text-lg hover:text-gray-300 ml-4">Contact</a>
                </div>
                <button className="hidden md:flex justify-center py-2 px-6 rounded-md transition bg-greendark hover:bg-greenish">
                   Connect wallet
                </button>
            </nav>
    )
}

export default Navbar
