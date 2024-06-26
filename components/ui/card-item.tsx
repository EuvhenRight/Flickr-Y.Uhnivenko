import { PostItem } from '@/lib/types/type'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	item: PostItem
}

export const CartItem = ({ item }: Props) => {
	// FORMAT AUTHOR NAME
	function extractAuthorName(author: string): string {
		// EXTRACT AUTHOR NAME FROM STRING WITH REGEX WITHOUT EMAIL ADDRESS
		const match = author.match(/\("([^"]*)"\)/)
		return match ? match[1] : ''
	}
	// FORMAT DATE AND TIME
	const formattedTime = (dateString: string): string => {
		const date = new Date(dateString)
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
	}
	const formattedDate = (dateString: string): string => {
		const date = new Date(dateString)
		return date.toLocaleDateString()
	}

	return (
		<Link href={item.link}>
			<div className='relative bg-white border border-slate-100 rounded-2xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition'>
				<div className='h-[200px]'>
					<Image
						src={item.media.m}
						alt={item.title}
						width={200}
						height={200}
						className='w-full h-full object-cover rounded-t-2xl'
					/>
				</div>
				<div className='px-4 py-1'>
					<div className='flex justify-between'>
						<p>{formattedTime(item.date_taken)}</p>
						<p>{formattedDate(item.date_taken)}</p>
					</div>
					<p className='font-bold my-2 text-clip overflow-hidden'>
						{item.title}
					</p>
					<p className='italic text-end text-sm'>
						{extractAuthorName(item.author)}
					</p>
				</div>
			</div>
		</Link>
	)
}
