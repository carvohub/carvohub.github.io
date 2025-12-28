import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Carvohub - AI-Powered Garage Manager</title>
                <meta name='description' content='Carvohub is your personal AI-assisted garage manager. Track vehicles, manage documents, monitor maintenance, and get intelligent insights for your entire car collection.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content='garage manager, car management, vehicle tracking, AI car assistant, maintenance tracker, car documents, insurance management' />
                <meta property='og:title' content='Carvohub - AI-Powered Garage Manager' />
                <meta property='og:description' content='Your personal AI-assisted garage manager. Track vehicles, manage documents, and get intelligent insights.' />
                <meta property='og:type' content='website' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
