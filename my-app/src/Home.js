import React from 'react'
import Navbars from "./Components/Nav/Navbar";
import NewsHeader from "./Components/NewsHeader/NewsHeader";
import Form from "./Components/Forms/Form";
import Questions from "./Components/Questions/Questions";
import WebHeader from "./pages/WebHeader";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import News from "./Components/News.js/News";
import Activities from "./Components/Activities/Activities";
export default function Home () {
  return (
    <div>
        <Navbars />
        <WebHeader />
        <About />
        <NewsHeader />
        <News />
        <Activities />
        <Form />
        <Questions />
        <Footer />
         </div>
  )
}
