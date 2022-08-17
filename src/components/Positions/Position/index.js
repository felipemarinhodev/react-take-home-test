import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { usePositions } from 'hook/usePositions';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import './Position.module.css';

function Position(item) {
	const { text: title, categories: { location, team }
	} = item;
	const navigate = useNavigate()
	const { setPositionSelected } = usePositions();

	function handleClick() {
		setPositionSelected(item)
		navigate(`/job/${item.id}`)
	}

	return (
		<Container onClick={() => handleClick()}>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				'@media (max-width: 960px)': {
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
				}
			}}>
				<Grid Grid style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					marginBottom: '1rem',
					marginTop: '1rem',
					height: '100%',
					gap: '0.5rem',
				}}>
					<Typography variant="h3" style={{ marginBottom: '2px' }}>
						{title}
					</Typography>
					<Typography variant='subtitle2' style={{ textTransform: 'uppercase' }}>
						{`${location} / ${team}`}
					</Typography>
				</Grid >
				<Grid style={{ alignItems: 'space-around' }}>
					<Button color="primary" variant="outlined" >Apply</Button>
				</Grid>
			</Box>
			<div style={{
				height: '1px',
				backgroundColor: 'rgb(129, 146, 158)',
				margin: '1rem 0'
			}} />
		</Container >
	)
}

export default memo(Position)
