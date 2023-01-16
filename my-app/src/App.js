import { Fragment } from "react";
import "./App.css";
import Home from "../src/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes, Route } from "react-router-dom";
import OrthognathicSurgery from './pages/OrthognathicSurgery'
import More from "./pages/More";
import Implant from "./pages/Implant";
import Smile from "./pages/Smile";
import Filler from "./pages/Filler";
import GingivalAesthetics from "./pages/GingivalAesthetics";
import Surgeries from "./pages/Surgeries";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="more1" element={<More />} />
        <Route path="OrthognathicSurgery" element={<OrthognathicSurgery />} />
        <Route path="Implant" element={<Implant />} />
        <Route path="Smile" element={<Smile />} />
        <Route path="Filler" element={<Filler />} />
        <Route path="GingivalAesthetics" element={<GingivalAesthetics />} />
        <Route path="Surgeries" element={<Surgeries />} />
        
      </Routes>

      <Fragment>
       
      </Fragment>
    </div>
  );
}

export default App;
