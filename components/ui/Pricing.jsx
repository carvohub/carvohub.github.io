import SectionWrapper from "../SectionWrapper"
import NavLink from "./NavLink"

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            desc: "Perfect for getting started with basic vehicle management",
            features: [
                "Up to 2 vehicles",
                "Document storage (100MB)",
                "Basic maintenance reminders",
                "Service history tracking",
                "Mobile app access",
            ],
            cta: "Get Started Free",
            popular: false
        },
        {
            name: "Pro",
            price: "$4.99",
            period: "/month",
            desc: "For car enthusiasts who want the full experience",
            features: [
                "Unlimited vehicles",
                "Unlimited document storage",
                "AI-powered insights & predictions",
                "Cost analytics & reporting",
                "Family sharing (up to 5 members)",
                "Vehicle value tracking",
                "Priority support",
            ],
            cta: "Start 14-Day Free Trial",
            popular: true
        },
        {
            name: "Fleet",
            price: "$19.99",
            period: "/month",
            desc: "For businesses managing multiple vehicles",
            features: [
                "Everything in Pro",
                "Up to 50 vehicles",
                "Team management",
                "Advanced reporting & exports",
                "API access",
                "Dedicated account manager",
                "Custom integrations",
            ],
            cta: "Contact Sales",
            popular: false
        }
    ]

    return (
        <SectionWrapper>
            <div id="pricing" className="custom-screen">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Start free and upgrade when you need more. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl p-8 ${
                                plan.popular
                                    ? 'border-2 border-indigo-500 shadow-xl shadow-indigo-500/10'
                                    : 'border border-gray-200'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-indigo-500 to-green-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">{plan.desc}</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <NavLink
                                href="#download"
                                className={`block w-full text-center font-medium ${
                                    plan.popular
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {plan.cta}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Trust badges */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 mb-4">Trusted payment processing</p>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <svg className="h-8" viewBox="0 0 50 50" fill="currentColor">
                            <path d="M25 2C12.318 2 2 12.318 2 25s10.318 23 23 23 23-10.318 23-23S37.682 2 25 2zm0 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S5 36.028 5 25 13.972 5 25 5z"/>
                            <path d="M25 10c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 3c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12z"/>
                        </svg>
                        <span className="text-gray-400">|</span>
                        <span className="text-sm">256-bit SSL Encryption</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-sm">30-day money back guarantee</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Pricing
