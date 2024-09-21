import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addItem, setItems } from '../../store/reducers';
import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import style from './database.module.scss';
import { Box } from '@mui/system';
import DataAccordion from '../DataAccordion';

const DataBase = () => {
	interface Item {
		id: number;
		name: string;
		size: number;
		inBox: number;
		inRow: number;
		rows: number;
	}

	const dispatch = useDispatch();

	const items = useSelector((state: RootState) => state.data.items);

	useEffect(() => {
		const savedItems = localStorage.getItem('items');
		if (savedItems) {
			dispatch(setItems(JSON.parse(savedItems)));
		}
	}, [dispatch]);

	interface FormValues {
		name: string;
		size: string;
		inBox: string;
		inRow: string;
		rows: string;
	}

	interface FormErrors {
		[key: string]: string;
	}

	const formik = useFormik<FormValues>({
		initialValues: {
			name: '',
			size: '',
			inBox: '',
			inRow: '',
			rows: '',
		},
		validate: values => {
			const errors: FormErrors = {};

			if (!values.name) {
				errors.name = 'Название обязательно';
			}

			const numberFields: Array<keyof FormValues> = [
				'size',
				'inBox',
				'inRow',
				'rows',
			];

			numberFields.forEach(field => {
				if (!values[field]) {
					errors[field] = 'Это поле обязательно';
				} else if (isNaN(Number(values[field]))) {
					errors[field] = 'Должно быть числом';
				}
			});

			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			const newId = Date.now();
			const newItem: Item = {
				id: newId,
				name: values.name,
				size: Number(values.size),
				inBox: Number(values.inBox),
				inRow: Number(values.inRow),
				rows: Number(values.rows),
			};

			dispatch(addItem(newItem));
			const updatedItems = [...items, newItem];
			localStorage.setItem('items', JSON.stringify(updatedItems));
			resetForm();
		},
	});

	const { handleSubmit, handleChange, errors, touched, values } = formik;

	return (
		<Box
			sx={{
				bgcolor: '#E5E5E5',
				width: '100%',
				maxWidth: 1000,
				borderRadius: 1,
				padding: 2,
				textAlign: 'center',
				margin: '0 auto',
			}}
			className={style.container}
		>
			<Typography variant='h3' sx={{ mb: 2 }}>
				Типы бутылок
			</Typography>
			<div className={style.mainBlock}>
				<DataAccordion items={items}></DataAccordion>

				<form onSubmit={handleSubmit} className={style.form}>
					<TextField
						name='name'
						type='text'
						placeholder='Введите название тары'
						required
						onChange={handleChange}
						value={values.name}
						variant='standard'
						label='Тара'
						color='secondary'
						error={Boolean(errors.name && touched.name)}
						helperText={errors.name && touched.name ? errors.name : ''}
					/>
					<TextField
						name='size'
						type='number'
						placeholder='Объем'
						required
						onChange={handleChange}
						value={values.size}
						variant='standard'
						label='Объем'
						color='secondary'
						error={Boolean(errors.size && touched.size)}
						helperText={errors.size && touched.size ? errors.size : ''}
					/>
					<TextField
						name='inBox'
						type='number'
						placeholder='Кол-во бутылок в коробке'
						required
						onChange={handleChange}
						value={values.inBox}
						variant='standard'
						label='В коробке'
						color='secondary'
						error={Boolean(errors.inBox && touched.inBox)}
						helperText={errors.inBox && touched.inBox ? errors.inBox : ''}
					/>
					<TextField
						name='inRow'
						type='number'
						placeholder='Кол-во коробок в ряду'
						required
						onChange={handleChange}
						value={values.inRow}
						variant='standard'
						label='В ряду'
						color='secondary'
						error={Boolean(errors.inRow && touched.inRow)}
						helperText={errors.inRow && touched.inRow ? errors.inRow : ''}
					/>
					<TextField
						name='rows'
						type='number'
						placeholder='Кол-во рядов на поддоне'
						required
						onChange={handleChange}
						value={values.rows}
						variant='standard'
						label='Рядов'
						color='secondary'
						error={Boolean(errors.rows && touched.rows)}
						helperText={errors.rows && touched.rows ? errors.rows : ''}
					/>
					<Button variant='contained' type='submit' color='secondary'>
						Добавить тип бутылки
					</Button>
				</form>
			</div>
		</Box>
	);
};

export default DataBase;
