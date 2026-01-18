import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const ReportPage = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [heroIndex, setHeroIndex] = useState(0);


    const sectionsRef = useRef([]);

    const sellerData = {
        name: "South City Cars",
        phone: "+919845493970",
        address: "25&26, 23rd Main Rd, J. P. Nagar, Bengaluru, Karnataka 560078",
        latitude: 12.9116249,
        longitude: 77.5868232,
    };

    const reportData = {
        carUUID: "VWPOLOGTKA41A1B2C3D4E5F6G7H8I9J0",
        title: "2019 Volkswagen Polo Petrol",
        variant: "GT TSI",
        inspectionDate: "09/01/2026",
        odometer: "46,523",
        youtubeVideoId: "",
    };

    const basePath = "/images/reports/VWPOLOGTKA41A1B2C3D4E5F6G7H8I9J0";

    const carPhotos = [
        { src: `${basePath}/car-front.jpeg`, alt: "Front view" },
        { src: `${basePath}/car-back.jpeg`, alt: "Rear view" },
        { src: `${basePath}/car-left.jpeg`, alt: "Left side" },
        { src: `${basePath}/car-right.jpeg`, alt: "Right side" },
    ];

    const scratchPhotos = [
        { src: `${basePath}/scratch-1.jpeg`, alt: "Front left door scratch" },
        { src: `${basePath}/scratch-2.jpeg`, alt: "Front right panel dent" },
        { src: `${basePath}/scratch-3.jpeg`, alt: "Front right fender scratch" },
    ];

    const tyrePhotos = {
    lf: { src: `${basePath}/tyre-lf.jpeg`, treadDepth: "6mm", condition: "Good" },
    rf: { src: `${basePath}/tyre-rf.jpeg`, treadDepth: "6mm", condition: "Good" },
    lr: { src: `${basePath}/tyre-lr.jpeg`, treadDepth: "7mm", condition: "Good" },
    rr: { src: `${basePath}/tyre-rr.jpeg`, treadDepth: "7mm", condition: "Good" },
};

    const interiorPhotos = [
        { src: `${basePath}/interior-1.jpeg`, alt: "Interior dashboard" },
        { src: `${basePath}/interior-2.jpeg`, alt: "Front seats" },
        { src: `${basePath}/interior-3.jpeg`, alt: "Rear seats" },
    ];

    const heroImages = [...carPhotos, ...interiorPhotos];
    const [lightboxImage, setLightboxImage] = useState(null);




    // Scroll progress tracking
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);

            // Determine active section
            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!heroImages.length) return;

        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [heroImages.length]);


    useEffect(() => {
        if (!lightboxImage) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") setLightboxImage(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxImage]);



    const sections = [
        { id: "overview", label: "Overview" },
        { id: "exterior", label: "Exterior" },
        { id: "mechanical", label: "Mechanical" },
        { id: "interior", label: "Interior" },
        { id: "tyres", label: "Tyres" },
        { id: "seller", label: "Seller" },
    ];

    return (
        <>
            <Head>
                <title>{reportData.title} - Inspection Report | Carvohub</title>
                <meta name="description" content={`Detailed inspection report for ${reportData.title} ${reportData.variant}`} />
            </Head>

            {/* Progress Bar */}
            <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-40">
                <div
                    className="h-full bg-blue-600 transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Floating Navigation */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
                {sections.map((section, idx) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`group flex items-center gap-3 transition-all duration-300 ${activeSection === idx ? "opacity-100" : "opacity-40 hover:opacity-70"
                            }`}
                    >
                        <span className={`text-xs font-medium text-right transition-all duration-300 ${activeSection === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            } text-gray-600 dark:text-gray-400`}>
                            {section.label}
                        </span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === idx ? "bg-blue-600 scale-150" : "bg-gray-400 dark:bg-gray-600"
                            }`} />
                    </a>
                ))}
            </nav>

            <div className="min-h-screen bg-white dark:bg-gray-950">
                {/* Hero Section */}
                <section
                    ref={el => sectionsRef.current[0] = el}
                    id="overview"
                    className="relative min-h-screen flex items-center"
                >
                    {/* Background Video/Image */}
                    
                    <div className="absolute inset-0">
                        {heroImages.map((image, idx) => (
                            <img
                                key={idx}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => setLightboxImage(image)}
                                className={`absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />

                        ))}
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 w-full">
                        <div className="max-w-3xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-white/90">Verified Inspection</span>
                            </div>

                            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur rounded-full text-white text-sm">
                                {heroIndex < carPhotos.length ? "Exterior View" : "Interior View"}
                            </div>


                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
                                {reportData.title}
                            </h1>
                            <p className="text-2xl md:text-3xl font-semibold text-white/70 mb-8 animate-slide-up animation-delay-100">
                                {reportData.variant}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-200">
                                <div className="border-l-2 border-blue-500 pl-4">
                                    <div className="text-3xl font-bold text-white">{reportData.odometer}</div>
                                    <div className="text-sm text-white/60 font-medium">Kilometers</div>
                                </div>
                                <div className="border-l-2 border-green-500 pl-4">
                                    <div className="text-3xl font-bold text-white">Good</div>
                                    <div className="text-sm text-white/60 font-medium">Overall Condition</div>
                                </div>
                                <div className="border-l-2 border-amber-500 pl-4">
                                    <div className="text-3xl font-bold text-white">0</div>
                                    <div className="text-sm text-white/60 font-medium">Minor Issues</div>
                                </div>
                            </div>

                            {/* Actions */}
                            {/* <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
                                <a
                                    href={`https://youtube.com/watch?v=${reportData.youtubeVideoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Watch Inspection Video
                                </a>
                                <a
                                    href="/KIASONKA52X7M4Q9R2C8A6FZ0WBTD.pdf"
                                    download
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download PDF
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
                            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}

                {/* Exterior Photo Gallery */}
                <section className="py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            Exterior Photos
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {carPhotos.map((photo, idx) => (
                                <div
                                    key={idx}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        onClick={() => setLightboxImage(photo)}
                                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {photo.alt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Interior Photo Gallery */}
                <section className="py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            Interior Photos
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {interiorPhotos.map((photo, idx) => (
                                <div
                                    key={idx}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        onClick={() => setLightboxImage(photo)}
                                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {photo.alt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Exterior Section */}
                <section
                    ref={el => sectionsRef.current[1] = el}
                    id="exterior"
                    className="py-24 bg-white dark:bg-gray-950"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-1 gap-16 items-start">
                            <div className="lg:sticky lg:top-32">
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Body Condition</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                                    Exterior
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    The vehicle's exterior is in good overall condition. Paint maintains consistent color
                                    throughout with no signs of repainting, only paint polishing done to remove small scratches.
                                </p>

                                {/* Condition Meter */}
                                <div className="mb-8">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">Overall Condition</span>
                                        <span className="font-bold text-green-600">95%</span>
                                    </div>
                                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000" style={{ width: "95%" }} />
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">0</div>
                                        <div className="text-sm text-green-600 dark:text-green-500">Dents</div>
                                    </div>
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">0</div>
                                        <div className="text-sm text-green-600 dark:text-green-500">Minor Scratches</div>
                                    </div>
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">No</div>
                                        <div className="text-sm text-green-600 dark:text-green-500">Rust Found</div>
                                    </div>
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="text-2xl font-bold text-green-700 dark:text-green-400">Original</div>
                                        <div className="text-sm text-green-600 dark:text-green-500">Paint</div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>

                {/* Mechanical Section */}
                <section
                    ref={el => sectionsRef.current[2] = el}
                    id="mechanical"
                    className="py-24 bg-gray-50 dark:bg-gray-900"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Engine & Transmission</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                                Mechanical Health
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Engine", status: "Excellent", items: ["Cold start normal", "No unusual sounds", "No smoke from exhaust", "Oil in good condition"], color: "green" },
                                { title: "Transmission", status: "Good", items: ["Smooth gear shifts", "No fluid leaks", "Clutch responsive", "No grinding noise"], color: "green" },
                                { title: "Electricals", status: "Good", items: ["All lights working", "Battery healthy", "Indicators functional", "No warning lights"], color: "green" },
                            ].map((section, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${section.color}-100 dark:bg-${section.color}-900/30 text-${section.color}-700 dark:text-${section.color}-400`}>
                                            {section.status}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interior Section */}
                <section
                    ref={el => sectionsRef.current[3] = el}
                    id="interior"
                    className="py-24 bg-white dark:bg-gray-950"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Cabin Assessment</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                                Interior Condition
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Seats", status: "good", desc: "Leather in excellent condition, no tears" },
                                { title: "Dashboard", status: "good", desc: "Clean, no cracks or damage" },
                                { title: "AC System", status: "good", desc: "Cooling effective, all vents working" },
                                { title: "Infotainment", status: "good", desc: "CarPlay & Android Auto functional" },
                                { title: "Steering", status: "good", desc: "All buttons working, no wear" },
                                { title: "Power Windows", status: "good", desc: "All windows working correctly" },
                                { title: "Odometer", status: "good", desc: "Digital display working correctly" },
                                { title: "Lighting", status: "good", desc: "Interior lights all functional" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.status === "good"
                                            ? "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
                                            : "bg-amber-50/50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800"
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                        <div className={`w-3 h-3 rounded-full ${item.status === "good" ? "bg-green-500" : "bg-amber-500"}`} />
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tyres Section */}
<section
  ref={el => sectionsRef.current[4] = el}
  id="tyres"
  className="py-24 bg-gray-50 dark:bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
        Wheels & Tyres
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
        Tyre Condition
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
        215/60 R16 Apollo - All matching factory tyres
      </p>
    </div>

    {/* Tyre Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { position: "Left Front", key: "lf" },
        { position: "Right Front", key: "rf" },
        { position: "Left Rear", key: "lr" },
        { position: "Right Rear", key: "rr" },
      ].map((tyre, idx) => {
        // Safe access to tyrePhotos
        const photo = tyrePhotos[tyre.key] || { src: "", treadDepth: "-", condition: "-" };

        return (
          <div
            key={idx}
            className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.src}
                alt={tyre.position}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                {tyre.position}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tread Depth</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {photo.treadDepth}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Wheel Condition</span>
                  <span className="font-medium text-green-600">{photo.condition}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


                {/* Seller Section */}
                <section
                    ref={el => sectionsRef.current[5] = el}
                    id="seller"
                    className="py-24 bg-white dark:bg-gray-950"
                >
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Dealer Information</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                                {sellerData.name}
                            </h2>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
                            <div className="aspect-video w-full">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.3!2d${sellerData.longitude}!3d${sellerData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d2527f251%3A0x3a3c34652415412a!2sSouth%20City%20Cars!5e0!3m2!1sen!2sin`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Dealer Location"
                                />
                            </div>
                            <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">{sellerData.address}</p>
                                    <a href={`tel:${sellerData.phone}`} className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
                                        {sellerData.phone}
                                    </a>
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/ghJsPTYtmsZk5XK27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gray-900 dark:bg-black">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Questions about this report?
                        </h2>
                        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                            Our team is here to help you understand every detail and make an informed decision.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`mailto:hello@carvohub.com?subject=Question about ${reportData.carUUID}`}
                                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/KIASONKA52X7M4Q9R2C8A6FZ0WBTD.pdf"
                                download
                                className="px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                Download Full Report
                            </a>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border-t border-amber-200 dark:border-amber-800 py-6">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                            <strong>Disclaimer:</strong> This is an independent visual assessment for general guidance only.
                            Buyers are advised to obtain a certified mechanical inspection before purchase.
                        </p>
                    </div>
                </div>
            </div>

            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightboxImage(null)}
                >
                    <div
                        className="relative max-w-6xl max-h-[90vh] w-full px-6 animate-zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute -top-12 right-6 text-white text-4xl hover:opacity-70"
                            aria-label="Close image"
                        >
                            ×
                        </button>

                        <img
                            src={lightboxImage.src}
                            alt={lightboxImage.alt}
                            className="w-full h-full object-contain rounded-xl shadow-2xl"
                        />

                        {lightboxImage.alt && (
                            <p className="mt-4 text-center text-sm text-gray-300">
                                {lightboxImage.alt}
                            </p>
                        )}
                    </div>
                </div>
            )}


            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scroll {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(6px); opacity: 0.5; }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }
                .animate-scroll {
                    animation: scroll 1.5s ease-in-out infinite;
                }
                .animation-delay-100 {
                    animation-delay: 100ms;
                }
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
                .animation-delay-300 {
                    animation-delay: 300ms;
                }
                    @keyframes zoom-in {
    from {
        opacity: 0;
        transform: scale(0.96);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-zoom-in {
    animation: zoom-in 0.25s ease-out;
}

            `}</style>
        </>
    );
};

export default ReportPage;
