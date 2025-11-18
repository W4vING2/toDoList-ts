import { create } from 'zustand'
import type { IListItem, Store } from './listSorage.types'

const pastData: IListItem[] = JSON.parse(localStorage.getItem('toDo') || '[]')

export const useListStore = create<Store>()(set => ({
	list: pastData,
	currentSearch: '',
	updateList: (newList: IListItem[]) => set({ list: newList }),
	updateSearch: (newSearch: string) => set({ currentSearch: newSearch }),
}))
