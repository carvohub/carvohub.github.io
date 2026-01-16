import Link from "next/link"

const Hero = () => (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-950/30 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
            {/* Badge */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-widest uppercase bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-500/20">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Independent Vehicle Reports
                </div>
            </div>

            {/* Main heading - split style */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4">
                <span className="text-gray-900 dark:text-white">Buy cars with</span>
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-8">
                <span className="text-gray-400 dark:text-gray-600">confidence</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed">
                Get comprehensive vehicle inspection reports with expert analysis.
                Make informed decisions and avoid costly mistakes when buying used cars.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                    href="/vehicle-reports"
                    className="px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                    View Reports
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                <Link
                    href="/#how-it-works"
                    className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                    How It Works
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200/50 dark:border-white/5">
                {[
                    { value: "100+", label: "Parameters Checked" },
                    { value: "Detailed", label: "Video Analysis" },
                    { value: "Expert", label: "Assessments" },
                    { value: "Instant", label: "Access" },
                ].map((stat, idx) => (
                    <div key={idx}>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-500">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Hero
