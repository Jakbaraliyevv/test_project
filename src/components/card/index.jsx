import { ArrowRight } from "lucide-react";
import card1 from "../../assets/card_img1.png";
import card2 from "../../assets/card_img2.png";
import card3 from "../../assets/card_img3.png";
import card4 from "../../assets/card_img4.png";
import card5 from "../../assets/card_img5.png";

function CardComponents() {
  const data = [
    {
      id: 1,
      img: card1,
      title: " Робототехника",
      link: " Подробнее о курсе",
    },
    {
      id: 2,
      img: card2,
      title: " Живопись для детей",
      link: " Подробнее о курсе",
    },
    {
      id: 3,
      img: card3,
      title: " Живопись для взрослых",
      link: " Подробнее о курсе",
    },
    {
      id: 4,
      img: card4,
      title: " Английский язык для детей",
      link: " Подробнее о курсе",
    },
    {
      id: 5,
      img: card5,
      title: " Шахмат",
      link: " Подробнее о курсе",
    },
  ];

  return (
    <section className="">
      <div className="w-[90%] m-auto ">
        <h1 className="text-[96px] leading-[104%] font-bold uppercase text-center text-[#f0d625] py-[100px]">
          Авторские кусы от JustRobotics
        </h1>
        <div className="grid grid-cols-2 gap-[40px] ">
          {data?.map((value) => (
            <div className="rounded-[30px] w-[551px] h-[508px] bg-[#f0d625]  p-[25px] relative shadow-2xl shadow-yellow-400">
              <div className="w-full">
                <img className="w-full" src={value?.img} alt="" />
              </div>
              <div className="mt-[25px] ">
                <h2 className="text-[40px] leading-[105%] font-bold  text-black">
                  {value?.title}
                </h2>
                <button className="flex items-center gap-2 absolute bottom-[20px] right-[25px] rounded-[651px] px-[19px] py-[6px] w-[261px] h-[41px] bg-black font-semibold text-[20px] text-center text-white">
                  {value?.link}
                  <ArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardComponents;
