import React, { useContext } from 'react'

// Import Icons
import { IoClose } from 'react-icons/io5'

// Import Cart Context
import { CartContext } from './../context/CartContext';

// Import Components
import CartItem from './CartItem';

const Cart = () => {

  const { setIsOpen, cart } = useContext(CartContext)

  return (
    <div className='w-full h-full px-4 text-white'>
      <div>
        {/* Close Icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
        >
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart