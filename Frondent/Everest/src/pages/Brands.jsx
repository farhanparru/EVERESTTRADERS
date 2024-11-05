

import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const photos = [
  'https://img.freepik.com/free-vector/ecological-market-logo-design_23-2148468229.jpg',
  'https://cdn.dribbble.com/users/4438388/screenshots/17009368/media/2812334bb86464d06198a299888a9b65.jpg?resize=400x0',
  'https://images-platform.99static.com//95vhQGUeD9mnW-pzQR64Jl-_k4c=/292x107:1347x1162/fit-in/500x500/99designs-contests-attachments/59/59870/attachment_59870546',
  'https://s3.amazonaws.com/cdn.designcrowd.com/blog/38-Supermarket-Logos-to-Get-Your-Store-Rolling/siakos-by-esolz-technologies-designcrowd.png',
];

export default function CoverFlow() {
  return (
    <section className="pt-[7rem] pb-[2rem] bg-teal-100">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
         Brands
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={p} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
