import { SearchBlock } from '@/components/SearchLogic/searchBlock'
import { Suspense } from 'react'

export default function Home() {
	return (
		<>
			<Suspense>
				<SearchBlock />
			</Suspense>
		</>
	)
}
