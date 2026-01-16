import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "Top 10 Most Reliable Used Cars to Buy in India (2025)",
        date: "January 15, 2026",
        readTime: "8 min read",
        category: "Buyer's Guide",
        heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    };

    const cars = [
        {
            rank: 1,
            name: "Maruti Suzuki Swift",
            years: "2018-2023",
            image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
            pros: ["Excellent fuel efficiency", "Low maintenance costs", "Abundant spare parts"],
            cons: ["Limited rear seat space", "Basic safety in older models"],
        },
        {
            rank: 2,
            name: "Honda City",
            years: "2017-2023",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
            pros: ["Premium build quality", "Refined engine", "Strong resale value"],
            cons: ["Higher maintenance cost", "Premium pricing"],
        },
        {
            rank: 3,
            name: "Hyundai Creta",
            years: "2018-2023",
            image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            pros: ["Feature-rich", "Comfortable ride", "Good ground clearance"],
            cons: ["Average fuel economy", "Rear seat AC effectiveness"],
        },
        {
            rank: 4,
            name: "Toyota Innova Crysta",
            years: "2016-2023",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            pros: ["Legendary reliability", "7-seater comfort", "Excellent resale"],
            cons: ["High initial cost", "Large turning radius"],
        },
        {
            rank: 5,
            name: "Maruti Suzuki Baleno",
            years: "2019-2023",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
            pros: ["Spacious cabin", "Good features", "Efficient engines"],
            cons: ["Firm ride quality", "Basic interiors in lower variants"],
        },
    ];

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Discover the top 10 most reliable used cars to buy in India. Our expert analysis covers reliability, maintenance costs, and resale value."
                />
                <meta name="keywords" content="reliable used cars India, best second hand cars, used car buying guide 2025" />
                <link rel="canonical" href="https://carvohub.com/blog/top-10-reliable-used-cars-india-2025" />
            </Head>

            <article className="min-h-screen bg-white dark:bg-gray-950">
                {/* Hero Image */}
                <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-950 z-10" />
                    <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-end">
                        <div className="max-w-3xl mx-auto px-6 pb-12 w-full">
                            <div className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-4">
                                {post.category}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-white/70">
                                <span>{post.date}</span>
                                <span>·</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-6 py-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Buying a used car in India can be a smart financial decision, but choosing the right model
                            is crucial. We've analyzed thousands of inspection reports, maintenance records, and owner
                            feedback to bring you the definitive list of India's most reliable used cars.
                        </p>

                        {cars.map((car) => (
                            <div key={car.rank} className="mb-12 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                            {car.rank}
                                        </span>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{car.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Best years: {car.years}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Pros</h4>
                                            <ul className="space-y-1">
                                                {car.pros.map((pro, idx) => (
                                                    <li key={idx} className="text-sm text-green-600 dark:text-green-500 flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-green-500 rounded-full" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                                            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Cons</h4>
                                            <ul className="space-y-1">
                                                {car.cons.map((con, idx) => (
                                                    <li key={idx} className="text-sm text-amber-600 dark:text-amber-500 flex items-center gap-2">
                                                        <span className="w-1 h-1 bg-amber-500 rounded-full" />
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Before buying any used car, always get an independent inspection.
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    View our inspection reports
                                </Link>
                                {" "}to see how thorough assessments can protect your investment.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
