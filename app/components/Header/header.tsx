'use client'
import { ColorText } from '@/app/utils/coloredText'
import Link from 'next/link'
import { useEffect } from 'react'

export const Header = () => {
	useEffect(() => {
		// CHANGE COLOR TEXT
		ColorText('flickr-app', 'Flickr App')
	}, [])

	return (
		<header className='text-end bg-zinc-300 my-5 px-5'>
			<Link href='/'>
				<h1 id='flickr-app' className='text-5xl font-bold uppercase'></h1>
			</Link>
			<p className='italic'>Your Moments, Your Story – Universale on Flickr</p>
		</header>
	)
}
