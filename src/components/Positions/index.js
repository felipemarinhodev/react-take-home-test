import { Typography } from '@mui/material';
import { memo } from 'react';
import Position from './Position';

function Positions({ team, items }) {
	return (
		<>
			<Typography variant='body1' style={{
				textTransform: 'uppercase',
				color: '#ffac3c',
				fontWeight: '700',
				marginBottom: 5,
				paddingBottom: 10
			}}
				mx={3}
			>
				{team}
			</Typography>
			{items.map(item => (
				<Position key={item.id} {...item} />
			))}
		</>
	)
}

export default memo(Positions)
