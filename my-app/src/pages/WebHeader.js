import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import pluse from '../assets/pluse.png'
import squire from '../assets/squire.png'
import drmarwan from '../assets/drmarwan.jpg'
import { Link } from 'react-router-dom'

import './WebHeader.css';
const WebHeader = ()=> {
  return (
    
    <header>
      
        <div className='container' >
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                  <h5>We Provide All Health Care Solution</h5>
                  <h2>Protect Your Health And Take Care To Of Your Health</h2>
                  <button><Link to='more1' >Read More</Link></button> 
                  {/* <span>+</span> */}
                  <img src={pluse} className="pluse" alt=''/>
                </div>
                <div className='col-lg-6 col-md-6'>
              <div className='header-box'>
              <img src={drmarwan} alt="" />
                {/* installing FontAwesome second video min 23:00 */}
                <img src={squire} alt="" className='squire'/>
                {/* <FontAwesomeIcon icon={faSquare}/> */}
              </div>
                </div>
            </div>
        </div>
    </header>
  )
}











export default WebHeader;