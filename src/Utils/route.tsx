import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';

const Desk = lazy(() => import('../Components/Desk'));
const DataBase = lazy(() => import('../Components/DataBase'));

export const baseRouter = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Desk />
					</Suspense>
				),
			},
			{
				path: '/database',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<DataBase />
					</Suspense>
				),
			},
		],
	},
]);
