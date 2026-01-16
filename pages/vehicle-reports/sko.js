import React, { useState } from 'react';

const ReportPage = () => {
    const reportData = {
        carUUID: "SKOOCTKA05VRS230K9X7M4Q2A8Z",
        title: "2019 Skoda Octavia Petrol",
        variant: "VRS 230",
        inspectionDate: "16/01/2026 12:30",
        odometer: "48,293 KMS",
        youtubeVideoId: "",
    };

    const basePath = "/images/reports/KIASONKA52X7M4Q9R2C8A6FZ0WBTD";

    const carPhotos = [
        { src: `${basePath}/car-front.jpeg`, alt: "Front view" },
        { src: `${basePath}/car-back.jpeg`, alt: "Rear view" },
        { src: `${basePath}/car-left.png`, alt: "Left side view" },
        { src: `${basePath}/car-right.png`, alt: "Right side view" },
    ];

    const tyrePhotos = {
        lf: `${basePath}/tyre-lf.jpeg`,
        rf: `${basePath}/tyre-rf.jpeg`,
        lr: `${basePath}/tyre-lr.jpeg`,
        rr: `${basePath}/tyre-rr.jpeg`,
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
                        <h1 className="text-lg font-medium tracking-tight">VEHICLE REPORT</h1>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="mailto:hello@carvohub.com"
                            className="px-4 py-2 text-xs font-medium tracking-wide uppercase border border-white/20 rounded hover:bg-white/5 transition-all"
                        >
                            Feedback
                        </a>
                        <a
                            href="/.pdf"
                            download
                            className="px-4 py-2 text-xs font-bold tracking-wide uppercase bg-white text-black rounded hover:bg-lime-400 transition-all"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
                <div className="mb-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/20 mb-6">
                        Verified Inspection
                    </div>
                </div>
                <h1 className="text-7xl md:text-8xl font-bold leading-none mb-6 tracking-tight">
                    {reportData.title.split(' ').slice(0, 2).join(' ')}
                </h1>
                <h2 className="text-7xl md:text-8xl font-bold leading-none mb-8 text-white/30 tracking-tight">
                    {reportData.title.split(' ').slice(2).join(' ')}
                </h2>
                <div className="flex items-center gap-8 text-white/60">
                    <div>
                        <div className="text-sm uppercase tracking-widest mb-1">Variant</div>
                        <div className="text-2xl font-medium text-white">{reportData.variant}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-sm uppercase tracking-widest mb-1">Odometer</div>
                        <div className="text-2xl font-medium text-white">{reportData.odometer}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-sm uppercase tracking-widest mb-1">Inspected</div>
                        <div className="text-lg font-medium text-white">{reportData.inspectionDate}</div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${reportData.youtubeVideoId}`}
                        title="Inspection Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="border border-amber-500/30 rounded-lg p-8 bg-amber-500/5">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 text-amber-500 mt-1">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-amber-500 mb-3 font-medium">Disclaimer</div>
                            <p className="text-white/60 leading-relaxed">
                                This review is not a certified mechanical inspection. It is an independent visual assessment provided solely for general guidance and does not guarantee the vehicle's condition or performance. Buyers are strongly advised to obtain a certified mechanical inspection before purchase.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vehicle Photos */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="mb-12">
                    <h2 className="text-5xl font-bold mb-3">vehicle</h2>
                    <h3 className="text-5xl font-bold text-white/30">photos</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {carPhotos.map((photo, i) => (
                        <div key={i} className="group aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Body Section */}
            <SectionBlock title="body" subtitle="condition">
                <DetailRow label="Paint" status="excellent">
                    Color well maintained without any signs of different shades painted over the body
                </DetailRow>
                
                <div className="my-16">
                    <div className="text-sm uppercase tracking-widest text-white/40 mb-8">Scratches and Dents</div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <AreaCard title="Front Section" status="good" />
                        <AreaCard title="Profile Section" status="good" />
                        <AreaCard title="Rear Section" status="good" />
                        <AreaCard title="Top Section" status="good" />
                    </div>
                </div>

                <DetailRow label="Rust" status="excellent">
                    No visible rust on the body of the vehicle
                </DetailRow>
            </SectionBlock>

            {/* Engine & Transmission */}
            <SectionBlock title="engine &" subtitle="transmission">
                <div className="space-y-8">
                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Engine Cold Start</div>
                        <div className="space-y-4">
                            <StatusBullet>Engine started with cold temperature</StatusBullet>
                            <StatusBullet>No problems or unusual sound</StatusBullet>
                            <StatusBullet>No smoke from exhaust</StatusBullet>
                            <StatusBullet>Engine came to idle smoothly</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Fluids & Belts</div>
                        <div className="space-y-4">
                            <StatusBullet>Engine oil in good condition</StatusBullet>
                            <StatusBullet>Transmission oil in good condition</StatusBullet>
                            <StatusBullet>No leaks found</StatusBullet>
                            <StatusBullet>Belts functioning well without noise</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Transmission</div>
                        <StatusBullet>No unusual stiffness in gear changing mechanism</StatusBullet>
                    </div>
                </div>
            </SectionBlock>

            {/* Interior */}
            <SectionBlock title="interior" subtitle="features">
                <div className="space-y-12">
                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Steering & Controls</div>
                        <div className="space-y-4">
                            <StatusBullet>Leather in good condition</StatusBullet>
                            <StatusBullet type="warning">Check cruise control during test drive</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Music System</div>
                        <div className="space-y-4">
                            <StatusBullet>Radio with auto station select</StatusBullet>
                            <StatusBullet>Bluetooth connection works</StatusBullet>
                            <StatusBullet>Navigation shows correct location</StatusBullet>
                            <StatusBullet>Wireless Android Auto & Apple CarPlay</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Climate Control</div>
                        <div className="space-y-4">
                            <StatusBullet>Blower fan works well</StatusBullet>
                            <StatusBullet>Climate control functional (17°C to 30°C)</StatusBullet>
                            <StatusBullet>Windshield demist fans operational</StatusBullet>
                            <StatusBullet>Seat cooling for front seats only</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Power Windows</div>
                        <div className="space-y-4">
                            <StatusBullet>Master switch controls all windows</StatusBullet>
                            <StatusBullet type="warning">Window lock worked for rear only</StatusBullet>
                        </div>
                    </div>
                </div>
            </SectionBlock>

            {/* Electricals */}
            <SectionBlock title="electrical" subtitle="systems">
                <div className="space-y-12">
                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Lighting</div>
                        <div className="space-y-4">
                            <StatusBullet>All headlight settings functional</StatusBullet>
                            <StatusBullet>Brake lights including top section work</StatusBullet>
                            <StatusBullet>Tail lights operational</StatusBullet>
                            <StatusBullet>Reverse light works</StatusBullet>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Indicators</div>
                        <StatusBullet>All indicators work: Mirror, Side fender, Head light, Tail light</StatusBullet>
                    </div>
                </div>
            </SectionBlock>

            {/* Wheels & Tyres */}
            <SectionBlock title="wheels &" subtitle="tyres">
                <div className="mb-12">
                    <div className="text-sm uppercase tracking-widest text-white/40 mb-6">Specifications</div>
                    <div className="space-y-4">
                        <StatusBullet>225/45 R17 - Michelin Pilot Sport</StatusBullet>
                        <StatusBullet>All 4 tyres same size and make</StatusBullet>
                        <StatusBullet>Factory original wheels</StatusBullet>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <TyreCard position="Left Front" date="March 2024" tread="1mm" image={tyrePhotos.lf} />
                    <TyreCard position="Right Front" date="March 2024" tread="1mm" image={tyrePhotos.rf} />
                    <TyreCard position="Left Rear" date="March 2024" tread="1mm" image={tyrePhotos.lr} />
                    <TyreCard position="Right Rear" date="March 2024" tread="1mm" image={tyrePhotos.rr} />
                </div>
            </SectionBlock>

            {/* Modifications */}
            <SectionBlock title="performance" subtitle="modifications">
                <div className="space-y-8">
                    <DetailRow label="Engine" status="modified">
                        ARP Stage 2 tuned ECU and TCU
                    </DetailRow>
                    <DetailRow label="Suspension" status="modified">
                        Eurospec Springs
                    </DetailRow>
                    <DetailRow label="Brakes" status="modified">
                        Brembo rotors & EBC slotted rotors at rear
                    </DetailRow>
                    <DetailRow label="Exhaust" status="modified">
                        Armytrix exhaust downpipe
                    </DetailRow>
                </div>
            </SectionBlock>

            {/* Documents */}
            <SectionBlock title="legal" subtitle="documents">
                <div className="space-y-8">
                    <DetailRow label="Registration Certificate" status="verified">
                        RC available and verified
                    </DetailRow>
                    <DetailRow label="Service History" status="verified">
                        Last service: 12 Dec 2025 • ₹18,450
                    </DetailRow>
                    <DetailRow label="Insurance" status="active">
                        Valid till 30 Nov 2026 • Premium: ₹24,300
                    </DetailRow>
                    <DetailRow label="PUC" status="verified">
                        Certificate available and valid
                    </DetailRow>
                </div>
            </SectionBlock>

            {/* Challans */}
            <SectionBlock title="pending" subtitle="challans">
                <DetailRow label="Total Amount" status="pending">
                    ₹4,500 pending
                </DetailRow>
            </SectionBlock>

            {/* CTA */}
            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold mb-6">questions about</h2>
                    <h3 className="text-6xl font-bold text-white/30 mb-8">this vehicle?</h3>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        our team is here to help you understand every detail.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="mailto:hello@carvohub.com"
                        className="px-8 py-4 text-sm font-bold tracking-wide uppercase bg-white text-black rounded hover:bg-lime-400 transition-all"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between text-sm text-white/40">
                        <div>© 2026 Carvohub. all rights reserved.</div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">privacy</a>
                            <a href="#" className="hover:text-white transition-colors">terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionBlock = ({ title, subtitle, children }) => (
    <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="mb-12">
            <h2 className="text-5xl font-bold mb-3">{title}</h2>
            <h3 className="text-5xl font-bold text-white/30">{subtitle}</h3>
        </div>
        <div className="border-l border-white/5 pl-8">
            {children}
        </div>
    </div>
);

const DetailRow = ({ label, status, children }) => {
    const statusColors = {
        excellent: 'text-lime-400',
        verified: 'text-lime-400',
        good: 'text-lime-400',
        active: 'text-blue-400',
        modified: 'text-purple-400',
        pending: 'text-amber-400',
    };

    return (
        <div className="flex items-start justify-between py-6 border-b border-white/5">
            <div className="flex-1">
                <div className="text-sm uppercase tracking-widest text-white/40 mb-2">{label}</div>
                <div className="text-white/80">{children}</div>
            </div>
            <div className={`text-sm uppercase tracking-widest font-medium ${statusColors[status]}`}>
                {status}
            </div>
        </div>
    );
};

const StatusBullet = ({ children, type = 'good' }) => {
    const dotColor = type === 'warning' ? 'bg-amber-400' : 'bg-lime-400';
    const textColor = type === 'warning' ? 'text-white/60' : 'text-white/80';

    return (
        <div className="flex items-start gap-4">
            <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 flex-shrink-0`}></div>
            <div className={textColor}>{children}</div>
        </div>
    );
};

const AreaCard = ({ title, status }) => (
    <div className="border border-white/10 rounded-lg p-6 bg-white/[0.02] hover:border-lime-400/30 transition-all">
        <div className="text-sm uppercase tracking-widest text-white/40 mb-2">{title}</div>
        <div className="text-lime-400 text-sm font-medium uppercase tracking-wide">no issues</div>
    </div>
);

const TyreCard = ({ position, date, tread, image }) => (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:border-white/20 transition-all">
        {image && (
            <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img src={image} alt={position} className="w-full h-full object-cover" />
            </div>
        )}
        <div className="p-6">
            <div className="text-sm uppercase tracking-widest text-white/40 mb-4">{position}</div>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                    <span className="text-white/60">Date</span>
                    <span className="text-white">{date}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-white/60">Tread</span>
                    <span className="text-white">{tread}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-white/60">Condition</span>
                    <span className="text-lime-400">Good</span>
                </div>
            </div>
        </div>
    </div>
);

export default ReportPage;