import NavLink from "./NavLink"

const Hero = () => (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="custom-screen py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-full text-sm text-blue-700 dark:text-blue-300 font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        AI-Powered Car Inspection Reports
                    </div>

                    <h1 className="text-4xl text-gray-800 dark:text-white font-extrabold sm:text-5xl lg:text-6xl leading-tight">
                        Generate{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            Professional Inspection Reports
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Generate comprehensive AI-powered car inspection reports in minutes using just video and photos.
                        Perfect for used car dealerships in India. Share instantly on all major listing platforms and with customers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-3 font-medium text-sm pt-4">
                        <NavLink
                            href="mailto:hello@carvohub.com"
                            className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-500/25"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Contact Us
                            </span>
                        </NavLink>
                        <NavLink
                            href="#how-it-works"
                            className="w-full sm:w-auto text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500"
                        >
                            See How It Works
                        </NavLink>
                    </div>

                    {/* Stats */}
                    <div className="pt-6 grid grid-cols-2 gap-6">
                        {[
                            { value: "5 Min", label: "Report Generation" },
                            { value: "AI-Powered", label: "Video Analysis" },
                            { value: "100+", label: "Parameters Checked" },
                            { value: "Shareable", label: "PDF Reports" },
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Mobile Phone Mockup */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Mobile Phone Frame */}
                        <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-white dark:bg-gray-100 rounded-[2.3rem] overflow-hidden">
                                {/* Status Bar */}
                                <div className="bg-blue-600 px-6 py-3 flex items-center justify-between">
                                    <span className="text-white text-xs font-semibold">9:41</span>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <div className="w-5 h-2.5 border border-white rounded-sm relative">
                                            <div className="absolute inset-0.5 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="bg-white px-4 py-3 border-b border-gray-200">
                                    <h3 className="text-gray-900 font-bold text-base">New Inspection</h3>
                                    <p className="text-gray-500 text-xs">2019 Honda City VX</p>
                                </div>

                                {/* Content Area */}
                                <div className="p-4 space-y-3 bg-gray-50">
                                    {/* Video Recording Card */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-gray-900 font-semibold text-sm">Recording Video</div>
                                                <div className="text-gray-500 text-xs">360° Inspection</div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                                        </div>
                                    </div>

                                    {/* AI Analysis Card */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <span className="text-blue-600 font-semibold text-xs">Analyzing...</span>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            Detecting exterior condition, interior quality, and mechanical issues
                                        </p>
                                    </div>

                                    {/* Report Preview Card */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                                        <div className="text-gray-900 font-semibold text-sm mb-2">Report Preview</div>
                                        <div className="space-y-2">
                                            {["Exterior: Excellent", "Interior: Good", "Engine: Verified"].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs">
                                                    <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Generate Button */}
                                    <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg text-sm shadow-lg">
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Floating Accent */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
