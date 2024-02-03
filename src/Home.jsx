import axios from "axios";
import React, {useState } from "react";
import {IoMdSearch,} from "react-icons/io"
// import {BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind,} from "react-icons/bs"

// import {TbTemperatureCelsuis} from "react-icons/tb"
// import {ImSpinner8} from "react-icons/im"

const Home = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: "london",
    humidity: 10,
    speed: 2,
  });

  const [name, setName] = useState("");

  const handleSearch=()=>{
    if(name!== " "){
      const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`;
    axios.get(apiUrl).then((res) => {
      setData({
        ...data,
        celcius: res.data.main.temp,
        name: res.data.name,
        humidity: res.data.main.humidity,
        speed: res.data.wind.speed,
      });
    })
    .catch(err => console.log(err))
    }
  }

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-white bg-no-repeat bg-cover flex flex-col items-center justify-center px-4 lg:px-0">
       
       <form className="flex gap-2 items-center">
         <input placeholder="Search" className="py-1 px-4 mb-4 focus:outline-none rounded-full" onChange={(e)=> setName(e.target.value)}/>
         <span className="mb-4 bg-white rounded-full py-2 px-2 cursor-pointer" onClick={handleSearch}><IoMdSearch/></span>
       </form>

      <div className="w-full max-w-[450px] bg-blue-500/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        <div>

          <div className="flex justify-center flex-col items-center gap-2">
            <img src="Sunny.png" width={180}/>
            <h1 className="font-bold text-4xl">{Math.round(data.celcius)}°C</h1>
            <h1 className="font-bold text-4xl capitalize">{data.name}</h1>
          </div>

          <div className="flex justify-around items-center text-center py-8 mt-8 space-y-2">
             <div>
                <img src="Humidity.png" width={40} className="ml-8"/>
                <p className="font-bold text-2xl">{Math.round(data.humidity)}%</p>
                <p className="font-bold text-2xl">Humidity</p>
             </div>
             <div>
             <img src="wind.png" width={50} className="ml-4"/>
             <p className="font-bold text-2xl">{Math.round(data.speed)} Km/h</p>
             <p className="font-bold text-2xl">Wind</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
