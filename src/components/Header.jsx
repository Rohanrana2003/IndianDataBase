import { useState } from "react";
import { Link } from 'react-router'
import { headerButtons } from "../utils/constants";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className="relative font-serif">
            {/* Header Section */}
            <header className="fixed w-full top-0 left-0 right-0 bg-gray-200 shadow-lg z-50">
                <nav className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to='/' onClick={handleClick}
                        className=" text-[#492385] flex items-center gap-3 text-xl md:text-2xl lg:text-[26px] font-bold">
                        <span className="">Younedia Database</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#492385]"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    <div className={`md:flex space-x-8 items-center absolute md:relative top-full left-0 right-0 bg-gray-200 md:bg-transparent transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:opacity-100'} overflow-hidden md:max-h-full`}>
                        <div className="container mx-auto max-w-6xl px-4 py-4 md:py-0 flex flex-col md:flex-row items-start md:items-center md:gap-6 space-y-4 md:space-y-0">
                            {
                                headerButtons.map(button => (
                                    <Link to={button.link} key={button.id} onClick={handleClick} className="text-base md:text-lg md:font-semibold text-[#492385] hover:text-[#19043b] ">
                                        {button.title}
                                    </Link>
                                ))
                            }

                            <Link to='shop' onClick={handleClick}
                                className=" bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-2 md:mt-0 md:ml-4">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header