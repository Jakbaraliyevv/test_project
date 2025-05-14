import { useTranslation } from "react-i18next";

function Title() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fff] h-auto py-[120px] flex items-center mt-[-25px] max-[440px]:py-[40px]">
      <div className="w-[90%] m-auto">
        <div className="text-[19px] leading-[2] max-[440px]:text-[15px]">
          <p>
            <span className="font-bold">{t("title.span")}</span>
            {t("title.p1")}
          </p>
          <p>
            <span className="font-bold">{t("title.span")}</span> {t("title.p2")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Title;
