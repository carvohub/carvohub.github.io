import Link from "next/link"
import { useEffect, useRef } from "react"

const FooterCTA = () => {
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

    return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-1 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                    <span className="text-gray-900 dark:text-white">Questions About</span>
                </h2>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
                    <span className="text-gray-400 dark:text-gray-500">Buying a Car?</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
                    Get an independent assessment of a car's real condition. Our standardized inspections
                    produce transparent, shareable reports that surface risks early and help buyers move
                    forward with clarity and confidence.
                </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <Link
                    href="mailto:hello@carvohub.com"
                    className="px-8 py-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                >
                    Contact Us
                </Link>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200/50 dark:border-white/5">
                {[
                    { title: "Independent Guide", desc: "Unbiased buyer's guide for every vehicle" },
                    { title: "Photo & Video Backed", desc: "Comprehensive visual documentation" },
                    { title: "Clear Risk Disclosure", desc: "Know what you're buying before you commit" },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                        style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-4"></div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
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

export default FooterCTA
