import Head from "next/head";
import Link from "next/link";

const BlogPage = () => {
    const posts = [
        {
            slug: "why-independent-vehicle-inspections-matter",
            title: "Why Independent Vehicle Inspections Matter When Buying Used Cars",
            excerpt: "In India's booming used car market, the difference between a great deal and a costly mistake often comes down to one thing: knowing the true condition of the vehicle before you buy.",
            date: "January 16, 2026",
            readTime: "5 min read",
            category: "Buyer's Guide",
        },
    ];

    return (
        <>
            <Head>
                <title>Blog - Used Car Buying Tips & Insights | Carvohub</title>
                <meta
                    name="description"
                    content="Expert insights on buying used cars in India. Learn about vehicle inspections, what to look for, and how to avoid costly mistakes."
                />
                <meta name="keywords" content="used car buying tips, vehicle inspection guide, car buying India, pre-purchase inspection tips" />
                <link rel="canonical" href="https://carvohub.com/blog" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    {/* Section Header */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-3">
                            <span className="text-gray-900 dark:text-white">insights &</span>
                        </h1>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-gray-400 dark:text-gray-600">guides</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                            Expert advice on buying used cars and understanding vehicle inspections.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-950 hover:border-blue-200 dark:hover:border-blue-900 transition-all"
                            >
                                <div className="text-xs font-medium tracking-widest uppercase text-blue-500 mb-4">
                                    {post.category}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-gray-500 dark:text-gray-500">
                                        {post.date}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-500">
                                        {post.readTime}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
