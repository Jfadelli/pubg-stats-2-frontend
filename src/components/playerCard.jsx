import React, { useState, useEffect} from 'react';
import axios from "axios"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'

import Vikindi from '../static/Vikendi.jpg'
import Taego from '../static/Taego.webp'
import Miramar from '../static/Miramar.jpg'
import Sanhok from '../static/Sanhok.webp'
import Erangel from '../static/Erangel.jpg'
import Deston from '../static/Deston.jpg'
import Paramo from '../static/Paramo.jpeg'
import Karakin from '../static/Karakin.jpg'

import playerList from '../static/playerList'

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
},[1])


  function convertTime(sec) {
    var min = Math.floor(sec / 60);
    (min >= 1) ? sec = sec - (min * 60) : min = '00';
    (sec < 1) ? sec = '00' : void 0;
    (min.toString().length === 1) ? min = '0' + min : void 0;
    (sec.toString().length === 1) ? sec = '0' + sec : void 0;

    return min + ':' + sec;
  }

  return (
    matchHistory.map((item) => {

      const name = item.stats.name
      const damageDealt = Math.round(item.stats.damageDealt)
      if (name in playerList) {
        const playerId = item.stats.name
        const kills = item.stats.kills
        const DBNOs = item.stats.DBNOs
        const assists = item.stats.assists
        const placement = item.stats.winPlace
        const timeSurvived = item.stats.timeSurvived
        const mapName = item.mapName
        // console.log(`Map: ${mapName} \nName: ${name} | Player Id: ${playerId} \nKills: ${kills} | DBNOs: ${DBNOs} | Assists: ${assists} | Damage: ${damageDealt} \nPlacement: ${placement} | Survival Time: ${timeSurvived}`)

        const parseMap = (mapName) => {
          if (mapName === "Vikindi") {
            return Vikindi
          }
          if (mapName === "Taego") {
            return Taego
          }
          if (mapName === "Miramar") {
            return Miramar
          }
          if (mapName === "Sanhok") {
            return Sanhok
          }
          if (mapName === "Erangel") {
            return Erangel
          }
          if (mapName === "Deston") {
            return Deston
          }
          if (mapName === "Paramo") {
            return Paramo
          }
          if (mapName === "Karakin") {
            return Karakin
          }
        }

        const currImage = parseMap(mapName)

        const card = (
          <>
            <CardContent key={playerId}>
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
                Placement: {placement} | Surival Time: {(convertTime(timeSurvived))}
              </Typography>
            </CardContent>
          </>
        );
        return (
          <Box sx={{ minWidth: 275, maxWidth: 500, margin: 1 }}>
            <Card variant="outlined" >{card}</Card>
          </Box>
        );
      }

    })
  )

}
