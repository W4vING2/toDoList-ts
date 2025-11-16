import { create } from 'zustand'

interface IListItem {
	id: string
	text: string
	completed: boolean
}

interface IInitialState {
	list: IListItem[]
}

interface IFunctions {
	updateList: (newList: IListItem[]) => void
	removeFromList: (id: string) => void
}

interface Store extends IInitialState, IFunctions {}

export const useListStore = create<Store>()(set => ({
	list: [
		{
			id: '1',
			text: 'Sample Task 1',
			completed: false,
		},
	],
	updateList: (newList: IListItem[]) => set({ list: newList }),
	removeFromList: (id: string) =>
		set(state => ({
			list: state.list.filter(item => item.id !== id),
		})),
}))
