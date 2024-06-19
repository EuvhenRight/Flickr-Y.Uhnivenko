'use client'
import { GetDataPhoto } from '@/app/hooks/getData'
import { CartItem } from './components/ui/cart-item'

export default function Home() {
	const data = GetDataPhoto()
	console.log(data)
	return (
		<section className='container my-10'>
			<div className='text-white'>
				<ul>
					{data?.items.map(item => (
						<li key={item.link}>
							<CartItem item={item} />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
