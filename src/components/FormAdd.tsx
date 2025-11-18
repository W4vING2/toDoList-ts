import { useForm } from 'react-hook-form'
import { useListStore } from '../store/listStore'

export default function FormAdd() {
	const { register, handleSubmit, reset } = useForm()
	const { updateList, list } = useListStore()

	const addToList = (newItem: string) => {
		const item = {
			completed: false,
			id: (list.length + 1).toString(),
			text: newItem,
		}
		const newArray = [...list, item]
		updateList(newArray)
		const stored = localStorage.getItem('toDo')

		if (!stored) {
			localStorage.setItem('toDo', JSON.stringify([item]))
			return
		}

		const listI = JSON.parse(stored)
		const updated = Array.isArray(listI) ? [...listI, item] : [listI, item]

		localStorage.setItem('toDo', JSON.stringify(updated))
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(data => addToList(data.task))}
			className='flex gap-2 max-h-10'
		>
			<input
				className='w-full px-4 py-3 
         rounded-xl h-10
         bg-white/30 backdrop-blur-md
         border border-black/20
         text-black placeholder-black/40
         shadow-[0_4px_20px_rgba(0,0,0,0.08)]
         focus:outline-none
         focus:bg-white/40
         focus:border-black/30
         transition-all duration-300'
				type='text'
				placeholder='New task title'
				{...register('task')}
			/>
			<button className='border border-transparent bg-black rounded-lg w-15 h-10 text-white transition-colors duration-700 hover:bg-white hover:text-black hover:border-black'>
				Add
			</button>
		</form>
	)
}
