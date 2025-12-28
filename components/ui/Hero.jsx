import NavLink from "./NavLink"

const Hero = () => (
    <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="custom-screen py-20 md:py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm text-indigo-700 font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    AI-Powered Vehicle Management
                </div>

                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-5xl md:text-6xl leading-tight">
                    Your Personal{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-green-500 bg-clip-text text-transparent">
                        AI Garage Manager
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Track your vehicles, manage insurance and documents, monitor maintenance schedules,
                    and get AI-powered insights on value and future needs. All in one beautiful app.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-medium text-sm pt-4">
                    <NavLink
                        href="#download"
                        className="w-full sm:w-auto text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-lg shadow-indigo-500/25"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Free
                        </span>
                    </NavLink>
                    <NavLink
                        href="#features"
                        className="w-full sm:w-auto text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                    >
                        See How It Works
                    </NavLink>
                </div>

                {/* Stats */}
                <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {[
                        { value: "50K+", label: "Active Users" },
                        { value: "200K+", label: "Vehicles Tracked" },
                        { value: "4.9", label: "App Store Rating" },
                        { value: "99.9%", label: "Uptime" },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* App Preview */}
            <div className="mt-16 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="relative mx-auto max-w-5xl">
                    <div className="bg-gradient-to-br from-indigo-500 to-green-500 rounded-2xl p-1 shadow-2xl">
                        <div className="bg-gray-900 rounded-xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-3 gap-4">
                                    {/* Vehicle Card */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">2023 Tesla Model 3</div>
                                                <div className="text-gray-400 text-sm">Primary Vehicle</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Mileage</span>
                                                <span className="text-white">24,580 mi</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Next Service</span>
                                                <span className="text-green-400">In 2,420 mi</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Insights Card */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <span className="text-green-400 font-medium text-sm">AI Insight</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            Based on your driving patterns, consider rotating tires before your next road trip for optimal performance.
                                        </p>
                                    </div>

                                    {/* Documents Card */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="text-white font-medium mb-3">Documents</div>
                                        <div className="space-y-2">
                                            {["Insurance Policy", "Registration", "Service History"].map((doc, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm">
                                                    <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="text-gray-300">{doc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
