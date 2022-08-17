import { Box, CircularProgress, Typography } from "@mui/material";
import Filters from 'components/Filters';
import Positions from 'components/Positions';
import banner from 'images/banner.jpeg';
import { memo, useState } from "react";

import { usePositions } from 'hook/usePositions';
import { useEffect } from 'react';

function Home() {

  const [loading, setLoading] = useState(true);
  const {
    teams,
    positions,
    getPositions } = usePositions();

  async function init() {
    getPositions().finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    init()
  }, [])

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
          fontWeight: 300,
          backgroundColor: 'pink',
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
        ) :
          <>
            <Filters />
            {Array.from(teams.values()).map(team => (
              positions.get(team).length > 0 && (
                <Positions
                  key={team}
                  team={team}
                  items={positions.get(team)}
                />
              )))}
          </>}
      </Box>
    </>
  );
}

export default memo(Home);
