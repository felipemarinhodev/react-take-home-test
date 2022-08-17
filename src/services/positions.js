export async function fetchPositions() {
	const response = await fetch('https://api.lever.co/v0/postings/paralleldomain?mode=json', {
		method: 'GET',
	}).then(async (response) => {
		return await response.json()
	})
	return handleResponse(response)
}

function organizePositionsByTeam(teams, response) {
	const positionsByTeams = new Map()
	teams.forEach(team => {
		positionsByTeams.set(team, response.filter(position => position.categories.team === team))
	})
	return positionsByTeams;
}

function handleCategories(response) {

	const commitments = new Set()
	const locations = new Set()
	const teams = new Set()

	response.forEach(position => {
		position.categories.commitment && commitments.add(position.categories.commitment);
		position.categories.location && locations.add(position.categories.location);
		position.categories.team && teams.add(position.categories.team);
	});

	return { commitments, locations, teams }
}

function handleResponse(response) {
	const {
		commitments,
		locations,
		teams
	} = handleCategories(response);
	const positionsByTeams = organizePositionsByTeam(teams, response);
	return {
		commitments, locations, teams, positionsByTeams, response
	}
}

export function filterPositions(
	locationSelected,
	teamSelected,
	commitmentSelected,
	response
) {
	return response.filter(item => {
		const { location, team, commitment } = item.categories
		if (locationSelected && locationSelected === location) { return item }
		if (teamSelected && teamSelected === team) { return item }
		if (commitmentSelected && commitmentSelected === commitment) { return item }
	})
}
