import SectionWrapper from "../SectionWrapper"
import NavLink from "./NavLink"

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Add Your Vehicles",
            desc: "Start by adding your vehicles to your digital garage. Enter basic info or scan your VIN for automatic details. Import service records or start fresh.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
        {
            step: "02",
            title: "Upload Documents",
            desc: "Snap photos of your insurance cards, registration, and receipts. Our AI automatically categorizes and extracts key information like expiration dates.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            step: "03",
            title: "Get AI Insights",
            desc: "Our AI analyzes your vehicle data, driving patterns, and maintenance history to provide personalized recommendations and predictive maintenance alerts.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            step: "04",
            title: "Stay On Top",
            desc: "Receive timely reminders for maintenance, document renewals, and more. Track costs, monitor value, and keep your entire garage running smoothly.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ]

    return (
        <SectionWrapper id="how-it-works" className="pb-0">
            <div className="custom-screen">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        How Carvohub Works
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Get started in minutes and take control of your vehicle management
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-500"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 h-full">
                                    {/* Step number */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-gradient-to-br from-indigo-600 to-green-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Garage Management?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of car enthusiasts who trust Carvohub to keep their vehicles organized and maintained.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <NavLink
                                href="#download"
                                className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 font-semibold shadow-lg"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download for Free
                                </span>
                            </NavLink>
                            <NavLink
                                href="#features"
                                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10"
                            >
                                Learn More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HowItWorks
