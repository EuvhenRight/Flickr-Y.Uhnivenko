import { Search } from 'lucide-react'

interface Props {
	searchValue: string
	setSearchValue: (searchValue: string) => void
}
const CustomInput = ({ searchValue, setSearchValue }: Props) => {
	return (
		<>
			<div className='relative mx-2'>
				<Search className='absolute top-2.5 left-4' />
				<input
					className='border rounded-xl py-2 pl-11 pr-4 outline-none focus:border-gray-400'
					type='text'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder='Search'
				/>
			</div>
		</>
	)
}

export default CustomInput
