import { Box, Button, Stack, Typography } from '@mui/material';
import { usePositions } from 'hook/usePositions';

import './Detail.module.css'
import ListDetail from './ListDetail';
import { useNavigate } from 'react-router-dom';

function Detail() {
	const { positionSelected } = usePositions()
	const navigate = useNavigate()

	const {
		text,
		applyUrl,
		lists,
		description,
		additional,
		categories
	} = positionSelected

	return (
		<Box sx={{
			maxWidth: "1024px",
			width: "100%",
			margin: "0 auto",
			p: 5,
			gap: "1rem"
		}}
		>
			<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
				<Button
					onClick={() => navigate(-1)}
				>
					Back
				</Button>
			</Stack>
			<Typography variant='h2'>{text}</Typography>
			<Typography variant='subtitle2' sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
				{categories.location} / {categories.team}
			</Typography>
			<Typography
				variant='body1'
				className='detail__describe'
				sx={{ marginBottom: '1rem' }}
				dangerouslySetInnerHTML={{ __html: description }}
			>
			</Typography>
			{
				lists.map((description, index) => (
					<ListDetail
						key={`${index}`}
						text={description.text}
						content={description.content}
					/>
				))
			}
			<div
				style={{ lineHeight: 1.4 }}
				dangerouslySetInnerHTML={{ __html: additional }}
			/>
			<Button
				color="primary"
				variant="outlined"
				sx={{ marginTop: '2rem' }}
				href={applyUrl}
			>
				Apply for this jobs
			</Button>
		</Box >
	)
}

export default Detail;
