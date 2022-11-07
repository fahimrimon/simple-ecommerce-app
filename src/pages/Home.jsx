import React from 'react'
import Announce from '../components/Announce'
import Slider from '../components/Slider/Slider'
import Navbar from '../Shared/Navbar'

function Home() {
  return (
    <div>
      <Announce></Announce>
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  )
}

export default Home
