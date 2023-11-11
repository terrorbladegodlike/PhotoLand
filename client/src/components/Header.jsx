import React, { useContext, useState } from 'react'

// Import Images
import Logo from '../img/logo.png'

// Import Icons
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'

// Import Link from React-router-DOM
import { Link } from 'react-router-dom'

// Components
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';
import Cart from './Cart';

// Import CartContext
import { CartContext } from '../context/CartContext'

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext)
  const [catNavMobile, setCarNavMobile] = useState(false)
  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className="container mx-auto">
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* Menu */}
          <div
            onClick={() => setCarNavMobile(true)}
            className='text-3xl xl:hidden cursor-pointer'
          >
            <FiMenu />
          </div>
          {/* Category nav mobile */}
          <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCarNavMobile={setCarNavMobile} />
          </div>
          {/* Logo */}
          <Link to={'/'}>
            <img src={Logo} alt="logo" />
          </Link>
          {/* SearchForm - show only on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>
          {/* Phone & Cart */}
          <div className='flex items-center gap-x-[10px]'>
            {/* Cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='relative cursor-pointer'
            >
              <SlBag className='text-2xl' />
              {/* Amount */}
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
                {itemsAmount}
              </div>
            </div>
            {/* Cart */}
            <div className={`
              ${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-lg fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
              <Cart />
            </div>
          </div>
        </div>
        {/* SearchForm - show on mobile only */}
        <div className='xl:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  )
}

export default Header