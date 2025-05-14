import CardComponents from "../../components/card";
import FillialComponents from "../../components/fillial";
import Footer from "../../components/footer";
import MapComponents from "../../components/map";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Studentov from "../../components/studentov";
import Title from "../../components/title";
import VideoSlider from "../../components/videos";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { uzb } from "../../locale/uz";
import { rus } from "../../locale/ru";

i18next.use(initReactI18next).init({
  resources: {
    uzb: { translation: uzb },
    rus: { translation: rus },
  },

  lng: localStorage.getItem("lang") || "uzb",
  fallbackLng: "uzb",
});

function Home() {
  const changLanguage = (value) => {
    i18next.changeLanguage(value);
  };

  return (
    <section>
      <Navbar changLanguage={changLanguage} />
      <Showcase />
      <Studentov />
      <Title />
      <CardComponents />
      <VideoSlider />
      <FillialComponents />
      <MapComponents />
      <Footer />
    </section>
  );
}

export default Home;
