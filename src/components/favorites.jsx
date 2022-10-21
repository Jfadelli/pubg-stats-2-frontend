import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import addFavorite from './addFavorite'

export default function BasicList() {
  const [playerList, setPlayerList] = useState({
    "Slim_Reaper_": "account.23d9e6fd73b64e4a84fefdb5dd17c6d9",
    "unladenAFswallow": "account.363d31e855434e92b9af990059ad03b0",
    "sushimaneTV": "account.59e341f6653a4104b3bed2c4eeb00f5b",
    "MyNameIsBuck_": "account.e1963005d7b445d99f19cd91affb779d",
    "VlakatafakatA": "account.ec61ba525c2442d19c2fe9de80ced4c9"
  })

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.black', color: "gray" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <Typography sx={{textAlign: 'left', marginTop: 2, marginLeft:2}} color="text.primary" >Favorites</Typography>
          {Object.keys(playerList).map((key, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary={key} />
                </ListItemButton>
              </ListItem>
            )

          })}
          {addFavorite()}
        </List>
      </nav>
    </Box>
  );
}