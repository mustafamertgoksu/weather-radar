import { Time } from './components/Time';
import { Location } from './components/Location';
import { Weather } from './components/Weather';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [unit, setUnit] = useState('metric')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2a39c5d6d08610900d87d96687f6b1e7&units=${unit}`;

  const searchLocation = async (e) => {
    if(e.key === 'Enter') {
      await axios.get(url).then(res => {
         setData(res.data)
         console.log(res.data)
       })
       // purge input value
       setLocation('')
     }
  }

  return (
    <div className="h-screen max-w-screen bg-slate-800 m-0 p-0 flex flex-col items-center">
      <div className='flex justify-center items-center'>
        <BsSearch className='text-2xl text-gray-50 cursor-pointer mr-4' />
        <input value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder="Search a City" className="px-10 py-2 my-8 rounded box-border outline-none text-xl placeholder:text-lg" onKeyPress={searchLocation} />
      </div>
      <div className='text-center'>
        <span onClick={() => setUnit('metric')} className='bg-gray-50 p-2 cursor-pointer'>C°</span>
        {' '}
        <span onClick={() => setUnit('imperial')} className='bg-gray-50 p-2 cursor-pointer'>F°</span>
      </div>
      <Time />
      <Location location={location} />
      <Weather data={data} setData={setData} unit={unit} />
    </div>
  )
}