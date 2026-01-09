const PlatformLogos = () => {
    const platforms = [
        "Cars24",
        "CarWale",
        "OLX Autos",
        "Spinny",
        "CarDekho",
        "Droom"
    ]

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
            <div className="custom-screen">
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Use your Carvohub report on all major Indian used car listings
                    </h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {platforms.map((platform, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200"
                        >
                            <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                                {platform}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PlatformLogos
