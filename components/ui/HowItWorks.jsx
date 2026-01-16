import { useEffect, useRef } from "react"

const HowItWorks = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

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
        <section ref={sectionRef} id="how-it-works" className="bg-gray-50 dark:bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header - Split style */}
                <div className="mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                    <h2 className="text-5xl md:text-6xl font-bold mb-1">
                        <span className="text-gray-900 dark:text-white">How It</span>
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold">
                        <span className="text-gray-400 dark:text-gray-500">Works</span>
                    </h3>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, idx) => (
                        <div
                            key={idx}
                            className={`group border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-950 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-8`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
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

            <style jsx>{`
                .animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    )
}

export default HowItWorks
