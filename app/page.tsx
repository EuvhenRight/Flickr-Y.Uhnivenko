import MainSearch from '@/components/MainSearchComponent/MainSearch'
import { LoaderSkeleton } from '@/lib/utils/loaderSkeleton'
import { Suspense } from 'react'

export default function Home() {
	return (
		<>
			<Suspense fallback={<LoaderSkeleton />}>
				<MainSearch />
			</Suspense>
		</>
	)
}
