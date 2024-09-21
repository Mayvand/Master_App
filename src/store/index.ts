import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/index';

const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
