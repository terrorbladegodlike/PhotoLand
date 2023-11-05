import React from 'react'

// Import Components
import LatestProducts from '../components/LatestProducts';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  )
}

export default Home