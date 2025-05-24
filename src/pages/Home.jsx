import React from 'react'
import Hero from '../components/Hero'
import FeaturedBooks from '../components/FeaturedBooks'
import News from '../components/News'

const Home = () => {
  return (
    <div className='w-11/12 container mx-auto'>
        <Hero/>
        <FeaturedBooks/>
        <News/>
    </div>
  )
}

export default Home