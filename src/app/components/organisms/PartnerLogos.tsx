"use client";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const PartnerLogos = ({ data }: { data?: any }) => {
  const swiperRef = useRef(null);
  return (
    <div className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          onSwiper={(swiper) => {
            (swiperRef as any).current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          spaceBetween={8}
          slidesPerView={2}
          centeredSlides={false}
          loop={true}
          observer={true}
          observeParents={true}
          watchOverflow={true}
          updateOnWindowResize={true}
          resizeObserver={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: false
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false
            }
          }}
          className="instructor-swiper"
        >
          {data?.map((partner: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="h-32 md:h-44 flex items-center justify-center bg-white rounded-lg p-2 md:p-4 mx-0.5 md:mx-1">
                <Image
                  src={partner.image?.node?.mediaItemUrl || "/no-image.jpeg"}
                  alt={`Logo đối tác: ${partner.name || "đối tác"}`}
                  width={220}
                  height={220}
                  className="object-contain max-h-full max-w-full"
                  quality={50}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
