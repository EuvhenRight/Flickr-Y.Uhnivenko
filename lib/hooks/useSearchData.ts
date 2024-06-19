'use client'
import { PostData } from '@/lib/types/type'
import { useEffect, useState } from 'react'

export function useSearchData(searchData: string) {
	const [data, setData] = useState<PostData>()
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		const dataPhoto = async () => {
			try {
				setLoading(true)
				const response = searchData
					? await fetch(`api/lyb/${searchData}`)
					: await fetch('api/lyb/')
				const photo = await response.json()
				return setData(photo?.data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		dataPhoto()
	}, [searchData])

	return { data, loading }
}
