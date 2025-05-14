import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VideoSlider = () => {
  // Mock video data
  const videos = [
    {
      id: 1,
      title: "React darslari - 1-qism",
      videoUrl: "https://example.com/videos/react1.mp4",
      duration: "2:15",
    },
    {
      id: 2,
      title: "Tailwind CSS asoslari",
      videoUrl: "https://example.com/videos/tailwind.mp4",
      duration: "3:45",
    },
    {
      id: 3,
      title: "Vite bilan ishlash",
      videoUrl: "https://example.com/videos/vite.mp4",
      duration: "1:50",
    },
    {
      id: 4,
      title: "Swiper.js tutorial",
      videoUrl: "https://example.com/videos/swiper.mp4",
      duration: "4:20",
    },
    {
      id: 5,
      title: "JavaScript yangiliklari",
      videoUrl: "https://example.com/videos/js.mp4",
      duration: "5:10",
    },
    {
      id: 6,
      title: "React hooks",
      videoUrl: "https://example.com/videos/hooks.mp4",
      duration: "6:30",
    },
    {
      id: 7,
      title: "Next.js darslari",
      videoUrl: "https://example.com/videos/nextjs.mp4",
      duration: "3:15",
    },
    {
      id: 8,
      title: "UI/UX dizayn",
      videoUrl: "https://example.com/videos/design.mp4",
      duration: "7:45",
    },
    {
      id: 9,
      title: "TypeScript asoslari",
      videoUrl: "https://example.com/videos/ts.mp4",
      duration: "8:20",
    },
  ];

  const VideoCard = ({ video }) => (
    <div className="bg-yellow-300 rounded-lg shadow-lg overflow-hidden h-80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-[90px] shadow-yellow-400 ">
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden  ">
        <video
          className="w-full h-full object-cover"
          controls
          muted
          poster={`https://picsum.photos/seed/${video.id}/300/200`}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Sizning brauzeringiz video elementini qo'llab-quvvatlamaydi.
        </video>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 ">
          {video.title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm">
          <span>1.2k tomosha</span>
          <span className="mx-2">•</span>
          <span>3 kun oldin</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[90%] m-auto py-[80px]">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-[23px] leading-[139%] uppercase text-[#f0d625]  mb-8">
          отзывы
        </h1>

        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoCard video={video} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination !relative !mt-8" />
      </div>
    </div>
  );
};

export default VideoSlider;
