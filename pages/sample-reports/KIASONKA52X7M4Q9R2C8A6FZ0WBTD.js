import Head from "next/head";

const ReportPage = () => {
    const sellerData = {
        name: "South City Cars",
        phone: "+919845493970",
        whatsapp: "+919845493970",
        address: "25&26, 23rd Main Rd, opp. Innisfree House School Ranga Shankara, R K Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
        latitude: 12.9116249,
        longitude: 77.5868232,
    };

    const reportData = {
        carUUID: "KIASONKA52X7M4Q9R2C8A6FZ0WBTD",
        title: "2024 Kia Sonet Diesel",
        variant: "GT Line",
        inspectionDate: "09/01/2026 12:30",
        odometer: "31,293 KMS",
        youtubeVideoId: "vHqdumh2q_E",
    };

    const basePath = "/images/reports/KIASONKA52X7M4Q9R2C8A6FZ0WBTD";

    const carPhotos = [
        { src: `${basePath}/car-front.jpeg`, alt: "Front view" },
        { src: `${basePath}/car-back.jpeg`, alt: "Rear view" },
        { src: `${basePath}/car-left.png`, alt: "Left side view" },
        { src: `${basePath}/car-right.png`, alt: "Right side view" },
    ];

    const scratchPhotos = [
        { src: `${basePath}/scratch-1.jpeg`, alt: "Scratch on front left door" },
        { src: `${basePath}/scratch-2.jpeg`, alt: "Minor Dent on front right panel" },
        { src: `${basePath}/scratch-3.jpeg`, alt: "Scratch on front right fender" },
    ];

    const tyrePhotos = {
        lf: `${basePath}/tyre-lf.jpeg`,
        rf: `${basePath}/tyre-rf.jpeg`,
        lr: `${basePath}/tyre-lr.jpeg`,
        rr: `${basePath}/tyre-rr.jpeg`,
    };

    return (
        <>
            <Head>
                <title>Inspection Report - {reportData.title} | Carvohub</title>
                <meta name="description" content={`AI-powered inspection report for ${reportData.title} ${reportData.variant}`} />
            </Head>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                {/* Header */}
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Inspection Report</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{reportData.title} - {reportData.variant}</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="mailto:hello@carvohub.com?subject=Feedback on Report KIASONKA52X7M4Q9R2C8A6FZ0WBTD"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Feedback
                            </a>
                            <a
                                href="/KIASONKA52X7M4Q9R2C8A6FZ0WBTD.pdf"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Car Header Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
                        {/* YouTube Video Embed */}
                        <div className="aspect-video w-full bg-black">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${reportData.youtubeVideoId}`}
                                title="Vehicle Inspection Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{reportData.title}</h2>
                                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{reportData.variant}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{reportData.odometer}</div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Odometer</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Inspection Date</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">{reportData.inspectionDate}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Car UUID</p>
                                    <p className="text-xs font-mono text-gray-900 dark:text-white mt-1 break-all">{reportData.carUUID}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
                        <div className="flex gap-3">
                            <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-amber-800 dark:text-amber-400 text-sm">Disclaimer</h3>
                                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                                    This review is not a certified mechanical inspection. It is an independent visual assessment provided solely for general guidance and does not guarantee the vehicle's condition or performance. Carvohub is not liable for any defects, damages, or failures of the vehicle. Buyers are strongly advised to obtain a certified mechanical inspection before purchase.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vehicle Photos Section */}
                    <Section title="Vehicle Photos" icon={<CameraIcon />}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {carPhotos.map((photo, index) => (
                                <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Body Section */}
                    <Section title="Body" icon={<CarIcon />}>
                        <SubSection title="Paint">
                            <StatusItem status="good">
                                Color of the vehicle is well maintained without any signs of different shades painted over the body
                            </StatusItem>
                        </SubSection>

                        <SubSection title="Scratches and Dents">
                            <StatusItem status="warning">
                                There are scratches but no dents present on the vehicle. Here are the areas affected:
                            </StatusItem>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <AreaCard
                                    title="Front Section"
                                    status="good"
                                    description="No scratches and dents present on the front of the car."
                                />
                                <AreaCard
                                    title="Profile Section"
                                    status="warning"
                                    description="Front left door has a small scratch below the door handle. Rear left panel has a small scratch near the petrol filler cap. Front right fender has small scratches. Rear right side of the bumper has a small scratch."
                                />
                                <AreaCard
                                    title="Rear Section"
                                    status="good"
                                    description="No scratches and dents present on the rear of the car."
                                />
                                <AreaCard
                                    title="Top Section"
                                    status="good"
                                    description="No scratches and dents present on the bonnet or roof."
                                />
                            </div>

                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mt-6 mb-3">Scratch Photos</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {scratchPhotos.map((photo, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 border border-amber-200 dark:border-amber-800">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full aspect-[4/3] object-cover"
                                        />
                                        <p className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-amber-50 dark:bg-amber-900/20">{photo.alt}</p>
                                    </div>
                                ))}
                            </div>
                        </SubSection>

                        <SubSection title="Rust">
                            <StatusItem status="good">
                                There is no visible rust on the body of the vehicle
                            </StatusItem>
                        </SubSection>
                    </Section>

                    {/* Engine & Transmission Section */}
                    <Section title="Engine & Transmission" icon={<EngineIcon />}>
                        <SubSection title="Engine">
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Cold Start</h4>
                            <ul className="space-y-2 mb-4">
                                <StatusItem status="good">Engine started with cold temperature and the engine was not hot when first started</StatusItem>
                                <StatusItem status="good">The engine started with no problems and no unusual sound</StatusItem>
                                <StatusItem status="good">No smoke coming from the exhaust during the cold start</StatusItem>
                                <StatusItem status="good">Engine came to idle with no problem</StatusItem>
                            </ul>

                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Fluids</h4>
                            <ul className="space-y-2 mb-4">
                                <StatusItem status="good">Engine oil is in good condition</StatusItem>
                                <StatusItem status="good">No leaks found</StatusItem>
                            </ul>

                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Belts</h4>
                            <StatusItem status="good">No squeaky noise from the belts and it is functioning well</StatusItem>
                        </SubSection>

                        <SubSection title="Transmission">
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Fluids</h4>
                            <ul className="space-y-2 mb-4">
                                <StatusItem status="good">Transmission oil is in good condition</StatusItem>
                                <StatusItem status="good">No leaks found</StatusItem>
                            </ul>

                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Mechanism</h4>
                            <StatusItem status="good">No unusual stiffness in the gear changing mechanism</StatusItem>
                        </SubSection>
                    </Section>

                    {/* Interior Section */}
                    <Section title="Interior" icon={<InteriorIcon />}>
                        <SubSection title="Steering Wheel">
                            <StatusItem status="good">Leather is in good condition without any wear and tear</StatusItem>
                            <StatusItem status="info">All the buttons are working as expected. Recommended to check the cruise control during test drive and the "Mode" button</StatusItem>
                        </SubSection>

                        <SubSection title="Odometer">
                            <StatusItem status="good">Digital odometer is working without any damages or malfunctions</StatusItem>
                        </SubSection>

                        <SubSection title="Power Windows">
                            <StatusItem status="good">The master switch controls all windows and mirrors. All the switches are in working condition</StatusItem>
                            <StatusItem status="warning">Power window lock worked for rear windows and not front windows. Recommended to verify it</StatusItem>
                        </SubSection>

                        <SubSection title="Music System">
                            <ul className="space-y-2">
                                <StatusItem status="good">Radio is in working condition with auto select of station</StatusItem>
                                <StatusItem status="good">Bluetooth connection works</StatusItem>
                                <StatusItem status="good">Navigation system exists and shows the correct location</StatusItem>
                                <StatusItem status="good">Speakers are in good condition</StatusItem>
                                <StatusItem status="good">Both Android Auto and Apple CarPlay exist as wireless and wired connect</StatusItem>
                            </ul>
                        </SubSection>

                        <SubSection title="AC Unit">
                            <ul className="space-y-2">
                                <StatusItem status="good">The blower fan works well as expected</StatusItem>
                                <StatusItem status="good">The air conditioning works as expected with the ability to switch on and off</StatusItem>
                                <StatusItem status="good">Climate control works as expected</StatusItem>
                                <StatusItem status="good">Temperature control works as expected from hot to cold (17c to 30c)</StatusItem>
                                <StatusItem status="good">Windshield demist fans work on both front and rear windshields</StatusItem>
                                <StatusItem status="good">AC circulation mode, outside air mode, and vent adjustment all work</StatusItem>
                                <StatusItem status="good">Seat cooling works for both left and right front passenger only. Rear seat cooling does not exist</StatusItem>
                            </ul>
                        </SubSection>

                        <SubSection title="Wipers">
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Front Wipers</h4>
                            <ul className="space-y-2 mb-4">
                                <StatusItem status="good">Wipers are functional with the blades in good condition</StatusItem>
                                <StatusItem status="good">Windshield washer works well</StatusItem>
                                <StatusItem status="good">All settings of the wipers work well</StatusItem>
                            </ul>

                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Rear Wipers</h4>
                            <ul className="space-y-2">
                                <StatusItem status="good">Wiper functions with the blades in good condition</StatusItem>
                                <StatusItem status="good">Windshield washer works well</StatusItem>
                            </ul>
                        </SubSection>

                        <SubSection title="Lighting">
                            <ul className="space-y-2">
                                <StatusItem status="good">Main interior light works when switch is on and with door settings</StatusItem>
                                <StatusItem status="good">Two reading lights available and working</StatusItem>
                            </ul>
                        </SubSection>
                    </Section>

                    {/* Electricals Section */}
                    <Section title="Electricals" icon={<ElectricalIcon />}>
                        <SubSection title="Headlights">
                            <StatusItem status="good">Headlights work with all settings: Position light, Low beam, High beam, Fog lights, Auto lights</StatusItem>
                        </SubSection>

                        <SubSection title="Tail Lights">
                            <ul className="space-y-2">
                                <StatusItem status="good">The brake light works when brakes are pressed including the brake lights on the top section of the windshield</StatusItem>
                                <StatusItem status="good">The tail lights work when the main lights are switched on</StatusItem>
                                <StatusItem status="good">The reverse light works when vehicle is engaged in reverse gear</StatusItem>
                            </ul>
                        </SubSection>

                        <SubSection title="Indicators">
                            <StatusItem status="good">All indicators work: Mirror indicators, Side fender indicators, Head light indicators, Tail light indicators</StatusItem>
                        </SubSection>
                    </Section>

                    {/* Wheels and Tyres Section */}
                    <Section title="Wheels and Tyres" icon={<WheelIcon />}>
                        <SubSection title="Tyre Size">
                            <StatusItem status="good">215/60 R16 - Factory provided tyres on the car</StatusItem>
                            <StatusItem status="good">All 4 tyres are the same size and make (Apollo)</StatusItem>
                        </SubSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <TyreCard
                                position="Left Front"
                                date="March 2024"
                                tread="1mm"
                                wheelCondition="No scratches and dents"
                                image={tyrePhotos.lf}
                            />
                            <TyreCard
                                position="Right Front"
                                date="March 2024"
                                tread="1mm"
                                wheelCondition="No scratches and dents"
                                image={tyrePhotos.rf}
                            />
                            <TyreCard
                                position="Left Rear"
                                date="March 2024"
                                tread="1mm"
                                wheelCondition="No scratches and dents"
                                image={tyrePhotos.lr}
                            />
                            <TyreCard
                                position="Right Rear"
                                date="March 2024"
                                tread="1mm"
                                wheelCondition="No scratches and dents"
                                image={tyrePhotos.rr}
                            />
                        </div>
                    </Section>

                    {/* Seller Details Section */}
                    <Section title="Seller Details" icon={<SellerIcon />}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Dealer Map */}
                            <div className="w-full sm:w-64 h-48 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.3!2d${sellerData.longitude}!3d${sellerData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d2527f251%3A0x3a3c34652415412a!2sSouth%20City%20Cars%20(Used%20Cars%20dealers)!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dealer Location"
                                ></iframe>
                            </div>

                            {/* Dealer Info */}
                            <div className="flex-1 space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {sellerData.name}
                                </h3>

                                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                    <p>
                                        <span className="font-medium">Address:</span>{" "}
                                        {sellerData.address}
                                    </p>

                                    <p>
                                        <span className="font-medium">Phone:</span>{" "}
                                        <a
                                            href={`tel:${sellerData.phone}`}
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            {sellerData.phone}
                                        </a>
                                    </p>

                                    <p>
                                        <span className="font-medium">Email:</span>{" "}
                                        <a
                                            href="mailto:hello@carvohub.com"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            hello@carvohub.com
                                        </a>
                                    </p>

                                    <p>
                                        <span className="font-medium">Location:</span>{" "}
                                        <a
                                            href="https://maps.app.goo.gl/ghJsPTYtmsZk5XK27"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Bottom CTA */}
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Have questions about this report?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Our team is here to help you understand every detail.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="mailto:hello@carvohub.com?subject=Question about Report KIASONKA52X7M4Q9R2C8A6FZ0WBTD"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Us
                            </a>
                            <a
                                href="/KIASONKA52X7M4Q9R2C8A6FZ0WBTD.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Full Report
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Helper Components
const Section = ({ title, icon, children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
        <div className="p-6">{children}</div>
    </div>
);

const SubSection = ({ title, children }) => (
    <div className="mb-6 last:mb-0">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">{title}</h3>
        {children}
    </div>
);

const StatusItem = ({ status, children }) => {
    const statusConfig = {
        good: { color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30", icon: "M5 13l4 4L19 7" },
        warning: { color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
        info: { color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    };

    const config = statusConfig[status] || statusConfig.good;

    return (
        <li className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <svg className={`w-3 h-3 ${config.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
                </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">{children}</span>
        </li>
    );
};

const AreaCard = ({ title, status, description }) => {
    const statusColor = status === "good" ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20" : "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20";
    const titleColor = status === "good" ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400";

    return (
        <div className={`rounded-xl border ${statusColor} p-4`}>
            <h4 className={`font-semibold ${titleColor} mb-2`}>{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

const TyreCard = ({ position, date, tread, wheelCondition, image }) => (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600">
        {image && (
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700">
                <img src={image} alt={`${position} tyre`} className="w-full h-full object-cover" />
            </div>
        )}
        <div className="p-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{position} Tyre & Wheel</h4>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Date:</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{date}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Tread:</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{tread}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Wheel:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">{wheelCondition}</span>
                </div>
            </div>
        </div>
    </div>
);

// Icons
const CameraIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CarIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
);

const EngineIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const InteriorIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
);

const ElectricalIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const WheelIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SellerIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM12 11a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

export default ReportPage;
