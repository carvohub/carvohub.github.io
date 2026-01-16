import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "The Greatest Supercars of All Time: Icons of Speed and Design",
        date: "January 12, 2026",
        readTime: "12 min read",
        category: "Automotive Legends",
        heroImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
    };

    const supercars = [
        {
            name: "McLaren F1",
            year: "1992",
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
            topSpeed: "386 km/h",
            power: "627 HP",
            description: "The ultimate driver's car. Gordon Murray created a masterpiece with a central driving position, gold-lined engine bay, and naturally aspirated BMW V12. It held the world speed record for production cars for over a decade.",
        },
        {
            name: "Lamborghini Countach",
            year: "1974",
            image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80",
            topSpeed: "295 km/h",
            power: "375-455 HP",
            description: "The car that defined supercar design for generations. Those scissor doors, the wedge shape, and aggressive stance made it the poster car for an entire generation of enthusiasts.",
        },
        {
            name: "Ferrari F40",
            year: "1987",
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            topSpeed: "324 km/h",
            power: "478 HP",
            description: "Enzo Ferrari's final masterpiece. Raw, uncompromising, and absolutely thrilling. No power steering, no ABS, just pure driving engagement wrapped in Kevlar and carbon fiber.",
        },
        {
            name: "Porsche 959",
            year: "1986",
            image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
            topSpeed: "317 km/h",
            power: "450 HP",
            description: "The tech showcase of its era. Twin-turbocharged flat-six, all-wheel drive, adjustable suspension, and tire pressure monitoring—technologies that wouldn't become common for decades.",
        },
        {
            name: "Bugatti Veyron",
            year: "2005",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            topSpeed: "408 km/h",
            power: "1001 HP",
            description: "When Volkswagen proved that 1000 horsepower and 400+ km/h were possible in a road car. The quad-turbo W16 engine remains an engineering marvel.",
        },
    ];

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Explore the greatest supercars ever made. From the McLaren F1 to the Bugatti Veyron, these machines redefined what's possible on four wheels."
                />
                <meta name="keywords" content="supercars, exotic cars, McLaren F1, Ferrari F40, Lamborghini, automotive legends" />
                <link rel="canonical" href="https://carvohub.com/blog/greatest-supercars-of-all-time" />
            </Head>

            <article className="min-h-screen bg-white dark:bg-gray-950">
                {/* Hero Image */}
                <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-950 z-10" />
                    <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-end">
                        <div className="max-w-3xl mx-auto px-6 pb-16 w-full">
                            <div className="text-xs font-medium tracking-widest uppercase text-red-400 mb-4">
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
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                            Supercars represent the pinnacle of automotive achievement—where engineering meets art,
                            and speed becomes sculpture. These are the machines that pushed boundaries, broke records,
                            and captured the imagination of enthusiasts worldwide.
                        </p>

                        {supercars.map((car, idx) => (
                            <div key={idx} className="mb-16">
                                <div className="relative rounded-2xl overflow-hidden mb-6 group">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="text-white font-bold">{car.year}</span>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    {car.name}
                                </h2>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{car.topSpeed}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Top Speed</div>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{car.power}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Power Output</div>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {car.description}
                                </p>

                                {idx < supercars.length - 1 && (
                                    <hr className="my-12 border-gray-200 dark:border-gray-800" />
                                )}
                            </div>
                        ))}

                        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 my-12 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                What Makes a Supercar "Super"?
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                                It's not just about speed or price. True supercars represent a moment when
                                engineers and designers pushed past perceived limits. They're the cars that
                                made other manufacturers say "we need to do better." Each one on this list
                                changed the game in some fundamental way.
                            </p>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                While supercars may be dreams for most, making smart decisions on everyday cars is achievable.
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    See our inspection reports
                                </Link>
                                {" "}to learn how we help buyers find their perfect ride.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
