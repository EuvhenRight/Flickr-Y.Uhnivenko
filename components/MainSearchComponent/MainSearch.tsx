'use client'
import { Button } from '@/components/ui/button'
import { CardItemList } from '@/components/ui/card-item-list'
import CustomInput from '@/components/ui/input'
import { useSearchData } from '@/lib/hooks/useSearchData'
import { LoaderSkeleton } from '@/lib/utils/loaderSkeleton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const MainSearch = () => {
	const [searchValue, setSearchValue] = useState('')
	const searchParams = useSearchParams()
	const search = searchParams.get('tags') || ''
	const { data, loading } = useSearchData(search)
	const pathname = usePathname()
	const { replace } = useRouter()

	const handleSearch = () => {
		const params = new URLSearchParams(searchParams)
		if (searchValue) {
			params.set('tags', searchValue)
		} else {
			params.delete('tags')
		}
		replace(`${pathname}?${params.toString()}`)
		setSearchValue('')
	}

	return (
		<section className='p-10'>
			<div className='flex justify-end items-center'>
				<CustomInput
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					handleSearch={handleSearch}
				/>
				<Button
					size='lg'
					variant='secondary'
					disabled={!searchValue}
					onClick={handleSearch}
				>
					Search
				</Button>
			</div>
			{loading ? (
				<LoaderSkeleton />
			) : data && data.items.length > 0 ? (
				<CardItemList data={data} />
			) : (
				<div>
					No results found: <b>{search}</b>
				</div>
			)}
		</section>
	)
}

export default MainSearch
