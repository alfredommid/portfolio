import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const Carousel = () => {
  return (
    <div className='contenedor-swiper'>
      <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{clickable: true,}}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/work" passHref>
            <a className="coverLink"><Image layout='fill' src="/img/portada.png" alt="project1"/></a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
      
  )
}

export default Carousel;