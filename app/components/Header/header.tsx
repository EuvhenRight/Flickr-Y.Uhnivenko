'use client'
import { ColorText } from '@/app/lib/utils/coloredText'
import Link from 'next/link'
import { useEffect } from 'react'

export const Header = () => {
	useEffect(() => {
		// CHANGE COLOR TEXT
		ColorText('flickr-app', 'Flickr App')
	}, [])

	return (
		<header className='flex flex-col justify-between border-b border-slate-300 px-10 py-8'>
			<Link href='/'>
				<h1 id='flickr-app' className='text-5xl font-bold uppercase'></h1>
			</Link>
			<p className='italic'>Your Moments, Your Story – Universale on Flickr</p>
		</header>
	)
}
