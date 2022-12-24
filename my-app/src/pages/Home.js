import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import headergirl from '../assets/headergirl.png';
import pluse from '../assets/pluse.png'
import squire from '../assets/squire.png'
import drmarwan from '../assets/drmarwan.jpg'
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
                  {/* <span>+</span> */}
                  <img src={pluse} className="pluse"/>
                </div>
                <div className='col-lg-6 col-md-6'>
              <div className='header-box'>
              <img src={drmarwan} />
                {/* installing FontAwesome second video min 23:00 */}
                <img src={squire} className='squire'/>
                {/* <FontAwesomeIcon icon={faSquare}/> */}
              </div>
                </div>
            </div>
        </div>
    </header>
  )
}











export default Home;