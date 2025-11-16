import { useEffect } from 'react'
import Actions from './components/Actions'
import FormAdd from './components/FormAdd'
import FormSearch from './components/FormSearch'
import { TaskItem } from './components/ui/TaskItem'
import { useListStore } from './store/listStore'

export default function App() {
	const { removeFromList, list } = useListStore()

	useEffect(() => {
		console.log(list)
	}, [list])

	return (
		<div className='bg-gray-50 flex items-center justify-center flex-col p-6 shadow-xl text-center min-h-[200px] w-[300px] rounded-lg border border-gray-300 gap-y-2'>
			<h1 className='text-2xl font-bold'>To Do List</h1>
			<FormAdd />
			<FormSearch />
			<Actions />
			{list.map(({ id }) => {
				return (
					<TaskItem
						key={id}
						id={id.toString()}
						text={`Task ${id}`}
						completed={false}
						onDelete={() => removeFromList(id)}
					/>
				)
			})}
		</div>
	)
}
