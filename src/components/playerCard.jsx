import React, { useState, useEffect } from 'react';
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
//mui imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'

//utils and misc static
import playerList from '../static/playerList'
import ConvertTime from '../utils/ConvertTime'
import ParseMapImage from '../utils/ParseMapImage'


export default function PlayerCard() {
  const [matchHistory, setMatchHistory] = useState([])
  const getMatchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getplayerdata/")
      setMatchHistory(...matchHistory, response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMatchHistory()
  }, [])

  return (
    matchHistory.map((item) => {

      const name = item.stats.name
      if (name in playerList) {
        const damageDealt = Math.round(item.stats.damageDealt)
        const playerId = item.stats.name
        const kills = item.stats.kills
        const DBNOs = item.stats.DBNOs
        const assists = item.stats.assists
        const placement = item.stats.winPlace
        const timeSurvived = item.stats.timeSurvived
        const mapName = item.mapName
        const currImage = ParseMapImage(mapName)
        // console.log(`Map: ${mapName} \nName: ${name} | Player Id: ${playerId} \nKills: ${kills} | DBNOs: ${DBNOs} | Assists: ${assists} | Damage: ${damageDealt} \nPlacement: ${placement} | Survival Time: ${timeSurvived}`)

        const card = (
          <>
            <CardContent >
              <CardMedia
                style={{ borderRadius: 3 }}
                component="img"
                height="194"
                image={currImage}
                alt={`${currImage} image`}
              />
              <Typography variant="h5" component="div">
                {mapName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>
                {name} | Damage: {damageDealt}
              </Typography>
              <Typography variant="body1" component="div">
                Kills: {kills} | DBNOs: {DBNOs} | Assists: {assists}
              </Typography>
              <Typography variant="body1" component="div">
                Placement: {placement} | Surival Time: {(ConvertTime(timeSurvived))}
              </Typography>
            </CardContent>
          </>
        );
        return (
          <Box sx={{ minWidth: 275, maxWidth: 500, margin: 1, boxShadow: 3}}>
            <Card variant="outlined" key={uuidv4}>{card}</Card>
          </Box>
        );
      }
    }))
}