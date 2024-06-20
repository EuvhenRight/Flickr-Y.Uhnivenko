import { SearchLogic } from '@/components/SearchLogic/searchLogic'
import { Suspense } from 'react'

export default function Home() {
	return (
		<>
			<Suspense>
				<SearchLogic />
			</Suspense>
		</>
	)
}
