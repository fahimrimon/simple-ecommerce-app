import React from 'react'
import Announce from '../components/Announce'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Products from '../components/Product/Products'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar'

function CategoryPages() {
  return (
    <div>
      <Announce></Announce>
      <Navbar></Navbar>
      <div className='flex flex-col p-5'>
          <h1 className='text-[30px]'>Men's Cloth</h1>
          <div className='flex items-center justify-between mt-3'>
              <div className='flex mobile:flex-col'>
                  <p>Filter by</p> 
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Size</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                  </select>
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Color</option>
                      <option>Yellow</option>
                      <option>Blue</option>
                      <option>Red</option>
                      <option>Green</option>
                  </select>
              </div>
              <div className='flex mobile:flex-col mobile:items-end'>
                  <p>Sort by</p>
              <select className='ml-3 border-2 border-silver'>
                      <option selected >Newest (first)</option>
                      <option>Oldest (first)</option>
                      <option>Price (asc)</option>
                      <option>Price (desc)</option>
                  </select>
              </div>
          </div>
      </div>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default CategoryPages