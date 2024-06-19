import { PostItem } from '@/app/utils/type'
import Image from 'next/image'

interface Props {
	item: PostItem
}

export const CartItem = ({ item }: Props) => {
	return (
		<div>
			<div className='w-20 h-20'>
				<Image
					src={item.media.m}
					alt={item.title}
					width={200}
					height={200}
					className='object-cover w-full h-full'
				/>
			</div>
			<div>{item.author}</div>
			<div>{item.date_taken}</div>
			<div></div>
		</div>
	)
}
