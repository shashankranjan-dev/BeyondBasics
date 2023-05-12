import React from "react";
import Hero from "../../Components/Hero/Hero";

import Landing1 from "../../Components/Landing1/Landing1";
import Stats from "../../Components/Stats/Stats";
import Recommended from "../../Components/Recommended/Recommended";
import Feature from "../../Components/Features/Feature";
import Topics from "../../Components/Topics/Topics";
import Latest from "../../Components/Latest/Latest";

import Testimonials from "../../Components/Testimonials/Testimonials";
import Teams from "../../Components/Teams/Teams";
function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Landing1 />

      <Recommended />
      <Topics />
      <Latest />
      <Feature />
      <Teams />
      <Testimonials />
    </div>
  );
}

export default HomePage;
