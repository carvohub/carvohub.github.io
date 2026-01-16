import Head from "next/head";
import Link from "next/link";

const VehicleReportsPage = () => {
    const reports = [
        {
            id: "KIASONKA52X7M4Q9R2C8A6FZ0WBTD",
            title: "2024 Kia Sonet Diesel",
            variant: "GT Line",
            odometer: "31,293 KMS",
            inspectionDate: "09/01/2026",
            thumbnail: "/images/reports/KIASONKA52X7M4Q9R2C8A6FZ0WBTD/car-front.jpeg",
        },
    ];

    return (
        <>
            <Head>
                <title>Vehicle Inspection Reports | Carvohub</title>
                <meta
                    name="description"
                    content="Browse comprehensive vehicle inspection reports. See detailed assessments with photos, condition ratings, and expert analysis for used cars in India."
                />
                <meta name="keywords" content="vehicle inspection reports, car condition reports, used car reports India, pre-purchase inspection" />
                <link rel="canonical" href="https://carvohub.com/vehicle-reports" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    {/* Section Header - Split style */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-3">
                            <span className="text-gray-900 dark:text-white">Vehicle</span>
                        </h1>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-gray-400 dark:text-gray-600">Reports</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                            Comprehensive inspection reports with photos, videos, and expert assessments.
                        </p>
                    </div>

                    {/* Reports Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reports.map((report) => (
                            <Link
                                key={report.id}
                                href={`/vehicle-reports/${report.id}`}
                                className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-950 hover:border-blue-200 dark:hover:border-blue-900 transition-all"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                                    <img
                                        src={report.thumbnail}
                                        alt={`${report.title} ${report.variant}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-xs font-medium tracking-widest uppercase text-blue-500 mb-2">
                                        Verified Inspection
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {report.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        {report.variant}
                                    </p>

                                    <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <span className="text-gray-500 dark:text-gray-500">
                                            {report.odometer}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-500">
                                            {report.inspectionDate}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {reports.length === 0 && (
                        <div className="text-center py-24">
                            <div className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                No reports yet
                            </h3>
                            <p className="text-gray-500 dark:text-gray-500">
                                Check back soon for inspection reports.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default VehicleReportsPage;
