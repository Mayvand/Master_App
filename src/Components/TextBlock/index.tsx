import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { TData } from '../../types/TData';

type TProps = {
	bottle: TData;
};

const TextBlock: FC<TProps> = props => {
	const { bottle } = props;
	const [quantity, setQuantity] = React.useState<number | null>();

	useEffect(() => {
		console.log(quantity);
	}, [quantity]);
	return (
		<Box
			component='form'
			sx={{
				display: 'flex',
				mx: 'auto',
				justifyContent: 'flex-start',
				gap: 8,
			}}
		>
			<Box>
				<Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
					Выбранный формат тары имеет следующие параметры
				</Typography>
				<List>
					<ListItem>
						<ListItemText primary={`Объем бутылки: ${bottle.size}`} />
					</ListItem>
					<ListItem>
						<ListItemText
							primary={`Количество бутылок в транспортной упаковке: ${bottle.inBox}`}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							primary={`Количество упаковок в ряду: ${bottle.inRow}`}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							primary={`Количество рядов в паллете: ${bottle.rows}`}
						/>
					</ListItem>
				</List>
			</Box>

			<Box>
				<TextField
					sx={{ mt: 4 }}
					label='Введите количество бутылок'
					type='number'
					value={quantity}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						const newQuantity = +event.target.value;
						if (typeof newQuantity === 'number') setQuantity(newQuantity);
					}}
				/>
				{quantity && <p>Вы ввели {quantity} бутылок</p>}
			</Box>
		</Box>
	);
};

export default TextBlock;
