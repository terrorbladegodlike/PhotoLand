import React, { useState, useEffect } from 'react'

// Import UseParams from React-Router-DOM
import { useParams } from 'react-router-dom'

// Import UseFetch Hook
import useFetch from './../hooks/useFetch';

// Import Components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {

  const { id } = useParams()

  // Get Products Based On Category ID
  const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`)

  const [title, setTitle] = useState(null)
  // Set Title When The Data Is Fetching
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })

  return (
    <div className='mb-16 pt-40 lg:pt-0'>
      <div className="container mx-auto">
        <div className='flex gap-x-[30px]'>
          <CategoryNav />
          <main>
            {/* Title */}
            <div className='py-3 text-xl uppercase text-center lg:text-left'>
              {title} cameras
            </div>
            {/* Products Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {data?.map(product => {
                return (
                  <Product
                    product={product}
                    key={product.id}
                  />
                )
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products