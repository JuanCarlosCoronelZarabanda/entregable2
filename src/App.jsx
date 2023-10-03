import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import WeatherContainer from './componets/WeatherContainer'

function App() {
  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude 
    const API_KEY = "6d3cc4b10f34bf83a251bd3972243112"
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)

    .then(({ data }) => setWeather(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-my-background-image text-white px-2'>
      {weather === null ? (
        //
        <div className="loader grid-cols-1 text-center">
          <img src="public/Vector.png"alt="Cargando..." /><h1>Cargando...</h1> 
        </div>
      ) : (
        <WeatherContainer weather={weather} />
      )}      
      
    </main>
  )
}

export default App
