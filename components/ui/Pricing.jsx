import SectionWrapper from "../SectionWrapper"
import NavLink from "./NavLink"

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            subtitle: "Small Dealerships",
            carLimit: "5 cars",
            price: "₹499",
            period: "/report pack",
            desc: "Perfect for small dealers starting their digital journey",
            features: [
                "5 inspection reports",
                "AI-powered analysis",
                "Shareable PDF reports",
                "Cross-platform compatibility",
                "Mobile app access",
                "Email support",
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Professional",
            subtitle: "Medium Dealerships",
            carLimit: "25 cars",
            price: "₹1,999",
            period: "/report pack",
            desc: "Most popular choice for growing dealerships",
            features: [
                "25 inspection reports",
                "AI-powered analysis",
                "Custom branded reports",
                "Priority processing",
                "WhatsApp & Email sharing",
                "Advanced defect detection",
                "Priority support",
                "Bulk upload capability",
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            subtitle: "Large Dealerships",
            carLimit: "Unlimited",
            price: "Custom",
            period: "pricing",
            desc: "Tailored solutions for enterprise-level operations",
            features: [
                "Unlimited inspection reports",
                "White-label solution",
                "Custom integrations & API access",
                "Dedicated account manager",
                "Custom AI model training",
                "Multi-location support",
                "24/7 priority support",
                "Analytics dashboard",
            ],
            cta: "Contact Sales",
            popular: false
        }
    ]

    return (
        <SectionWrapper>
            <div id="pricing" className="custom-screen">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
                        Simple, Transparent Pricing for Every Dealership
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Pay per report generated. No subscriptions, no hidden fees. Scale as you grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300 ${
                                plan.popular
                                    ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/30 scale-105'
                                    : 'border border-gray-200 dark:border-gray-700 hover:shadow-lg'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <div className="inline-block px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{plan.carLimit}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.subtitle}</p>

                                <div className="mt-6">
                                    <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">{plan.price}</span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 min-h-[40px]">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-8 min-h-[280px]">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <NavLink
                                href={plan.name === "Enterprise" ? "#contact" : "#download"}
                                className={`block w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${
                                    plan.popular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                {plan.cta}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Additional pricing info */}
                <div className="mt-12 text-center max-w-2xl mx-auto">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Flexible Payment Options
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Buy report packs as you need them. No monthly commitments. Unused reports never expire.
                            Volume discounts available for bulk purchases.
                        </p>
                    </div>
                </div>

                {/* Trust badges */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                        Trusted by dealerships across India
                    </p>
                    <div className="flex items-center justify-center gap-8 text-gray-500 dark:text-gray-400 flex-wrap">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-sm font-medium">Secure payments</span>
                        </div>

                        <span className="text-gray-300 dark:text-gray-600">|</span>

                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                            </svg>
                            <span className="text-sm font-medium">Made in India</span>
                        </div>

                        <span className="text-gray-300 dark:text-gray-600">|</span>

                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium">24-48 hour processing</span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-6 opacity-60">
                        <span className="text-xs text-gray-400 dark:text-gray-500">GST Invoices Provided</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">ISO 27001 Certified</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Pricing
