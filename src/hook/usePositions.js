import { useContext, useEffect } from 'react';
import { PositionContext } from 'context/Positions';
import { fetchPositions } from 'services/positions';

export function usePositions() {
	const {
		locations,
		setLocations,
		teamSelected,
		setTeamSelected,
		commitmentSelected,
		setCommitmentSelected,
		locationSelected,
		setLocationSelected,
		positions,
		setPositions,
		response,
		setResponse,
		teams,
		setTeams,
		commitments,
		setCommitments,
		positionSelected,
		setPositionSelected,
	} = useContext(PositionContext);

	async function getPositions() {
		setCommitmentSelected("")
		setLocationSelected("")
		setTeamSelected("")
		setPositionSelected({})
		const { commitments, locations, teams, positionsByTeams, response } = await fetchPositions()
		setCommitments(commitments)
		setTeams(teams)
		setLocations(locations)
		setPositions(positionsByTeams)
		setResponse(response)
	}

	useEffect(() => {
		const filteredPositions = response.filter(position => {
			if (
				(!locationSelected || position.categories.location === locationSelected) &&
				(!teamSelected || position.categories.team === teamSelected) &&
				(!commitmentSelected || position.categories.commitment === commitmentSelected)) {
				return position;
			}
		})

		const filteredPositionsOrganized = organizePositionsByTeam(teams, filteredPositions)

		setPositions(filteredPositionsOrganized)
	}, [locationSelected, teamSelected, commitmentSelected])

	function organizePositionsByTeam(teams, response) {
		const positionsByTeams = new Map()
		teams.forEach(team => {
			positionsByTeams.set(team, response.filter(position => position.categories.team === team))
		})
		return positionsByTeams;
	}

	return {
		teams,
		positions,
		locations,
		response,
		commitments,
		teamSelected,
		setTeamSelected,
		locationSelected,
		setLocationSelected,
		commitmentSelected,
		setCommitmentSelected,
		positionSelected,
		setPositionSelected,
		getPositions,
	}
}
