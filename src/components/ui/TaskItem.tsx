import { useState, type FC } from 'react'

interface TaskItemProps {
	id: string
	text: string
	completed: boolean
	onDelete: (id: string) => void
}

export const TaskItem: FC<TaskItemProps> = ({
	id,
	text,
	completed,
	onDelete,
}) => {
	const [isCompleted, setIsCompleted] = useState(completed)
	return (
		<div
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
            ${completed ? 'line-through opacity-50' : ''}
            `}
				>
					{text}
				</span>
			</label>
			<button
				onClick={() => onDelete(id)}
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
