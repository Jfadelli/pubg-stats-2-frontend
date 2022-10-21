import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Settings() {
  const [gameMode, setGameMode] = React.useState('');
  const [season, setSeason] = React.useState('');
  const [requestType, setRequestType] = React.useState('');

  const handleGameModeChange = (e) => {
    setGameMode(e.target.value);
  }

  const handleSeasonChange  = (e) => {
    setSeason(e.target.value);
  }

  const handleChangeRequestType  = (e) => {
    setRequestType(e.target.value);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{marginBottom:1}}>
        <InputLabel id="game-mode">Game Mode</InputLabel>
        <Select
          labelId="game-mode"
          id="game-mode"
          value={gameMode}
          label="Game Mode"
          onChange={handleGameModeChange}
        >
          <MenuItem value={10}>Squads</MenuItem>
          <MenuItem value={20}>Duos</MenuItem>
          <MenuItem value={30}>Solos</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{marginBottom:1}}>
        <InputLabel id="season">Season</InputLabel>
        <Select
          labelId="season"
          id="season"
          value={season}
          label="season"
          onChange={handleSeasonChange}
        >
          <MenuItem value={"20"}>20</MenuItem>
          <MenuItem value={"19"}>19</MenuItem>
          <MenuItem value={"18"}>18</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{marginBottom:1}}>
        <InputLabel id="request-type">Request</InputLabel>
        <Select
          labelId="request-type"
          id="request-type"
          value={requestType}
          label="request-type"
          onChange={handleChangeRequestType}
        >
          <MenuItem value={"Match History"}>Match History</MenuItem>
          <MenuItem value={"misc"}>misc</MenuItem>

        </Select>
      </FormControl>
    </Box>
    
    
  );
}

