'use client'
import { Button } from '@/components/ui/button'
import { CardItemList } from '@/components/ui/card-item-list'
import { Input } from '@/components/ui/input'
import { useSearchData } from '@/lib/hooks/useSearchData'
import { LoaderSkeleton } from '@/lib/utils/loaderSkeleton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const SearchLogic = () => {
	// VALUE FROM SEARCH PARAMS
	const [searchValue, setSearchValue] = useState('')
	const searchParams = useSearchParams()
	const search = searchParams.get('tags') || ''
	const pathname = usePathname()

	// GET DATA FROM API
	const { data, loading } = useSearchData(search)

	// REPLACE ROUTE WITH NEW PARAMS
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
			<div className='flex flex-col md:flex-row justify-between lg:items-center'>
				<p className='py-2'>
					Results: <b>{data?.title}</b>
				</p>
				{/* SEARCH INPUT */}
				<div className='flex flex-col sm:flex-row'>
					<Input
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						handleSearch={handleSearch}
					/>
					<Button
						className='my-2 sm:ml-2 sm:my-0'
						size='lg'
						variant='secondary' // SECONDARY BUTTON COLOR SETUP MANUALLY
						disabled={!searchValue}
						onClick={handleSearch}
					>
						Search
					</Button>
				</div>
			</div>
			{loading ? (
				// LOADER SKELETON
				<LoaderSkeleton />
			) : data && data.items.length > 0 ? (
				// CARD ITEM LIST COMPONENT
				<CardItemList data={data} />
			) : (
				// NO RESULTS FOUND
				<div>
					No results found: <b>{search}</b>
				</div>
			)}
		</section>
	)
}
