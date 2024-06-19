import { CartItem } from '@/components/ui/card-item'
import { PostData } from '@/lib/types/type'
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
