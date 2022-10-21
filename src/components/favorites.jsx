import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// import addFavorite from './addFavorite'

import TextField from '@mui/material/TextField';
// import playerList from '../static/playerList';

const initialList = [
  {
    userName: "Slim_Reaper_",
    playerId: "account.23d9e6fd73b64e4a84fefdb5dd17c6d9",
    cached: "False"
  },
  {
    userName: "unladenAFswallow",
    playerId: "account.363d31e855434e92b9af990059ad03b0",
    cached: "False"
  },
  {
    userName: "sushimaneTV",
    playerId: "account.59e341f6653a4104b3bed2c4eeb00f5b",
    cached: "False"
  },
  {
    userName: "MyNameIsBuck_",
    playerId: "account.e1963005d7b445d99f19cd91affb779d",
    cached: "False"
  },
  {
    userName: "VlakatafakatA",
    playerId: "account.ec61ba525c2442d19c2fe9de80ced4c9",
    cached: "False"
  }
];

export default function Favorites() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }


  function handleAdd(e) {
    const newPlayerObj = {
      userName: name,
      playerId: "",
      cached: "False"
    };
    setList(playerList => [...playerList, newPlayerObj]);
    setName("");
    e.preventDefault()
    
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.black', color: "gray" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <Typography sx={{ textAlign: 'left', marginTop: 2, marginLeft: 2 }} color="text.primary" >
            Favorites
          </Typography>

          {list.map((item) => (
            <ListItem key={item.playerId} disablePadding>
              <ListItemButton >
                <ListItemText primary={item.userName} />
              </ListItemButton>
            </ListItem>
          )
          )}
        </List>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '15ch' }, }} noValidate autoComplete="off" onSubmit={handleAdd}>
          <TextField id="add-favorite" label="Add Favorite" variant="standard" value={name} onChange={handleChange} />
        </Box>
      </nav>
    </Box>
  );
}