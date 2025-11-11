"use client";

import Image from "next/image";
import Link from "next/link";

export interface SlideItem {
  title: string;
  description: string;
  image: {
    node: {
      mediaItemUrl: string;
    };
  };
  link?: string;
}

interface SlideContentProps {
  slide: SlideItem;
  index: number;
  currentSlide: number;
  prevSlide: number;
  isTransitioning: boolean;
  isAnimating: boolean;
}

const SlideContent = ({
  slide,
  index,
  currentSlide,
  prevSlide,
  isTransitioning,
  isAnimating
}: SlideContentProps) => {
  // Chỉ load ảnh cho slide hiện tại và slide tiếp theo
  const shouldLoad = index === currentSlide || index === currentSlide + 1 || (currentSlide === 0 && index === 1);
  
  return (
    <div
      key={index}
      className={`absolute inset-0 slide-transition ${
        index === currentSlide ? "z-20" : "z-10"
      } ${
        index === currentSlide
          ? "opacity-100"
          : index === prevSlide && isTransitioning
            ? "opacity-0"
            : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[#1e3a8a]">
        {shouldLoad ? (
          <Image
            src={slide.image?.node?.mediaItemUrl || "/image13.png"}
            alt={slide.title}
            fill
            priority={index === currentSlide}
            fetchPriority={index === currentSlide ? "high" : "auto"}
            quality={60}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative max-w-6xl mx-auto h-full flex flex-col items-center lg:items-start justify-center text-white px-4">
        <div className="max-w-lg text-center lg:text-start mb-8">
          <h1
            className={`text-3xl lg:text-4xl font-bold mb-4 px-4 lg:px-0 title-animation ${
              isAnimating && index === currentSlide ? "animate" : ""
            }`}
          >
            {slide.title}
          </h1>
          <p
            className={`text-sm lg:text-lg text-gray-300 px-4 lg:px-0 desc-animation ${
              isAnimating && index === currentSlide ? "animate" : ""
            }`}
          >
            {slide.description}
          </p>
          <Link href={slide.link || "/"}>
            <button
              className={`mt-6 bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 uppercase btn-animation ${
                isAnimating && index === currentSlide ? "animate" : ""
              }`}
              aria-label={`Xem ngay: ${slide.title}`}
            >
              Xem ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
