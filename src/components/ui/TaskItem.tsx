import { useState, type FC } from 'react'
import type { IListItem } from '../../store/listSorage.types'
import { useListStore } from '../../store/listStore'

interface TaskItemProps {
	id: string
	key: string
	text: string
	completed: boolean
}

export const TaskItem: FC<TaskItemProps> = ({ id, key, text, completed }) => {
	const { list, updateList } = useListStore()
	const removeFromListById = (id: string) => {
		const updatedList = list.filter(item => item.id !== id)
		updateList(updatedList)

		const stored = localStorage.getItem('toDo')
		if (!stored) return

		const parsed = JSON.parse(stored)
		const filtered = parsed.filter((item: IListItem) => item.id !== id)

		localStorage.setItem('toDo', JSON.stringify(filtered))
	}
	const [isCompleted, setIsCompleted] = useState(completed)
	return (
		<div
			key={key}
			className='
         flex items-center justify-between
         px-4 py-3 mt-2
         rounded-2xl
         bg-white/30 backdrop-blur-md
         border border-black/20
         shadow-[0_4px_20px_rgba(0,0,0,0.05)]
         transition w-[250px]
      '
		>
			<label className='flex items-center gap-3 cursor-pointer w-full'>
				<input
					type='checkbox'
					checked={isCompleted}
					onChange={() => setIsCompleted(!isCompleted)}
					className='w-5 h-5 rounded border-black/40 text-black focus:ring-0'
				/>

				<span
					className={`
            text-black text-base transition
            ${isCompleted ? 'line-through opacity-50' : ''}
            `}
				>
					{text}
				</span>
			</label>
			<button
				onClick={() => removeFromListById(id)}
				className='
            text-black/60 hover:text-black 
               transition text-xl font-light pl-4
         '
			>
				✕
			</button>
		</div>
	)
}
