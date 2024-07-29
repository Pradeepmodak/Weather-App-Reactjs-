import { useState } from 'react'
import './App.css'
import windImage from './assets/wind.png'
import humidityImage from './assets/humidity.png'
import visibilityImage from './assets/visibility.png'
import Matric from './components/Matric'
function App() {
  const now=new Date();
const [place,setPlace] = useState("Ranchi");
const [wind,setWind] = useState(0);
const [visibility,setVisibility] = useState(0);
const [Humidity,setHumidity] = useState(0);
const [Temperature,setTemperature] = useState(0);
const apiKey = 'd8b59f5dcbe6b648eb42aaa6c5e787ad';
  const apiUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const handleSearch = async(e) =>
    {
      e.preventDefault();
      const city = document.getElementById('place').value;
      setPlace(city);
      const response = await fetch(apiUrl(city));
      const data = await response.json()
      setWind(data.wind.speed);
      setVisibility(data.visibility);
      setHumidity(data.main.humidity);
      setTemperature(data.main.temp);
    
      console.log(data);

    }
  
    return (
    <>
      <form>
        <div>
          <input placeholder='Place name' id='place' name='place' />
          <button onClick={handleSearch}>Search</button>
        </div>
      </form>
      <section>
        <div>
          <h1>{place.toUpperCase()}</h1>
          <p>{now.toDateString()}</p>
          <h1>{Temperature} °C</h1>
        </div>
      </section>
      <div style={{display: 'flex' , gap: '10px'}}>
     <Matric image={windImage} value={wind+" m/s"} title={"Wind"} />
     <Matric image={humidityImage} value={Humidity+" %"} title={"Humidity"} />
     <Matric image={visibilityImage} value={visibility/1000+" km"} title={"Visibility"} />
      </div>
    </>
  )
}

export default App
