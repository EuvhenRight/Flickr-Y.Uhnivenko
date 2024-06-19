import { Search } from 'lucide-react'

const CustomInput = () => {
	return (
		<div className='relative'>
			<Search className='absolute top-2.5 left-4' />
			<input
				className='border rounded-xl py-2 pl-11 pr-4 outline-none focus:border-gray-400'
				type='text'
				placeholder='Search'
			/>
		</div>
	)
}

export default CustomInput
