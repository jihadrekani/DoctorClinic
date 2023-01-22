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
import Italy2023 from "./pages/Italy2023";
import Iraq2018 from "./pages/Iraq2018";
import Uae2021 from "./pages/UAE2021";
import Iraq2021 from "./pages/Iraq2021";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="more1" element={<More />} />
        <Route path="orthognathicSurgery" element={<OrthognathicSurgery />} />
        <Route path="implant" element={<Implant />} />
        <Route path="smile" element={<Smile />} />
        <Route path="filler" element={<Filler />} />
        <Route path="gingivalAesthetics" element={<GingivalAesthetics />} />
        <Route path="surgeries" element={<Surgeries />} />
        <Route path="italy2023" element={<Italy2023 />} />
        <Route path="iraq2018" element={<Iraq2018 />} />
        <Route path="uae2021" element={<Uae2021 />} />
        <Route path="iraq2021" element={<Iraq2021 />} />
        
      </Routes>

      <Fragment>
       
      </Fragment>
    </div>
  );
}

export default App;
