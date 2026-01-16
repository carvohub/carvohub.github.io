import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Carvohub - Independent Vehicle Inspection Reports</title>
                <meta name='description' content='Get comprehensive vehicle inspection reports with expert analysis. Make informed decisions when buying used cars in India.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content='car inspection reports India, vehicle inspection, used car buyers guide, car assessment, automobile inspection, car condition report' />
                <meta property='og:title' content='Carvohub - Independent Vehicle Inspection Reports' />
                <meta property='og:description' content='Comprehensive vehicle inspection reports for used car buyers. Expert analysis and transparent assessments.' />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='Carvohub' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content='Carvohub - Independent Vehicle Inspection Reports' />
                <meta name='twitter:description' content='Comprehensive vehicle inspection reports for used car buyers.' />
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
