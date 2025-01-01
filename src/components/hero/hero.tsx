"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; //Pagination, Navigation, Mousewheel

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

type Images = {
  src: string;
  text: string;
};

const images: Images[] = [
  {
    src: "/carousel/slider-1.webp",
    text: "Heartful - Ring",
  },
  {
    src: "/carousel/slider-2.webp",
    text: "Heartful - Earrings",
  },
  {
    src: "/carousel/slider-3.webp",
    text: "Minou - Bag",
  },
  {
    src: "/carousel/slider-4.webp",
    text: "Backpack",
  },
];

export default function Hero() {
  return (
    <section className="w-full h-[80vh] sm:h-[55vh] lg:h-[77vh]">
      <Swiper
        className="mySwiper bg-red-500 h-full w-full"
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]} //Pagination, Navigation,Mousewheel
      >
        {images.map((item, index) => {
          const { src, text } = item;
          return (
            <SwiperSlide className="w-full h-full relative" key={index}>
              <Image
                src={src}
                alt={text}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute bg-black opacity-25 top-0 right-0 left-0 bottom-0 z-20 inset-0"></div>
              <div className="z-50 absolute bottom-[10%] lg:bottom-[15%] left-[50%] -translate-x-[50%]">
                <div className="flex flex-col items-center gap-6">
                  <p className="text-2xl lg:text-3xl text-white whitespace-nowrap">
                    BUBE {text}
                  </p>
                  <Link href="/shop">
                    <button className="border-white border-[1.5px] text-nowrap py-2 lg:py-3 px-8 whitespace-nowrap text-white transition-all duration-500 hover:ring-2 hover:ring-white ">
                      BUBE {text}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
