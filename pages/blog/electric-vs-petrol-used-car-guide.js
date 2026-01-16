import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "Electric vs Petrol: The Complete Used Car Buyer's Guide",
        date: "January 13, 2026",
        readTime: "7 min read",
        category: "Buyer's Guide",
        heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
    };

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Should you buy a used electric car or stick with petrol? Compare costs, maintenance, range, and more in our comprehensive guide."
                />
                <meta name="keywords" content="electric car vs petrol, used EV buying guide, electric vehicle comparison" />
                <link rel="canonical" href="https://carvohub.com/blog/electric-vs-petrol-used-car-guide" />
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
                            The used car market is evolving rapidly. With electric vehicles now entering the
                            second-hand market in significant numbers, buyers face a new question: should you
                            go electric or stick with the familiar petrol engine?
                        </p>

                        {/* Comparison Grid */}
                        <div className="grid md:grid-cols-2 gap-6 my-12">
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">Electric Vehicles</h3>
                                <ul className="space-y-2 text-green-700 dark:text-green-400 text-sm">
                                    <li>Lower running costs (Rs. 1-2/km)</li>
                                    <li>Minimal maintenance</li>
                                    <li>Zero tailpipe emissions</li>
                                    <li>Instant torque delivery</li>
                                    <li>Government incentives</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
                                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">Petrol Vehicles</h3>
                                <ul className="space-y-2 text-amber-700 dark:text-amber-400 text-sm">
                                    <li>No range anxiety</li>
                                    <li>Quick refueling (5 minutes)</li>
                                    <li>Widespread service network</li>
                                    <li>Lower upfront cost</li>
                                    <li>Better resale predictability</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            Cost Comparison: The Real Numbers
                        </h2>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white">Factor</th>
                                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white">Electric</th>
                                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-gray-900 dark:text-white">Petrol</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 dark:text-gray-400 text-sm">
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Running Cost/km</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-green-600">Rs. 1-2</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Rs. 6-8</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Annual Maintenance</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-green-600">Rs. 5,000-10,000</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Rs. 15,000-25,000</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Battery/Engine Lifespan</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">8-10 years</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">15-20 years</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Depreciation (5 years)</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">50-60%</td>
                                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-green-600">35-45%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden my-12">
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                                alt="Car comparison"
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            What to Check When Buying Used EVs
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Used electric vehicles require different inspection criteria than traditional cars.
                            Battery health is the most critical factor—degraded batteries can cost lakhs to replace.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 pl-4 py-4 my-8">
                            <p className="text-blue-800 dark:text-blue-300 font-medium">
                                Key EV Inspection Points:
                            </p>
                            <ul className="text-blue-700 dark:text-blue-400 text-sm mt-2 space-y-1">
                                <li>• Battery State of Health (SoH) percentage</li>
                                <li>• Charging port condition and compatibility</li>
                                <li>• Motor and inverter health</li>
                                <li>• Software version and update history</li>
                                <li>• Cooling system for battery pack</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            Our Recommendation
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Choose electric if you have home charging capability, drive less than 150km daily,
                            and plan to keep the car for 5+ years. Stick with petrol if you frequently take
                            long trips, live in an apartment without charging access, or prefer a proven,
                            predictable ownership experience.
                        </p>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Whether you choose electric or petrol, an independent inspection is essential.
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    View our detailed reports
                                </Link>
                                {" "}to see how we assess both types of vehicles.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
