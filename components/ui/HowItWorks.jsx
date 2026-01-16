const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Independent Inspection",
            desc: "We physically inspect the car using a standardized, photo and video backed process.",
        },
        {
            step: "02",
            title: "Transparent Report",
            desc: "An immutable report highlights condition, risks, and key findings—shared with all parties.",
        },
        {
            step: "03",
            title: "Buyer Guidance",
            desc: "Buyers receive clear guidance on what matters, what to question, and what to avoid.",
        },
        {
            step: "04",
            title: "Fair Deal Closure",
            desc: "We step in only when a fair, fully disclosed deal makes sense.",
        }
    ]

    return (
        <section id="how-it-works" className="bg-gray-50 dark:bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header - Split style */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        <span className="text-gray-900 dark:text-white">how it</span>
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <span className="text-gray-400 dark:text-gray-600">works</span>
                    </h3>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-950 hover:border-blue-200 dark:hover:border-blue-900 transition-all"
                        >
                            {/* Step number */}
                            <div className="text-xs font-medium tracking-widest uppercase text-blue-500 mb-4">
                                Step {item.step}
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {item.title}
                            </h4>

                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
