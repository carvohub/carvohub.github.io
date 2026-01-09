import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Hero from "../components/ui/Hero";
import PlatformLogos from "../components/ui/PlatformLogos";
import HowItWorks from "../components/ui/HowItWorks";
import Pricing from "../components/ui/Pricing";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvohub - AI Car Inspection Reports for Dealerships in India</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Generate professional AI-powered car inspection reports in minutes. Perfect for used car dealerships in India. Video-based analysis with shareable reports for all major listing platforms.' />
        <meta name='keywords' content='car inspection reports India, AI car inspection, used car dealerships, vehicle inspection app, car listing India, CarDekho, OLX Autos, Cars24, automobile inspection, dealer tools' />

        {/* Open Graph */}
        <meta property='og:title' content='Carvohub - AI Car Inspection Reports for Dealerships' />
        <meta property='og:description' content='Generate professional AI-powered car inspection reports for your dealership. Build customer trust and sell cars faster.' />
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

      <GradientWrapper>
        <Pricing />
      </GradientWrapper>

      <FooterCTA />
    </>
  );
}
