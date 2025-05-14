import { ArrowRight } from "lucide-react";
import card1 from "../../assets/card_img1.png";
import card2 from "../../assets/card_img2.png";
import card3 from "../../assets/card_img3.png";
import card4 from "../../assets/card_img4.png";
import card5 from "../../assets/card_img5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function CardComponents() {
  const data = [
    {
      id: 1,
      img: card1,
      title: "Робототехника",
      link: "Подробнее о курсе",
    },
    {
      id: 2,
      img: card2,
      title: "Живопись для детей",
      link: "Подробнее о курсе",
    },
    {
      id: 3,
      img: card3,
      title: "Живопись для взрослых",
      link: "Подробнее о курсе",
    },
    {
      id: 4,
      img: card4,
      title: "Английский язык для детей",
      link: "Подробнее о курсе",
    },
    {
      id: 5,
      img: card5,
      title: "Шахмат",
      link: "Подробнее о курсе",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[36px] md:text-[60px] lg:text-[96px] leading-[104%] font-bold uppercase text-center text-[#f0d625] pb-10 md:pb-[100px]">
          Авторские курсы от JustRobotics
        </h1>

        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-[40px]">
          {data?.map((value) => (
            <div
              key={value.id}
              className="rounded-[30px] w-full lg:w-[551px] h-[400px] lg:h-[508px] bg-[#f0d625] p-4 lg:p-[25px] relative shadow-2xl shadow-yellow-400"
            >
              <div className="w-full h-[60%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={value.img}
                  alt={value.title}
                />
              </div>
              <div className="mt-4 lg:mt-[25px]">
                <h2 className="text-[24px] lg:text-[40px] leading-[105%] font-bold text-black">
                  {value.title}
                </h2>
                <button className="flex items-center gap-2 absolute bottom-[20px] right-[25px] rounded-[651px] px-4 lg:px-[19px] py-1 lg:py-[6px] w-[200px] lg:w-[261px] h-[35px] lg:h-[41px] bg-black font-semibold text-[16px] lg:text-[20px] text-center text-white">
                  {value.link}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {data?.map((value) => (
              <SwiperSlide key={value.id}>
                <div className="rounded-[20px] w-full h-[350px] bg-[#f0d625] p-4 relative">
                  <div className="w-full h-[60%] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={value.img}
                      alt={value.title}
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-[24px] leading-[105%] font-bold text-black">
                      {value.title}
                    </h2>
                    <button className="flex items-center gap-2 absolute bottom-[20px] right-[25px] rounded-[651px] px-4 py-1 w-[200px] h-[35px] bg-black font-semibold text-[14px] text-center text-white">
                      {value.link}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CardComponents;
