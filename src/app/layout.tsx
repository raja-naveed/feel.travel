import { Poppins } from 'next/font/google'
import SiteHeader from './(client-components)/(Header)/SiteHeader'
import ClientCommons from './ClientCommons'
import './globals.css'
import '@/fonts/line-awesome-1.3.0/css/line-awesome.css'
import '@/styles/index.scss'
import 'rc-slider/assets/index.css'
import Footer from '@/components/Footer'
import FooterNav from '@/components/FooterNav'
import { Metadata } from 'next'
import ThemeProvider from './theme-provider'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Feel Travel',
	description: 'Feel Travel offers a unique experience for modern nomads seeking luxurious villas and unforgettable adventure trips. Specializing in curating personalized journeys and premium stays, Feel Travel connects travelers with handpicked villas and tailor-made trips designed for those who value freedom and exploration. Discover the perfect balance of comfort, adventure, and flexibility with Feel Travel.',
	keywords: 'Feel Travel, nomad travel, villa rentals, adventure trips, luxury villas, personalized journeys, nomad lifestyle, travel for nomads, exclusive trips, travel and adventure.',
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: any
}) {
	return (
		<html lang="en" className={poppins.className}>
			<ThemeProvider>
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
					<div>
						<SiteHeader />
						{children}
						{/* <FooterNav /> */}
						<Footer />
					</div>

					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}
