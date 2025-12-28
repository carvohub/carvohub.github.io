import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import HowItWorks from "../components/ui/HowItWorks";
import Capabilities from "../components/ui/Capabilities";
import Testimonials from "../components/ui/Testimonials";
import Pricing from "../components/ui/Pricing";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvohub - AI-Powered Garage Manager | Track Vehicles, Documents & Maintenance</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Carvohub is your personal AI-assisted garage manager. Track vehicles, manage insurance and documents, monitor maintenance, and get intelligent insights for your car collection.' />
        <meta name='keywords' content='garage manager, car management app, vehicle tracking, AI car assistant, maintenance tracker, car documents, insurance management, fleet management' />

        {/* Open Graph */}
        <meta property='og:title' content='Carvohub - AI-Powered Garage Manager' />
        <meta property='og:description' content='Track vehicles, manage documents, and get AI-powered insights for your entire car collection.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://carvohub.github.io' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Carvohub - AI-Powered Garage Manager' />
        <meta name='twitter:description' content='Track vehicles, manage documents, and get AI-powered insights for your entire car collection.' />
      </Head>

      <Hero />

      <GradientWrapper>
        <Features />
      </GradientWrapper>

      <HowItWorks />

      <GradientWrapper>
        <Capabilities />
      </GradientWrapper>

      <Testimonials />

      <GradientWrapper>
        <Pricing />
      </GradientWrapper>

      <FooterCTA />
    </>
  );
}
