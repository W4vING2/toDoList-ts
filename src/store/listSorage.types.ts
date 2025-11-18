export interface IListItem {
	id: string
	text: string
	completed: boolean
}

export interface IInitialState {
	list: IListItem[]
	currentSearch: string
}

export interface IFunctions {
	updateList: (newList: IListItem[]) => void
	updateSearch: (newSearch: string) => void
}

export interface Store extends IInitialState, IFunctions {}
