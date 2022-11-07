import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Category/Categories'
import Products from '../components/Product/Products'
import Slider from '../components/Slider/Slider'
import Navbar from '../Shared/Navbar'

function Home() {
  return (
    <div>
      <Announce></Announce>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
    </div>
  )
}

export default Home
