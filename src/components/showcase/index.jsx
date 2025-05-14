import { useTranslation } from "react-i18next";
import showcase_image from "../../assets/showcase_img.png";

function Showcase() {
  const { t } = useTranslation();
  return (
    <section className="showcase shadow-2xl shadow-black">
      <div className="w-[90%] m-auto">
        <div className="flex items-center justify-between">
          <div className="rounded-[30px] w-[651px] h-[474px] bg-white flex  flex-col gap-[30px] p-[35px] max-[768px]:w-[60%] max-[768px]:h-auto  max-[768px]:rounded-[10px] max-[768px]:p-[20px] max-[440px]:p-[10px] max-[440px]:gap-[10px]">
            <h1 className="font-semibold text-[84px] text-black max-[768px]:text-[35px] max-[440px]:text-[22px] ">
              {t("showcase.h1")}
            </h1>
            <h4 className="font-medium  text-[40px] leading-[105%] text-black max-[768px]:text-[25px] max-[440px]:text-[14px]">
              {t("showcase.h4")}
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-normal text-[20px] text-black max-[768px]:text-[14px]">
                {t("showcase.p")}
              </p>
              <button className="rounded-[8px] w-[320px] h-[62px] bg-black font-extrabold text-[24px] uppercase text-[#ffe001] max-[768px]:text-[15px] max-[768px]:w-[240px] max-[768px]:h-[50px] max-[440px]:text-[10px] max-[440px]:w-[140px] max-[440px]:h-[40px]">
                {t("showcase.btn")}
              </button>
            </div>
          </div>
          <div className="max-[768px]:w-full max-[420px]:w-[45%]">
            <img
              className="h-[75vh] max-[440px]:h-[50vh] max-[420px]:h-[40vh]"
              src={showcase_image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
