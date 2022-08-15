import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import banner from '../images/banner.jpeg'
import Positions from './Positions';

import { fetchPositions } from '../services/positions';

function Home() {

  const [positions, setPositions] = useState();
  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(true);

  async function init() {
    const { positionsByTeams, teams: t } = await fetchPositions();
    setPositions(positionsByTeams)
    setTeams(t)
    setLoading(false)
  }

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div style={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '9rem',
          width: '100%',
          fontSize: '2.5rem',
          fontWeight: 300
        }
      }>
        Join Us
      </div>
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "1rem auto", py: 5 }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
          Open Positions
        </Typography>
        <Typography
          sx={{ textAlign: "center", maxWidth: "768px", margin: "0 auto" }}
        >
          Our data is training and testing autonomous systems at companies around
          the world. We're looking for talented visionaries to help us to expand
          our impact on the way artificial intelligence is developed.
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress />
          </Box>
        ) : Array.from(teams.values()).map(team => (
          <Positions key={team} team={team} items={positions.get(team)} />
        ))}
      </Box>
    </>
  );
}

export default Home;
