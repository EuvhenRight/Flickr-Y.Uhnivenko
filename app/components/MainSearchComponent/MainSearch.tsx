'use client'
import { useSearchData } from '@/app/lib/hooks/useSearchData'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { CardItemList } from '../ui/card-item-list'
import CustomInput from '../ui/input'

const MainSearch = () => {
	const [searchValue, setSearchValue] = useState('')
	const searchParams = useSearchParams()
	const search = searchParams.get('query') || ''
	const { data } = useSearchData(search)
	const pathname = usePathname()
	const { replace } = useRouter()
	const [pending, startTransition] = useTransition()
	console.log('pending', pending)
	const handleSearch = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams)
			if (searchValue) {
				params.set('query', searchValue)
			} else {
				params.delete('query')
			}
			replace(`${pathname}?${params.toString()}`)
			setSearchValue('')
		})
	}

	return (
		<section className='p-10'>
			<div className='flex justify-end items-center'>
				<CustomInput
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
				<Button size='sm' variant='default' onClick={handleSearch}>
					Search
				</Button>
			</div>
			<div>{data && <CardItemList data={data} />}</div>
		</section>
	)
}

export default MainSearch
