//map images
import Vikindi from '../static/Vikendi.jpg'
import Taego from '../static/Taego.webp'
import Miramar from '../static/Miramar.jpg'
import Sanhok from '../static/Sanhok.webp'
import Erangel from '../static/Erangel.jpg'
import Deston from '../static/Deston.jpg'
import Paramo from '../static/Paramo.jpeg'
import Karakin from '../static/Karakin.jpg'

const ParseMapImage = (mapName) => {
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

export default ParseMapImage