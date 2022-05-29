import React from "react";
import HorizontalScroll from 'react-scroll-horizontal'
// import './Home.css'
import Navbar from "../components/Navbar";
import About from "../components/About";
import Phase from "../components/Phase";
import Template from "../components/Template";
import Vid from "../components/Vid";
import Tech from "../components/Tech";
import Roomdeploy from "../components/Roomdeploy";
import Footer from "../components/footer";


function Home() {

  // const child = { width: `1280px`, height: `100%` }

  return (
    <div className="Home">
        {/* <Navbar/>
        <HorizontalScroll>
            <div style={child}>
                <About />
            </div>
            <div style={child}>
                <Phase />
            </div>
            <div style={child}>
                <Template />
            </div>
            <div style={child}>
                <Vid />
            </div>
          </HorizontalScroll> */}
      <Navbar/>
      <About />
      <Phase />
      <Template />
      <Tech/>
      <Roomdeploy/>
      <Vid />
      <Footer/>
    

    </div>
  );
}

export default Home;
