import { Search } from 'lucide-react'

interface Props {
	searchValue: string
	setSearchValue: (searchValue: string) => void
	handleSearch: () => void
}
const CustomInput = ({ searchValue, setSearchValue, handleSearch }: Props) => {
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
					onKeyDown={e => e.key === 'Enter' && handleSearch()}
				/>
			</div>
		</>
	)
}

export default CustomInput
