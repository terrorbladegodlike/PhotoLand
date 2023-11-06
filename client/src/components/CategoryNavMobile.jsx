import React from 'react'

// import Icons
import { FiX } from 'react-icons/fi'

const CategoryNavMobile = ({ setCarNavMobile }) => {
  return (
    <div className='w-full h-full bg-primary p-8'>
      {/* Close Icon */}
      <div onClick={() => setCarNavMobile(false)} className='flex justify-end mb-8 cursor-pointer'>
        <FiX className='text-3xl' />
      </div>
    </div>
  )
}

export default CategoryNavMobile