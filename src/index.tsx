import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './Utils/route';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

declare module '@mui/material/styles' {
	interface Palette {
		ochre: Palette['primary'];
	}

	interface PaletteOptions {
		ochre?: PaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		ochre: true;
	}
}

let theme = createTheme({
	palette: {
		ochre: {
			main: '#1976d2',
			light: '#073F7D',
			dark: '#032F59',
			contrastText: '#242105',
		},
		secondary: { main: '#032F59', light: '#063B6F', dark: '#012140' },
	},
});

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={baseRouter} />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
