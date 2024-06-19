import '@/app/globals.css'
import { Header } from '@/components/Header/header'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Flickr App',
	description: 'Open new university with flickr app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={lato.className}>
				<div className='bg-white container m-auto rounded-xl shadow-xl my-14'>
					<Header />
					<main>{children}</main>
				</div>
			</body>
		</html>
	)
}
