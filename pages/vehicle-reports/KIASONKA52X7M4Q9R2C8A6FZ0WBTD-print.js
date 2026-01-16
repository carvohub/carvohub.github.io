import Head from "next/head";

const ReportPage = () => {
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
    { src: `${basePath}/scratch-2.jpeg`, alt: "Scratch on rear left panel" },
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
        <title>
          Inspection Report – {reportData.title} | Carvohub
        </title>
      </Head>

      {/* REPORT CANVAS */}
      <div className="bg-gray-100 py-12 print:bg-white print:py-0">
        <div className="mx-auto max-w-[820px] bg-white px-14 py-12 text-gray-900 print:px-8 print:py-6">

          {/* REPORT HEADER */}
          <header className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Carvohub · Vehicle Inspection Report
            </p>

            <h1 className="text-3xl font-bold mt-2">
              {reportData.title}
            </h1>

            <p className="text-lg text-gray-600">
              {reportData.variant}
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-8 text-sm">
              <Meta label="Inspection Date" value={reportData.inspectionDate} />
              <Meta label="Odometer" value={reportData.odometer} />
              <Meta label="Car UUID" value={reportData.carUUID} />
            </div>
          </header>

          {/* VIDEO (UNCHANGED CONTENT) */}
          <section className="mb-14 print:hidden">
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">
              Inspection Video
            </h2>

            <div className="aspect-video border">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${reportData.youtubeVideoId}`}
                title="Vehicle Inspection Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </section>

          {/* DISCLAIMER */}
          <section className="mb-14 border-l-4 border-amber-500 bg-amber-50 px-6 py-4">
            <p className="text-sm leading-relaxed text-amber-900">
              This review is not a certified mechanical inspection. It is an independent
              visual assessment provided solely for general guidance and does not
              guarantee the vehicle's condition or performance. Carvohub is not liable
              for any defects, damages, or failures of the vehicle. Buyers are strongly
              advised to obtain a certified mechanical inspection before purchase.
            </p>
          </section>

          {/* VEHICLE PHOTOS */}
          <ReportSection title="Vehicle Photos">
            <div className="grid grid-cols-4 gap-4">
              {carPhotos.map((photo, i) => (
                <img
                  key={i}
                  src={photo.src}
                  alt={photo.alt}
                  className="border"
                />
              ))}
            </div>
          </ReportSection>

          {/* BODY */}
          <ReportSection title="Body">

            <SubSection title="Paint">
              <StatusItem status="good">
                Color of the vehicle is well maintained without any signs of different shades painted over the body
              </StatusItem>
            </SubSection>

            <SubSection title="Scratches and Dents">
              <StatusItem status="warning">
                There are scratches but no dents present on the vehicle. Here are the areas affected:
              </StatusItem>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <AreaCard
                  title="Front Section"
                  description="No scratches and dents present on the front of the car."
                />
                <AreaCard
                  title="Profile Section"
                  description="Front left door has a small scratch below the door handle. Rear left panel has a small scratch near the petrol filler cap. Front right fender has small scratches. Rear right side of the bumper has a small scratch."
                />
                <AreaCard
                  title="Rear Section"
                  description="No scratches and dents present on the rear of the car."
                />
                <AreaCard
                  title="Top Section"
                  description="No scratches and dents present on the bonnet or roof."
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {scratchPhotos.map((photo, i) => (
                  <div key={i} className="border">
                    <img src={photo.src} alt={photo.alt} />
                    <p className="text-xs p-2">{photo.alt}</p>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="Rust">
              <StatusItem status="good">
                There is no visible rust on the body of the vehicle
              </StatusItem>
            </SubSection>

          </ReportSection>

          {/* ENGINE & TRANSMISSION */}
          <ReportSection title="Engine & Transmission">

            <SubSection title="Engine">
              <StatusItem status="good">Engine started with cold temperature and the engine was not hot when first started</StatusItem>
              <StatusItem status="good">The engine started with no problems and no unusual sound</StatusItem>
              <StatusItem status="good">No smoke coming from the exhaust during the cold start</StatusItem>
              <StatusItem status="good">Engine came to idle with no problem</StatusItem>
              <StatusItem status="good">Engine oil is in good condition</StatusItem>
              <StatusItem status="good">No leaks found</StatusItem>
              <StatusItem status="good">No squeaky noise from the belts and it is functioning well</StatusItem>
            </SubSection>

            <SubSection title="Transmission">
              <StatusItem status="good">Transmission oil is in good condition</StatusItem>
              <StatusItem status="good">No leaks found</StatusItem>
              <StatusItem status="good">No unusual stiffness in the gear changing mechanism</StatusItem>
            </SubSection>

          </ReportSection>

          {/* TYRES */}
          <ReportSection title="Wheels and Tyres">
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(tyrePhotos).map(([key, img]) => (
                <div key={key} className="border p-4">
                  <img src={img} alt={`${key} tyre`} className="mb-3" />
                  <p className="text-sm">
                    Date: March 2024<br />
                    Tread: 7mm<br />
                    Wheel: No scratches and dents
                  </p>
                </div>
              ))}
            </div>
          </ReportSection>

          {/* FOOTER */}
          <footer className="mt-16 border-t pt-6 text-xs text-gray-500">
            © Carvohub · Confidential Inspection Document
          </footer>

        </div>
      </div>
    </>
  );
};

/* ===== Helper Components ===== */

const Meta = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-medium break-all">{value}</p>
  </div>
);

const ReportSection = ({ title, children }) => (
  <section className="mb-14">
    <h2 className="text-xl font-semibold border-b pb-2 mb-6">
      {title}
    </h2>
    <div className="space-y-4 text-sm">{children}</div>
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const StatusItem = ({ status, children }) => {
  const dot =
    status === "good"
      ? "bg-green-600"
      : status === "warning"
      ? "bg-amber-500"
      : "bg-blue-600";

  return (
    <div className="flex items-start gap-3">
      <span className={`mt-2 w-2 h-2 rounded-full ${dot}`} />
      <p>{children}</p>
    </div>
  );
};

const AreaCard = ({ title, description }) => (
  <div className="border p-4">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm">{description}</p>
  </div>
);

export default ReportPage;
