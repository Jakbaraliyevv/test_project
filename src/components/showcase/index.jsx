import showcase_image from "../../assets/showcase_img.png";

function Showcase() {
  return (
    <section className="showcase shadow-2xl shadow-black">
      <div className="w-[90%] m-auto">
        <div className="flex items-center justify-between">
          <div className="rounded-[30px] w-[651px] h-[474px] bg-white flex  flex-col gap-[30px] p-[35px]">
            <h1 className="font-semibold text-[84px] text-black">
              JustRobotics
            </h1>
            <h4 className="font-medium  text-[40px] leading-[105%] text-black">
              твой проводник в мир технологий и искусства
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-normal text-[20px] text-black">
                получите бесплатное первое занятие
              </p>
              <button className="rounded-[8px] w-[320px] h-[62px] bg-black font-extrabold text-[24px] uppercase text-[#ffe001]">
                Перейти к курсам
              </button>
            </div>
          </div>
          <div>
            <img className="h-[75vh]" src={showcase_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
