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
					<Grid item lg={3} md={3} xl={3} sm={3} xs={3}>
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
					<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
						<main>
              <Outlet />
            </main>
					</Grid>
					<Grid item lg={3} md={3} xl={3} sm={3} xs={3}>
						<CinemaService />
					</Grid>
					<Grid item lg={12} md={12} xl={12} sm={12} xs={6}>
						<AppFooter />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Layout;
