import { PostData } from '@/app/lib/types/type'
import { CartItem } from './card-item'

interface Props {
	data: PostData
}

export const CardItemList = ({ data }: Props) => {
	return (
		<div>
			<ul className='grid grid-cols-4 gap-5 py-10'>
				{data?.items.map(item => (
					<li key={item.link}>
						<CartItem item={item} />
					</li>
				))}
			</ul>
		</div>
	)
}
