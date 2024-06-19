'use client'
import { useSearchData } from '@/app/lib/hooks/useSearchData'
import { CardItemList } from './components/ui/card-item-list'
import CustomInput from './components/ui/input'

export default function Home() {
	const data = useSearchData()

	return (
		<section className='p-10'>
			<div className='flex justify-end'>
				<CustomInput />
			</div>
			<div>{data && <CardItemList data={data} />}</div>
		</section>
	)
}
