import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper"
import ArticleCard from "../../Cards/idea-card/ArticleCard/app"

export default function ArticleSliders() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <ArticleCard></ArticleCard>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard></ArticleCard>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard></ArticleCard>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
