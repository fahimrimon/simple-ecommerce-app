import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Category/Categories'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Products from '../components/Product/Products'
import Slider from '../components/Slider/Slider'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar'

function Home() {
  return (
    <div>
      <Announce></Announce>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default Home
