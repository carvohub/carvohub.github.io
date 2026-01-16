import Head from "next/head";
import Hero from "../components/ui/Hero";
import HowItWorks from "../components/ui/HowItWorks";
import FooterCTA from "../components/ui/FooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvohub - Pre-Purchase Vehicle Inspection Reports | Buy Used Cars with Confidence in India</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content="India's trusted pre-purchase vehicle inspection service. Get detailed 100+ point inspection reports with photo and video documentation. Avoid hidden problems when buying used cars. Independent, unbiased assessments." />
        <meta name='keywords' content='pre-purchase car inspection India, used car inspection report, vehicle condition report, second hand car verification, car buying guide India, automobile inspection service, used car assessment, car inspection near me' />

        {/* Open Graph */}
        <meta property='og:title' content='Carvohub - Pre-Purchase Vehicle Inspection Reports India' />
        <meta property='og:description' content='Get detailed vehicle inspection reports before buying a used car. 100+ point inspection with photos and videos. Make informed decisions.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://carvohub.com' />
        <meta property='og:site_name' content='Carvohub' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Carvohub - Pre-Purchase Vehicle Inspection Reports India' />
        <meta name='twitter:description' content='Get detailed 100+ point inspection reports before buying a used car. Independent assessments with photo and video documentation.' />

        {/* Additional SEO */}
        <link rel='canonical' href='https://carvohub.com' />
      </Head>

      <Hero />
      <HowItWorks />
      <FooterCTA />
    </>
  );
}
