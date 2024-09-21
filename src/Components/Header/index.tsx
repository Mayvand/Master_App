import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './Header.module.scss';

const Header: FC = () => {
	return (
		<>
			<AppBar
				position='static'
				sx={{ marginBottom: 5, height: 70 }}
				color='secondary'
			>
				<Toolbar sx={{ alignItems: 'center', gap: 3 }}>
					<Typography variant='h6' component='div' sx={{ marginRight: 2 }}>
						MasterApp
					</Typography>

					<Link className={style.link} to={'/'}>
						<Button
							sx={{ padding: 1, height: 70 }}
							variant='text'
							className={style.button}
						>
							Desk
						</Button>
					</Link>

					<Link className={style.link} to={'/database'}>
						<Button
							sx={{ padding: 1, height: 70 }}
							variant='text'
							className={style.button}
						>
							DataBase
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<Outlet />
		</>
	);
};

export default Header;
