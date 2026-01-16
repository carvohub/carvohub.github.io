import SectionWrapper from "../SectionWrapper"
import NavLink from "./NavLink"

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Independent Inspection",
            desc: "We physically inspect the car using a standardized, photo and video backed process.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            step: "02",
            title: "Transparent Report",
            desc: "An immutable report highlights condition, risks, and key findings—shared with all parties",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            step: "03",
                title: "Buyer Guidance",
                desc: "Buyers receive clear guidance on what matters, what to question, and what to avoid.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            step: "04",
            title: "Fair Deal Closure",
            desc: "We step in only when a fair, fully disclosed deal makes sense.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            )
        }
    ]

    return (
        <SectionWrapper id="how-it-works" className="pb-0">
            <div className="custom-screen">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
                        How Carvohub Works
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Get started in minutes and take control of your vehicle management
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-500"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full">
                                    {/* Step number */}
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    )
}

export default HowItWorks
