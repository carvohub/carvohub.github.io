import SectionWrapper from "../SectionWrapper"

const Capabilities = () => {
    const capabilities = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Family Sharing",
            desc: "Share vehicle access with family members. Everyone stays updated on maintenance schedules and can contribute to service logs."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Secure Cloud Backup",
            desc: "All your data is encrypted and backed up to the cloud. Access your garage from any device, anytime, with bank-level security."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Service Shop Finder",
            desc: "Find trusted mechanics and service centers near you. Read reviews, compare prices, and book appointments directly from the app."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Cost Analytics",
            desc: "Track every dollar spent on your vehicles. Get insights into total cost of ownership, fuel efficiency trends, and maintenance spending."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Service History Timeline",
            desc: "Visual timeline of all maintenance and repairs. Perfect for tracking warranties, proving vehicle history, and planning future services."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: "Expert AI Assistant",
            desc: "Chat with our AI to get answers about your vehicles. From troubleshooting warning lights to understanding service quotes."
        },
    ]

    return (
        <SectionWrapper>
            <div id="capabilities" className="custom-screen">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Powerful Capabilities for Every Driver
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Advanced tools that make vehicle management effortless
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, idx) => (
                        <div
                            key={idx}
                            className="group flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-none w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Capabilities
