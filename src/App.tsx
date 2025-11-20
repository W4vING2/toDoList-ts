import Actions from './components/Actions'
import FormAdd from './components/FormAdd'
import FormSearch from './components/FormSearch'
import { TaskItem } from './components/ui/TaskItem'
import { useListStore } from './store/listStore'

export default function App() {
	const { list, currentSearch } = useListStore()

	return (
		<div className='bg-gray-50 flex items-center justify-center flex-col p-6 shadow-xl text-center min-h-[200px] w-[300px] rounded-lg border border-gray-300 gap-y-2'>
			<h1 className='text-2xl font-bold'>To Do List</h1>
			<FormAdd />
			<FormSearch />
			<Actions />
			<div className='flex flex-col gap-y-0.5'>
				{list
					.filter(item => item.text.includes(currentSearch))
					.map(({ id, text, completed }) => {
						return (
							<TaskItem key={id} id={id} text={text} completed={completed} />
						)
					})}
			</div>
		</div>
	)
}
