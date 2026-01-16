import Head from "next/head";
import Hero from "../components/ui/Hero";
import PlatformLogos from "../components/ui/PlatformLogos";
import HowItWorks from "../components/ui/HowItWorks";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvohub - Vehicle Reports for buyers of used cars in India</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Generate professional AI-powered car inspection reports in minutes. Perfect for used car dealerships in India. Video-based analysis with shareable reports for all major listing platforms.' />
        <meta name='keywords' content='car inspection reports India, AI car inspection, used car dealerships, vehicle inspection app, car listing India, CarDekho, OLX Autos, Cars24, automobile inspection, dealer tools' />

        {/* Open Graph */}
        <meta property='og:title' content='Carvohub - Independent guide for used cars' />
        <meta property='og:description' content='Indpendent vehicle reports to guide you purchasing the right car.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://carvohub.github.io' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Carvohub - AI Car Inspection Reports for Dealerships' />
        <meta name='twitter:description' content='Generate professional AI-powered car inspection reports. Build customer trust and sell cars faster.' />
      </Head>

      <Hero />

      <PlatformLogos />

      <HowItWorks />

      <FooterCTA />
    </>
  );
}
