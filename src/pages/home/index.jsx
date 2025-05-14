import CardComponents from "../../components/card";
import FillialComponents from "../../components/fillial";
import MapComponents from "../../components/map";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Studentov from "../../components/studentov";
import Title from "../../components/title";
import VideoSlider from "../../components/videos";

function Home() {
  return (
    <section>
      <Navbar />
      <Showcase />
      <Studentov />
      <Title />
      <CardComponents />
      <VideoSlider />
      <FillialComponents />
      <MapComponents />
    </section>
  );
}

export default Home;
