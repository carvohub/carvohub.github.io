import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
    const post = {
        title: "What to Look for While Buying a Car in India",
        date: "January 19, 2026",
        readTime: "6 min read",
        category: "Buyer's Guide",
        heroImage:
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c8?w=1200&q=80",
        author: "Carvohub Team",
    };

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Planning to buy a new or used car in India? Learn how family size, usage, mileage, safety, and ownership period affect the right car choice."
                />
                <meta
                    name="keywords"
                    content="buying a car in india, car buying guide india, used car buying tips, new car checklist india"
                />
                <link
                    rel="canonical"
                    href="https://carvohub.com/blog/what-to-look-for-while-buying-a-car-india"
                />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content="Planning to buy a new or used car in India? Learn how family size, usage, mileage, safety, and ownership period affect the right car choice." />
                <meta property="og:image" content={post.heroImage} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <article className="min-h-screen bg-white dark:bg-gray-950">
                {/* HERO */}
                <header className="relative h-[60vh] min-h-[500px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-950 z-10" />
                    <Image
                        src={post.heroImage}
                        alt="Cars displayed at dealership in India"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
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
                                <time dateTime="2026-01-19">{post.date}</time>
                                <span aria-hidden="true">·</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                <div className="max-w-3xl mx-auto px-6 py-12">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                    </nav>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Buying a car in India is one of the biggest financial decisions most families make.
                            The right car is not the most expensive one, but the one that fits your lifestyle,
                            usage, and long-term ownership expectations.
                        </p>

                        <h2 id="family-size">1. Family Size</h2>
                        <p>
                            Your family size determines rear-seat comfort, boot space, and overall practicality.
                            Indian households often travel together, making space and ease of access critical.
                        </p>

                        <h2 id="main-use">2. Main Use</h2>
                        <p>
                            City driving requires compact dimensions, light steering, and good visibility.
                            Highway usage demands stability, braking confidence, and ride comfort.
                        </p>

                        <h2 id="intention-of-use">3. Intention of Use</h2>
                        <p>
                            Be honest about whether the car is a functional tool or an emotional purchase.
                            Problems arise when aspiration overrides daily usability.
                        </p>

                        <h2 id="status-symbol">4. Status Symbol</h2>
                        <p>
                            Cars often represent social standing in India. While brand image matters,
                            it should never compromise safety or reliability.
                        </p>

                        <h2 id="driving-performance">5. Driving Performance</h2>
                        <p>
                            Performance is not about speed alone. Throttle response, braking confidence,
                            suspension tuning, and steering feel define real-world comfort.
                        </p>

                        <h2 id="mileage-running-costs">6. Mileage &amp; Running Costs</h2>
                        <p>
                            Look beyond claimed mileage. Service costs, spare availability,
                            insurance premiums, and tyre replacements define real ownership cost.
                        </p>

                        <h2 id="safety">7. Safety</h2>
                        <p>
                            Safety is non-negotiable. Airbags, ABS, ESC, and proven crash-test ratings
                            protect you and your family, not the resale value.
                        </p>

                        <h2 id="ownership-period">8. Ownership Period</h2>
                        <p>
                            Long-term owners should prioritise reliability and service network.
                            Short-term owners should consider depreciation and resale value.
                        </p>

                        {/* FAQ SECTION */}
                        <section className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 my-12" aria-labelledby="faq-heading">
                            <h2 id="faq-heading" className="text-xl font-bold mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Is it better to buy a new or used car in India?</h3>
                                    <p className="text-gray-700 dark:text-gray-300 m-0">
                                        Used cars offer better value if inspected properly. New cars provide peace of mind
                                        but come with higher depreciation in the first 2–3 years.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">How important is a professional inspection?</h3>
                                    <p className="text-gray-700 dark:text-gray-300 m-0">
                                        Extremely important. Visual condition alone does not reveal mechanical,
                                        accident, or flood-related issues common in Indian used cars.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">What is the biggest mistake Indian car buyers make?</h3>
                                    <p className="text-gray-700 dark:text-gray-300 m-0">
                                        Buying based on emotion, discounts, or brand perception instead of real usage
                                        and long-term costs.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <aside className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400">
                                Need help making the right purchase?{" "}
                                <Link 
                                    href="/vehicle-reports" 
                                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-blue-500/30 hover:decoration-blue-500"
                                >
                                    Reach out to Carvohub for unbiased inspections and buyer guidance
                                </Link>
                                .
                            </p>
                        </aside>
                    </div>
                </div>
            </article>
        </>
    );
}