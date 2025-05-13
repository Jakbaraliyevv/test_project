import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Studentov from "../../components/studentov";
import Title from "../../components/title";

function Home() {
  return (
    <section>
      <Navbar />
      <Showcase />
      <Studentov />
      <Title />
    </section>
  );
}

export default Home;
