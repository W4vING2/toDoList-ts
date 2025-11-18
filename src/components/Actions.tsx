import { useListStore } from '../store/listStore'

export default function Actions() {
	const { updateList } = useListStore()
	const clear = () => {
		updateList([])
		localStorage.setItem('toDo', JSON.stringify([]))
	}
	return (
		<div className='flex justify-between w-full'>
			<p>Total Tasks: </p>
			<button onClick={clear}>Delete All</button>
		</div>
	)
}
