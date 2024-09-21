import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
	name: string;
	size: number;
	inBox: number;
	inRow: number;
	rows: number;
	id: number;
}

interface DataState {
	items: Item[];
}

const initialState: DataState = {
	items: [
		{
			name: '0,5 фирменная-3',
			size: 0.5,
			inBox: 20,
			inRow: 10,
			rows: 4,
			id: 0,
		},
		{
			name: '0,5 Коноплянка',
			size: 0.5,
			inBox: 12,
			inRow: 10,
			rows: 6,
			id: 1,
		},
	],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Item[]>) {
			state.items = action.payload;
		},
		addItem(state, action: PayloadAction<Item>) {
			state.items.push(action.payload);
		},
		removeItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
	},
});

export const { setItems, addItem, removeItem } = dataSlice.actions;
export default dataSlice.reducer;
