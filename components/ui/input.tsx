import { Search } from 'lucide-react'

interface Props {
	searchValue: string
	setSearchValue: (searchValue: string) => void
	handleSearch: () => void
}
export const Input = ({ searchValue, setSearchValue, handleSearch }: Props) => {
	return (
		<>
			<div className='relative'>
				<Search className='absolute top-3 left-4' />
				<input
					className='border rounded-lg py-2.5  pl-11 pr-5 outline-none w-full focus:border-gray-400'
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
