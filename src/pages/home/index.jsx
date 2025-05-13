import React from "react";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Studentov from "../../components/studentov";

function Home() {
  return (
    <section>
      <Navbar />
      <Showcase />
      <Studentov />
    </section>
  );
}

export default Home;
