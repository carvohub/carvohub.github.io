import Head from "next/head";
import Link from "next/link";

const vehicleReportsPage = () => {
    const reports = [
        {
            id: "KIASONKA52X7M4Q9R2C8A6FZ0WBTD",
            title: "2024 Kia Sonet Diesel",
            variant: "GT Line",
            odometer: "31,293 KMS",
            inspectionDate: "09/01/2026",
            thumbnail: "/images/reports/KIASONKA52X7M4Q9R2C8A6FZ0WBTD/car-front.jpeg",
        },
        // {
        //     id: "SKOOCTKA05VRS230K9X7M4Q2A8Z",
        //     title: "2019 Skoda Octavia Petrol",
        //     variant: "VRS 230",
        //     odometer: "48,239 KMS",
        //     inspectionDate: "14/01/2026",
        //     thumbnail: "/images/reports/SKOOCTKA05VRS230K9X7M4Q2A8Z/car-front.jpeg",
        // },
    ];

    return (
        <>
            <Head>
                <title>Vehicle Reports | Carvohub</title>
                <meta
                    name="description"
                    content="Browse AI-powered car inspection reports. See detailed vehicle assessments with photos, condition ratings, and comprehensive analysis."
                />
            </Head>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Vehicle Reports
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Each report includes detailed photos, condition assessments, and comprehensive vehicle analysis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reports.map((report) => (
                            <Link
                                key={report.id}
                                href={`/vehicle-reports/${report.id}`}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                            >
                                <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <img
                                        src={report.thumbnail}
                                        alt={`${report.title} ${report.variant}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-5">
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {report.title}
                                    </h2>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                                        {report.variant}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{report.odometer}</span>
                                        <span>{report.inspectionDate}</span>
                                    </div>
                                </div>

                                <div className="px-5 pb-5">
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                                            View Report
                                        </span>
                                        <svg
                                            className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {reports.length === 0 && (
                        <div className="text-center py-16">
                            <svg
                                className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                No reports yet
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check back soon for inspection reports.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default vehicleReportsPage;
