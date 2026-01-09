import SectionWrapper from "../SectionWrapper"

const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Rajesh Mehta",
            title: "Owner, Mehta Motors, Mumbai",
            quote: "Running a small dealership with 10-15 cars monthly was challenging. Carvohub transformed our inventory management completely. Now we track service history, insurance, and customer preferences seamlessly. Our sales efficiency improved by 40% in just three months!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Vikram Singh",
            title: "Managing Director, Capital Auto Hub, Delhi",
            quote: "With 50+ cars moving through our dealership monthly, documentation was overwhelming. Carvohub's AI-powered system handles everything from PUC certificates to RC transfers. Our team saves 15 hours weekly, and customers love the transparency.",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Arjun Krishnan",
            title: "CEO, DrivePoint Auto Chain, Bangalore",
            quote: "Managing multiple locations across Bangalore required a unified system. Carvohub scaled perfectly with our growth. Real-time inventory sync, centralized documentation, and detailed analytics helped us expand from 3 to 7 showrooms in two years.",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Priya Deshmukh",
            title: "Independent Dealer, Pune",
            quote: "As an independent dealer, building trust with customers is crucial. Carvohub helps me maintain complete vehicle histories and share them transparently. My repeat customer rate doubled, and referrals increased by 60%. It's been a game-changer!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Subramaniam Iyer",
            title: "Third Generation Owner, Iyer & Sons Motors, Chennai",
            quote: "Our family has been in the car business for 30 years. Carvohub brought our traditional dealership into the digital age without losing our personal touch. The system respects our processes while modernizing our operations. Truly remarkable!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Neha Reddy",
            title: "Founder, NextGen Autos, Hyderabad",
            quote: "Starting a new dealership in Hyderabad's competitive market was daunting. Carvohub gave us enterprise-level tools from day one. The automated documentation and customer follow-up system helped us build credibility fast. We're already profitable in year one!",
            rating: 5
        },
    ]

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400 dark:text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="custom-screen">
                <div className="max-w-2xl sm:text-center md:mx-auto mb-12">
                    <h2 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
                        Trusted by Dealerships Across India
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        See why leading dealerships across major Indian cities trust Carvohub to manage their operations
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-500 transition-all duration-300"
                        >
                            <StarRating rating={item.rating} />
                            <blockquote className="mt-4">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    "{item.quote}"
                                </p>
                            </blockquote>
                            <div className="flex items-center gap-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <img
                                    src={item.avatar}
                                    className="w-12 h-12 object-cover rounded-full"
                                    alt={item.name}
                                />
                                <div>
                                    <span className="block text-gray-800 dark:text-gray-100 font-semibold">{item.name}</span>
                                    <span className="block text-gray-500 dark:text-gray-400 text-sm mt-0.5">{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials
