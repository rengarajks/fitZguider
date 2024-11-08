import React from 'react'
import BodyFatStatus from '../Components/BodyFat'
import BodyWeightStatus from '../Components/BodyWeight'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='text-black'>
      <Navbar/>
      <BodyFatStatus/>
      <BodyWeightStatus/>
    </div>
  )
}

export default Home