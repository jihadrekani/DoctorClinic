import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navbar';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';


function App() {
  return (
    <Fragment >

    <Navbars />
    <Home />
    <About />
    <Footer />
  
    </Fragment>

);
}

export default App;
