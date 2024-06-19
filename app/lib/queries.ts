'use client'
import { AllPostData } from '@/app/lib/types/type'
import { useEffect, useState } from 'react'

export function GetData() {
	const [data, setData] = useState<AllPostData>()
	useEffect(() => {
		const dataPhoto = async () => {
			try {
				const response = await fetch('api/lyb/')
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
