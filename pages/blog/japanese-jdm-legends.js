import Head from "next/head";
import Link from "next/link";

const BlogPost = () => {
    const post = {
        title: "JDM Legends: Japanese Cars That Conquered the World",
        date: "January 11, 2026",
        readTime: "9 min read",
        category: "Automotive History",
        heroImage: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=1200&q=80",
    };

    const legends = [
        {
            name: "Nissan Skyline GT-R (R34)",
            era: "1999-2002",
            image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80",
            engine: "RB26DETT Twin-Turbo Inline-6",
            story: "The final evolution of the Skyline GT-R before the R35 era. Its advanced ATTESA all-wheel drive system and legendary RB26 engine made it a dominant force in both street racing culture and professional motorsports.",
        },
        {
            name: "Toyota Supra MK4",
            era: "1993-2002",
            image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800&q=80",
            engine: "2JZ-GTE Twin-Turbo Inline-6",
            story: "Thanks to Fast & Furious, the Supra became a cultural icon. But its reputation was built on the bulletproof 2JZ engine that could handle over 1000 HP with stock internals.",
        },
        {
            name: "Mazda RX-7 FD",
            era: "1992-2002",
            image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
            engine: "13B-REW Twin-Turbo Rotary",
            story: "The most beautiful Japanese sports car ever made. Its sequential twin-turbo rotary engine and perfect weight distribution made it a canyon carving legend.",
        },
        {
            name: "Honda NSX",
            era: "1990-2005",
            image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
            engine: "C30A/C32B VTEC V6",
            story: "Ayrton Senna helped develop it. Ferrari was terrified of it. The NSX proved that mid-engine supercars could be reliable daily drivers while still being track weapons.",
        },
        {
            name: "Mitsubishi Lancer Evolution",
            era: "1992-2016",
            image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
            engine: "4G63 Turbo Inline-4",
            story: "Born from rally homologation, the Evo became the affordable supercar killer. Its advanced AWD system and tunability made it a favorite among enthusiasts worldwide.",
        },
    ];

    return (
        <>
            <Head>
                <title>{post.title} | Carvohub Blog</title>
                <meta
                    name="description"
                    content="Discover the legendary JDM cars that shaped automotive culture. From the Skyline GT-R to the Honda NSX, these Japanese icons changed everything."
                />
                <meta name="keywords" content="JDM cars, Japanese sports cars, Skyline GT-R, Toyota Supra, Honda NSX, Mazda RX-7" />
                <link rel="canonical" href="https://carvohub.com/blog/japanese-jdm-legends" />
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
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            The 1990s were the golden age of Japanese performance cars. While Western manufacturers
                            focused on luxury, Japan was building some of the most capable, tuneable, and exciting
                            sports cars the world had ever seen. These are the legends that defined JDM culture.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 mb-12 border border-red-200 dark:border-red-800">
                            <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">What is JDM?</h3>
                            <p className="text-red-700 dark:text-red-400 text-sm">
                                JDM stands for "Japanese Domestic Market"—cars originally built and sold in Japan.
                                These vehicles often had specifications and features not available in export markets,
                                making authentic JDM examples highly sought after by collectors.
                            </p>
                        </div>

                        {legends.map((car, idx) => (
                            <div key={idx} className="mb-16">
                                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-2xl">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <div className="text-red-400 text-sm font-medium">{car.era}</div>
                                        <div className="text-white font-bold">{car.engine}</div>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {car.name}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {car.story}
                                </p>

                                {idx < legends.length - 1 && (
                                    <div className="border-b border-gray-200 dark:border-gray-800 my-8" />
                                )}
                            </div>
                        ))}

                        <div className="grid md:grid-cols-3 gap-4 my-12">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">276 HP</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Gentleman's Agreement Limit</div>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1989-2004</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Golden Era of JDM</div>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">25 Years</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">US Import Rule</div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
                            The Legacy Lives On
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            These cars didn't just perform well—they created a culture. From Initial D to
                            The Fast and the Furious, JDM legends captured imaginations worldwide. Today,
                            pristine examples command six-figure prices, and the tuning scene remains vibrant.
                        </p>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Whether you're into JDM legends or reliable daily drivers, proper inspection matters.
                                <Link href="/vehicle-reports" className="text-blue-500 hover:text-blue-600 ml-1">
                                    Check our reports
                                </Link>
                                {" "}to see how we evaluate vehicles.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
