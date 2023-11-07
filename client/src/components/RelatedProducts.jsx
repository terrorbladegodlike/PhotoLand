import React from 'react'

// Import UseFetch Hook
import useFetch from './../hooks/useFetch';

// Import Components
import ProductSlider from './ProductSlider';


const RelatedProducts = ({ categoryTitle }) => {

  // Get Product By Category Title
  const { data } = useFetch(`products?populate=*&filters[categories][title]=${categoryTitle}`)

  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <h2 className='h2 mb-6 text-center xl:text-left'>
          Related Product
        </h2>
        <ProductSlider data={data} />
      </div>
    </div>
  )
}

export default RelatedProducts