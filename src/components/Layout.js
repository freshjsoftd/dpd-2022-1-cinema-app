import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Outlet } from 'react-router-dom';
// =============================================
import AppHeader from './Header/AppHeader';
import CinemaService from './Service/CinemaService';
import AppFooter from './Footer/AppFooter';



function Layout() {
	return (
		<>
			<Box>
				<Grid container spacing={2}>
					<Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
						<AppHeader />
					</Grid>
					<Grid item lg={2} md={2} xl={2} sm={2} xs={2}
						sx={{bgcolor: 'primary.light',}}
						>
						<ul>
              <li>
                <Link to='/movies'>Movies</Link>
              </li>
              <li>
                <Link to='/actors'>Actors</Link>
              </li>
              <li>
                <Link to='/directors'>Directors</Link>
              </li>
              <li>
                <Link to='/studios'>Studios</Link>
              </li>
            </ul>
					</Grid>
					<Grid item lg={5} md={5} xl={5} sm={5} xs={5} sx={{bgcolor: 'aquamarine', minHeight: '500px'}}>
						<main>
              <Outlet />
            </main>
					</Grid>
					<Grid item lg={5} md={5} xl={5} sm={5} xs={5} sx={{bgcolor: 'primary.light'}}>
						<CinemaService />
					</Grid>
					<Grid item lg={12} md={12} xl={12} sm={12} xs={6}
					 sx={
						{bgcolor: 'primary.dark',
						 color: 'white',
						 minHeight: '150px'}}>
						<AppFooter />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Layout;
