import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "Why Independent Vehicle Inspections Matter When Buying Used Cars",
        date: "January 16, 2026",
        readTime: "5 min read",
        category: "Buyer's Guide",
    };

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Learn why independent vehicle inspections are crucial when buying used cars in India. Understand how to avoid costly mistakes and make informed decisions."
                />
                <meta name="keywords" content="vehicle inspection, used car buying, pre-purchase inspection, car buying tips India" />
                <link rel="canonical" href="https://carvohub.com/blog/why-independent-vehicle-inspections-matter" />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content="Learn why independent vehicle inspections are crucial when buying used cars in India." />
                <meta property="og:type" content="article" />

                {/* Article metadata */}
                <meta property="article:published_time" content="2026-01-16" />
                <meta property="article:section" content="Buyer's Guide" />
            </Head>

            <article className="min-h-screen bg-white dark:bg-gray-950">
                <div className="max-w-3xl mx-auto px-6 py-20">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="text-xs font-medium tracking-widest uppercase text-blue-500 mb-4">
                            {post.category}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            In India's booming used car market, the difference between a great deal and a costly mistake
                            often comes down to one thing: knowing the true condition of the vehicle before you buy.
                            While the seller may promise a well-maintained car, the reality can be starkly different
                            once you've signed the papers.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            The Hidden Risks of Used Car Purchases
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Every year, thousands of buyers in India face unexpected repair bills within months of
                            purchasing a used car. From undisclosed accident history to hidden mechanical issues,
                            the problems that surface after a purchase can turn what seemed like a bargain into a
                            financial burden.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Common issues that go undetected include:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Previous accident damage that's been cosmetically repaired",
                                "Odometer tampering to show lower mileage",
                                "Engine or transmission problems masked by quick fixes",
                                "Flood damage that leads to electrical issues",
                                "Worn out components that need immediate replacement",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            Why Independent Inspections Are Different
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Unlike dealer inspections or seller-provided reports, an independent vehicle inspection
                            has no vested interest in the sale going through. This objectivity is crucial because
                            it means the inspector's only job is to give you the truth about the car's condition.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            A comprehensive independent inspection covers:
                        </p>

                        <div className="grid gap-4 my-8">
                            {[
                                { title: "Exterior Assessment", desc: "Paint condition, body panel alignment, rust, scratches, and signs of previous repairs" },
                                { title: "Mechanical Evaluation", desc: "Engine health, transmission performance, suspension, brakes, and steering" },
                                { title: "Interior Inspection", desc: "Seats, dashboard, electronics, AC, and all controls" },
                                { title: "Document Verification", desc: "Registration, insurance, service history, and ownership records" },
                            ].map((item, idx) => (
                                <div key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            The Carvohub Approach
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            At Carvohub, we believe every used car buyer deserves access to professional, unbiased
                            vehicle assessments. Our inspection process is designed to give you complete transparency:
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            We physically inspect each vehicle using a standardized, photo and video-backed process.
                            Every finding is documented with evidence, so you can see exactly what we see. Our reports
                            highlight not just the current condition, but also potential future concerns and maintenance
                            requirements.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Most importantly, our reports are shared with all parties involved. This transparency
                            builds trust and ensures everyone—buyer and seller alike—is working with the same information.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            Making Informed Decisions
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            An inspection report isn't just about finding problems—it's about making informed decisions.
                            Sometimes a car with minor issues is still a great buy at the right price. Other times,
                            what seems like a small concern could indicate larger underlying problems.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            With a detailed inspection report in hand, you can:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Negotiate a fair price based on the actual condition",
                                "Budget for any necessary repairs or maintenance",
                                "Walk away confidently if the issues are too significant",
                                "Proceed with peace of mind knowing exactly what you're buying",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Ready to buy a used car with confidence?
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    Browse our vehicle reports
                                </Link>
                                {" "}or{" "}
                                <Link href="mailto:hello@carvohub.com" className="text-blue-500 hover:text-blue-600">
                                    contact us
                                </Link>
                                {" "}to learn more about our inspection services.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
