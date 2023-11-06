import React from 'react'

// import Icons
import { FiX } from 'react-icons/fi'

// Import Link from React-Router-DOM
import { Link } from 'react-router-dom'

// Import UseFetch Hook
import useFetch from './../hooks/useFetch';

const CategoryNavMobile = ({ setCarNavMobile }) => {

  // Get Categories
  const { data } = useFetch('/categories')

  return (
    <div className='w-full h-full bg-primary p-8'>
      {/* Close Icon */}
      <div
        onClick={() => setCarNavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer'
      >
        <FiX className='text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map(category => {
          return (
            <Link
              className='uppercase font-medium'
              key={category.id}
              to={`products/${category.id}`}
            >
              {category.attributes.title} Cameras
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryNavMobile