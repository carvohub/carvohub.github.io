import SectionWrapper from "../SectionWrapper"

const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Multi-Vehicle Garage",
            desc: "Manage your entire fleet in one place. From daily drivers to weekend classics, keep track of every vehicle with detailed profiles and instant access to all information."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Document Vault",
            desc: "Store and organize all your vehicle documents. Insurance policies, registration, purchase receipts, and service records - all securely stored and easily accessible."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "AI-Powered Insights",
            desc: "Get intelligent recommendations based on your driving habits, vehicle age, and maintenance history. Our AI predicts issues before they become problems."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Maintenance Tracking",
            desc: "Never miss an oil change or tire rotation again. Smart reminders based on mileage, time, and manufacturer recommendations keep your vehicles in top shape."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Value Tracking",
            desc: "Monitor your vehicle's market value over time. Get real-time estimates based on condition, mileage, and market trends to make informed decisions."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            ),
            title: "Smart Reminders",
            desc: "Insurance renewals, registration deadlines, and warranty expirations - get notified at the right time. Never pay late fees or drive uninsured again."
        },
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Everything You Need to{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-green-500 bg-clip-text text-transparent">
                            Manage Your Garage
                        </span>
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Powerful features designed for car enthusiasts, collectors, and anyone who wants to keep their vehicles in perfect condition.
                    </p>
                </div>
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <li key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-green-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="mt-4 text-lg text-gray-800 font-semibold">
                                {item.title}
                            </h4>
                            <p className="mt-2 text-gray-600">
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
