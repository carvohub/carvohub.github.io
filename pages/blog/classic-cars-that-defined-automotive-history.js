import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "10 Classic Cars That Defined Automotive History",
        date: "January 14, 2026",
        readTime: "10 min read",
        category: "Automotive History",
        heroImage: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=1200&q=80",
    };

    const classics = [
        {
            name: "1964 Ford Mustang",
            image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
            story: "The car that invented the 'pony car' segment. When Ford unveiled the Mustang at the 1964 World's Fair, they had no idea it would sell over 400,000 units in its first year, shattering all expectations.",
            legacy: "Created an entirely new market segment and inspired competitors like the Camaro and Challenger.",
        },
        {
            name: "1961 Jaguar E-Type",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            story: "Enzo Ferrari himself called it 'the most beautiful car ever made.' The E-Type combined stunning looks with 150 mph performance at a price that undercut its rivals.",
            legacy: "Set the standard for sports car design that influences manufacturers to this day.",
        },
        {
            name: "1955 Mercedes-Benz 300SL Gullwing",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            story: "The world's first production car with fuel injection and those iconic doors that opened upward like wings. It was the fastest production car of its era.",
            legacy: "Pioneered technologies that became standard in modern sports cars.",
        },
        {
            name: "1963 Chevrolet Corvette Sting Ray",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            story: "The second-generation Corvette introduced the split-window coupe design that lasted only one year, making it one of the most collectible American cars ever.",
            legacy: "Established the Corvette as a genuine sports car, not just a boulevard cruiser.",
        },
        {
            name: "1969 Dodge Charger R/T",
            image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80",
            story: "The epitome of American muscle. With its 440 Magnum or 426 Hemi V8, the Charger became an icon of the muscle car era and later gained fame as the General Lee.",
            legacy: "Represents the peak of American muscle car power and design.",
        },
    ];

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Explore 10 legendary classic cars that shaped the automotive industry. From the Ford Mustang to the Jaguar E-Type, these icons defined generations."
                />
                <meta name="keywords" content="classic cars, automotive history, vintage cars, iconic automobiles" />
                <link rel="canonical" href="https://carvohub.com/blog/classic-cars-that-defined-automotive-history" />
            </Head>

            <article className="min-h-screen bg-white dark:bg-gray-950">
                {/* Hero Image */}
                <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-950 z-10" />
                    <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-end">
                        <div className="max-w-3xl mx-auto px-6 pb-16 w-full">
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
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                            Some cars transcend their purpose as mere transportation. They become cultural icons,
                            symbols of their era, and objects of desire that captivate enthusiasts for generations.
                            Here are the machines that didn't just drive on roads—they drove history forward.
                        </p>

                        {classics.map((car, idx) => (
                            <div key={idx} className="mb-16">
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-xl">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {car.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {car.story}
                                </p>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 pl-4 py-2">
                                    <p className="text-sm text-blue-700 dark:text-blue-400 font-medium">
                                        Legacy: {car.legacy}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 my-12">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                The Enduring Appeal of Classics
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                What makes a car truly classic? It's not just age or rarity—it's the perfect
                                combination of design, engineering, and cultural timing. These cars captured
                                something essential about their era while creating designs that remain timeless.
                            </p>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                While classics have their charm, modern used cars can be equally rewarding with proper inspection.
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    See our vehicle reports
                                </Link>
                                {" "}to understand what makes a car worth buying.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
