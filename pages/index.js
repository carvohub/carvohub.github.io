import Head from "next/head";
import Hero from "../components/ui/Hero";
import HowItWorks from "../components/ui/HowItWorks";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvohub - Independent Vehicle Inspection Reports for Used Car Buyers in India</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Get comprehensive vehicle inspection reports with expert analysis. Make informed decisions and avoid costly mistakes when buying used cars in India. Independent, transparent, and detailed assessments.' />
        <meta name='keywords' content='car inspection reports India, vehicle inspection, used car buyers guide, car assessment, automobile inspection, car condition report, used car verification, pre-purchase inspection' />

        {/* Open Graph */}
        <meta property='og:title' content='Carvohub - Independent Vehicle Inspection Reports' />
        <meta property='og:description' content='Comprehensive vehicle inspection reports for used car buyers. Expert analysis and transparent assessments.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://carvohub.com' />
        <meta property='og:site_name' content='Carvohub' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Carvohub - Independent Vehicle Inspection Reports' />
        <meta name='twitter:description' content='Comprehensive vehicle inspection reports for used car buyers in India.' />

        {/* Additional SEO */}
        <link rel='canonical' href='https://carvohub.com' />
      </Head>

      <Hero />
      <HowItWorks />
      <FooterCTA />
    </>
  );
}
