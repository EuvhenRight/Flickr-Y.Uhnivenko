'use client'
import { PostData } from '@/lib/types/type'
import { useEffect, useState } from 'react'

export function useSearchData(searchData: string) {
	const [data, setData] = useState<PostData>()
	// LOADING STATE
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		const dataPhoto = async () => {
			try {
				setLoading(true)
				// GET DATA FROM API DIFFERENT ENDPOINTS
				const response = searchData
					? await fetch(`api/lyb/${searchData}`)
					: await fetch('api/lyb/')

				const posts = await response.json()
				return setData(posts?.data) // SET DATA WITH .data
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
