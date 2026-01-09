import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import TopRibbon from "./ui/TopRibbon"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Carvohub - AI-Powered Car Inspection Reports for Dealerships</title>
                <meta name='description' content='Generate professional AI-powered car inspection reports in minutes. Perfect for used car dealerships in India. Share reports on all major listing platforms.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content='car inspection, AI car reports, used car dealerships India, vehicle inspection, car listing, automobile inspection' />
                <meta property='og:title' content='Carvohub - AI Car Inspection Reports for Dealerships' />
                <meta property='og:description' content='Generate professional AI-powered car inspection reports for your dealership. Build trust with customers.' />
                <meta property='og:type' content='website' />
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
            </Head>
            <TopRibbon />
            <Navbar />
            <main className="bg-white dark:bg-gray-900 transition-colors">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
