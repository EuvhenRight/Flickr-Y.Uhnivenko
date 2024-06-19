'use client'
import { PostData } from '@/app/lib/types/type'
import { useEffect, useState } from 'react'

export function useSearchData(searchData: string) {
	const [data, setData] = useState<PostData>()

	useEffect(() => {
		const dataPhoto = async () => {
			try {
				const response = searchData
					? await fetch(`api/lyb/${searchData}`)
					: await fetch('api/lyb/')
				const photo = await response.json()
				return setData(photo?.data)
			} catch (error) {
				console.log(error)
			}
		}
		dataPhoto()
	}, [searchData])

	return { data }
}
