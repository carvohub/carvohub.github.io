import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Carvohub - Pre-Purchase Vehicle Inspection Reports India</title>
                <meta name='description' content='Get detailed vehicle inspection reports before buying a used car in India. 100+ point inspection with photo and video documentation.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content='pre-purchase car inspection India, used car inspection report, vehicle condition report, car buying guide India, automobile inspection service' />
                <meta property='og:title' content='Carvohub - Pre-Purchase Vehicle Inspection Reports India' />
                <meta property='og:description' content='Get detailed vehicle inspection reports before buying a used car. 100+ point inspection with photos and videos.' />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='Carvohub' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content='Carvohub - Pre-Purchase Vehicle Inspection Reports India' />
                <meta name='twitter:description' content='Get detailed 100+ point inspection reports before buying a used car. Independent assessments with photo and video documentation.' />
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
                <link rel='canonical' href='https://carvohub.com' />
            </Head>
            <Navbar />
            <main className="bg-white dark:bg-gray-950 transition-colors">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
