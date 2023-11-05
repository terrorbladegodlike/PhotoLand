import React from 'react'

// Import Swiper React
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper React Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css'

// Import Required modules
import { Pagination, Navigation } from 'swiper'

// Import Components
import Product from './Product';

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }}
      pagination={{
        clickable: true,
      }}
      className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
    >
      <>
        {data?.map(product => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          )
        })}
      </>
    </Swiper>
  )
}

export default ProductSlider