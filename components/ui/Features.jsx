import SectionWrapper from "../SectionWrapper"

const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            title: "AI Video Analysis",
            desc: "Analyze cars comprehensively through video recordings and photos. Our AI scans every angle to assess condition, identify issues, and generate detailed inspection data instantly."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Instant Report Generation",
            desc: "Generate professional, detailed inspection reports in under 5 minutes. Share comprehensive vehicle assessments with customers instantly, reducing turnaround time and accelerating sales."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            ),
            title: "Multi-Platform Sharing",
            desc: "Seamlessly share verified inspection reports across CarDekho, OLX Autos, Cars24, Spinny, and more. List your inventory on multiple platforms with one click."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Customer Trust",
            desc: "Build credibility and close deals faster with AI-verified inspection reports. Transparent, unbiased assessments give buyers confidence and differentiate your dealership from competitors."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Mobile App",
            desc: "Conduct inspections anywhere with our iOS and Android apps. Your sales team can perform AI-powered vehicle assessments on the go, at auctions, or during customer visits."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
            ),
            title: "Defect Detection",
            desc: "Advanced AI identifies scratches, dents, paint damage, and mechanical issues automatically. Get detailed defect reports with exact locations and severity ratings for accurate pricing."
        },
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600 dark:text-gray-400">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
                        Everything Your Dealership Needs{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            to Build Trust
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        AI-powered inspection tools designed for Indian used car dealerships. Build customer confidence, accelerate sales, and streamline operations.
                    </p>
                </div>
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <li key={idx} className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="mt-4 text-lg text-gray-800 dark:text-gray-100 font-semibold">
                                {item.title}
                            </h4>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features
