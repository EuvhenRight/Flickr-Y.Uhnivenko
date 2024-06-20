import { Skeleton } from '@/components/ui/skeleton'

export const LoaderSkeleton = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
			{array.map(index => (
				<div key={index} className='flex flex-col space-y-3'>
					<Skeleton className='h-[200px] w-[300px] rounded-xl' />
				</div>
			))}
		</div>
	)
}
