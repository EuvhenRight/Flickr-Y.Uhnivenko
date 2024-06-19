import { Skeleton } from '@/components/ui/skeleton'

export const LoaderSkeleton = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<div className='grid grid-cols-4 gap-5 py-10'>
			{array.map((item, index) => (
				<div key={index} className='flex flex-col space-y-3'>
					<Skeleton className='h-[200px] w-[300px] rounded-xl' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px]' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
				</div>
			))}
		</div>
	)
}
