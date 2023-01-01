import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navbar';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import News from './Components/News.js/News';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsHeader from './Components/NewsHeader/NewsHeader';
import Form from './Components/Forms/Form';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <Fragment >

    <Navbars />
    <Home />
    <About />
   <NewsHeader />
    <News />
    <Form />
    <Questions />
    <Footer />
  
    </Fragment>

);
}

export default App;
