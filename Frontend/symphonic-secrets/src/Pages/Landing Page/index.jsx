import React, { useState, useEffect } from "react";
import "./index.css";
import { Navigation } from "../../Components/navigation"; 
import { Header } from "../../Components/header";
import { Features } from "../../Components/features";
import { About } from "../../Components/about";
import { Gallery } from "../../Components/gallery";
import { Contact } from "../../Components/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  

export  function LandingPage() {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
      }, []);

    return (
        <div>
        <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
        </div>
    )
}