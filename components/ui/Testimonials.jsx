import SectionWrapper from "../SectionWrapper"

const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Marcus Chen",
            title: "Car Collector • 12 vehicles",
            quote: "Managing a dozen cars used to be a nightmare. Carvohub changed everything. Now I have all my insurance docs, service records, and maintenance schedules in one place. The AI even reminded me about a recall I missed!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Sarah Mitchell",
            title: "Family of 4 • 3 vehicles",
            quote: "As a busy mom, I don't have time to remember oil changes and registration renewals. Carvohub handles it all. My husband and I share access to our family vehicles and everyone stays on the same page.",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "David Park",
            title: "Classic Car Enthusiast",
            quote: "I restore vintage cars and Carvohub is perfect for tracking parts, documenting restoration progress, and maintaining detailed service histories. When I sell, buyers love the comprehensive records.",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Emily Rodriguez",
            title: "First-time Car Owner",
            quote: "I had no idea what maintenance my car needed. Carvohub's AI explained everything in simple terms and set up a maintenance schedule for me. It's like having a car-savvy friend in my pocket!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "James Wilson",
            title: "Small Fleet Owner • 8 vehicles",
            quote: "Running a small delivery business means staying on top of multiple vehicles. Carvohub's cost tracking saved us thousands by identifying which vehicles were becoming money pits. Invaluable tool!",
            rating: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Lisa Thompson",
            title: "Car Enthusiast & DIY Mechanic",
            quote: "I do most of my own maintenance and Carvohub helps me track every part I've replaced, every upgrade I've made. The service history export is perfect for when I need to reference past work.",
            rating: 5
        },
    ]

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Loved by Car Owners Everywhere
                    </h2>
                    <p className="mt-3 text-gray-600">
                        See why thousands of drivers trust Carvohub to manage their vehicles
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
                        >
                            <StarRating rating={item.rating} />
                            <blockquote className="mt-4">
                                <p className="text-gray-700 leading-relaxed">
                                    "{item.quote}"
                                </p>
                            </blockquote>
                            <div className="flex items-center gap-x-4 mt-6 pt-4 border-t border-gray-100">
                                <img
                                    src={item.avatar}
                                    className="w-12 h-12 object-cover rounded-full"
                                    alt={item.name}
                                />
                                <div>
                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                    <span className="block text-gray-500 text-sm mt-0.5">{item.title}</span>
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
