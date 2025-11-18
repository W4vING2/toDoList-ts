import { useEffect, useState } from 'react'
import { useListStore } from '../store/listStore'

export default function FormSearch() {
	const { currentSearch, updateSearch } = useListStore()
	const [val, setVal] = useState(currentSearch)

	useEffect(() => {
		updateSearch(val)
	}, [val, updateSearch])

	return (
		<form className='flex gap-2 max-h-10 relative'>
			<input
				type='text'
				className='w-[250px] px-4 py-3 
         rounded-xl h-10
         bg-white/30 backdrop-blur-md
         border border-black/20
         text-black placeholder-black/40
         shadow-[0_4px_20px_rgba(0,0,0,0.08)]
         focus:outline-none
         focus:bg-white/40
         focus:border-black/30
         transition-all duration-300'
				placeholder='New task title'
				value={currentSearch}
				onChange={e => setVal(e.target.value)}
			/>
			<img
				src='/search.svg'
				alt='search'
				className='absolute top-2.5 right-3'
				width='18px'
				height='18px'
			/>
		</form>
	)
}
