'use client'
import { AllPostData } from '@/app/lib/types/type'
import { useEffect, useState } from 'react'

export function useSearchData() {
	const [data, setData] = useState<AllPostData>()
	const search = 'titles'
	useEffect(() => {
		const dataPhoto = async () => {
			try {
				const response = await fetch(`api/lyb/${search}`)
				const photo = await response.json()
				return setData(photo)
			} catch (error) {
				console.log(error)
			}
		}
		dataPhoto()
	}, [])

	return data?.data
}
