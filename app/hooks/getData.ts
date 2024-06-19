'use client'
import { useEffect, useState } from 'react'
import { AllPostData } from '../utils/type'

export function GetDataPhoto() {
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
