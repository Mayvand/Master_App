import React, { FC } from 'react';
import { TData } from '../../types/TData';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	List,
	ListItem,
	ListItemText,
	Typography,
	IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/reducers';

type TProps = {
	items: TData[];
};

const DataAccordion: FC<TProps> = props => {
	const { items } = props;

	const dispatch = useDispatch();

	const handleRemoveItem = (id: number | undefined) => {
		if (id !== undefined) {
			dispatch(removeItem(id));
			const updatedItems = items.filter(item => item.id !== id);
			localStorage.setItem('items', JSON.stringify(updatedItems));
		} else {
			console.error('ID is undefined');
		}
	};

	return (
		<Box sx={{ order: 1, width: 400, mt: 2 }}>
			{items.map(item => (
				<Accordion key={item.id}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						sx={{ flexDirection: 'row-reverse', gap: 2 }}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
							}}
						>
							<Typography sx={{ m: 0, lineHeight: 2.5 }}>
								{item.name}
							</Typography>
							<IconButton
								color='primary'
								onClick={() => handleRemoveItem(item.id)}
							>
								<DeleteIcon color='error'></DeleteIcon>
							</IconButton>
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<List sx={{ p: 0 }}>
							<ListItem sx={{ p: 0 }}>
								<ListItemText>Объем: {item.size}</ListItemText>
							</ListItem>
							<ListItem sx={{ p: 0 }}>
								<ListItemText>
									Бутылок в транспортной упаковке: {item.inBox}
								</ListItemText>
							</ListItem>
							<ListItem sx={{ p: 0 }}>
								<ListItemText>Упаковок в ряду: {item.inRow}</ListItemText>
							</ListItem>
							<ListItem sx={{ p: 0 }}>
								<ListItemText>Рядов: {item.rows}</ListItemText>
							</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export default DataAccordion;
