import { createContext, useState } from 'react';

export const PositionContext = createContext();
PositionContext.displayName = 'Positons';

export default function PositionsProvider({ children }) {
	const [locations, setLocations] = useState();
	const [teamSelected, setTeamSelected] = useState("");
	const [commitmentSelected, setCommitmentSelected] = useState("");
	const [locationSelected, setLocationSelected] = useState("");
	const [positions, setPositions] = useState();
	const [response, setResponse] = useState();
	const [teams, setTeams] = useState();
	const [commitments, setCommitments] = useState();
	const [positionSelected, setPositionSelected] = useState({});

	return (
		<PositionContext.Provider
			value={{
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
			}}
		>
			{children}
		</PositionContext.Provider>
	)
}

