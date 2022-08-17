import { Grid, Typography } from '@mui/material';
import Select from 'components/Select';
import { usePositions } from 'hook/usePositions';

export default function Filters() {
	const {
		teams,
		locations,
		commitments,
		teamSelected,
		setTeamSelected,
		locationSelected,
		setLocationSelected,
		commitmentSelected,
		setCommitmentSelected,
	} = usePositions();
	return (
		<Grid
			container
			sx={{
				my: 5,
				p: 2,
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Grid md={'auto'} sm={12} xs={12} my={1}>
				<Typography variant='body1'>
					FILTER BY:
				</Typography>
			</Grid>
			<Grid md={3} sm={12} xs={12} my={1}>
				<Select
					value={teamSelected}
					setValue={setTeamSelected}
					placeholder={'all teams'}
					ariaLabel={'teams filter'}
					items={Array.from(teams.values())}
				/>
			</Grid>
			<Grid md={3} sm={12} xs={12} my={1}>
				<Select
					value={locationSelected}
					setValue={setLocationSelected}
					placeholder={'all locations'}
					ariaLabel={'locations filter'}
					items={Array.from(locations.values())}
				/>
			</Grid>
			<Grid md={3} sm={12} xs={12} my={1}>
				<Select
					value={commitmentSelected}
					setValue={setCommitmentSelected}
					placeholder={'all commitments'}
					ariaLabel={'commitments filter'}
					items={Array.from(commitments.values())}
				/>
			</Grid>
		</Grid>
	)
}
