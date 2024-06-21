'use client'
import { ColorText } from '@/lib/utils/coloredText'
import Link from 'next/link'
import { useEffect } from 'react'

export const Header = () => {
	// CHANGE COLOR TEXT FUNCTION
	useEffect(() => {
		ColorText('flickr-app', 'Flickr App')
	}, [])

	return (
		<header className='flex flex-col justify-between border-b border-slate-300 px-2 sm:px-10 py-8'>
			<Link href='/'>
				<h1
					id='flickr-app'
					className='text-2xl sm:text-3xl lg:text-5xl font-bold uppercase'
				></h1>
			</Link>
			<p className='italic text-sm sm:text-md'>
				Your Moments, Your Story – Universal on Flickr
			</p>
		</header>
	)
}
