import React, { FC, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TextBlock from '../TextBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Box } from '@mui/system';

const Desk: FC = () => {
	const data = useSelector((state: RootState) => state.data.items);

	const [currentValue, setCurrentValue] = useState<string | null>(data[0].name);

	const currentItem = data.find(item => item.name === currentValue);

	return (
		<Box sx={{ px: 3 }}>
			<Autocomplete
				value={currentValue}
				onChange={(event: any, newValue: string | null) => {
					setCurrentValue(newValue);
				}}
				disablePortal
				id='combo-box-demo'
				options={data.map(item => item.name)}
				sx={{ width: 300 }}
				renderInput={params => (
					<TextField {...params} label='Выберите тип тары' />
				)}
			></Autocomplete>
			{currentItem && <TextBlock bottle={currentItem} />}
		</Box>
	);
};

export default Desk;
