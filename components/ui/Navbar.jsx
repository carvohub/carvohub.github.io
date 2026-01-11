import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Brand from './Brand'
import NavLink from './NavLink'

const Navbar = () => {
    const [state, setState] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const { events } = useRouter();

    const navigation = [
        { title: "Inspection Reports", path: "/sample-reports" },
        { title: "How It Works", path: "/#how-it-works" },
    ]

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", () => handleState());
        events.on("hashChangeStart", () => handleState());
    }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <nav className="w-full md:static md:text-sm">
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Brand />
                        <div className="md:hidden flex items-center gap-3">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>
                            )}
                            <button
                                role="button"
                                aria-label="Open the menu"
                                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                onClick={handleNavMenu}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="text-gray-700 dark:text-gray-300 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 dark:md:text-gray-400 md:font-medium">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="duration-150 hover:text-blue-600 dark:hover:text-blue-400">
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            {mounted && (
                                <li className="hidden md:block">
                                    <button
                                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-2"
                                        aria-label="Toggle theme"
                                    >
                                        {theme === 'dark' ? (
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    href="mailto:hello@carvohub.com"
                                    className="block font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 md:inline"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
