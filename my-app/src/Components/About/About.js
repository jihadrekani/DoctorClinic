import React from 'react'
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpg'
import './About.css'
const About = ()=> {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6'>
               <ul>
                <li><img src={about1} className="img1"/></li>
                <li><img src={about2} className="img2"/></li>
                <li><img src={about3} className="img3"/></li>
                <li><div className='experience'>20 <span>Year Experience</span></div></li>
               </ul>
            </div>
            <div className='col-lg-6 col-md-6'>

            </div>
        </div>
    </div>
  )
}




export default About;
