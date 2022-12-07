import React from 'react';
import headergirl from '../assets/headergirl.png';
import './Home.css';
const Home = ()=> {
  return (
    <header>
        <div className='container' >
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                  <h5>We Provide All Health Care Solution</h5>
                  <h2>Protect Your Health And Take Care To Of Your Health</h2>
                  <button><a href='' >Read More</a></button> 
                </div>
                <div className='col-lg-6 col-md-6'>
                <img src={headergirl}/>
                </div>
            </div>
        </div>
    </header>
  )
}











export default Home;