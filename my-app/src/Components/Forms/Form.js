import React from 'react'
import appointment from '../../assets/appointment.png'
import './Form.css'
import img1 from '../../assets/appointment-girl.png'
import img2 from '../../assets/appointment-location.png'
import img3 from '../../assets/appointment-setting.png'
import img4 from '../../assets/appointment-verify.png'
import img5 from '../../assets/appointment-heart.png'
import formcircle from '../../assets/form-circle.png'

export default function Form() {
  return (
    <div className='container both'>
        <div className='row align-items-center'>
            <div className='col-xl-5 col-lg-4 col-md-6'>
                <div className='appointment-form form-wraper'>
                    <h3 className='title' >Book Appointment</h3>
                    <form action="#">
                        <div className='form-group'>
                            <select className='form-select form-control'>
                                <option>Selecty Department</option>
                                <option value={1}>Surgeries</option>
                                <option value={2}>Orthognathic Surgery</option>
                                <option value={3}>Implant Surgery</option>
                                <option value={3}>Smile</option>
                                <option value={3}>Filler</option>
                                <option value={3}>Gingival Aesthetics</option>
                            </select>
                        </div>

                        <div className='form-group'>
                        <select className='form-select form-control'>
                                <option>Select Doctor</option>
                                <option value={1}>Dr Marwan</option>
                                <option value={2}>Dr Mustafa</option>
                                <option value={3}>Dr Adrees</option>
                                <option value={3}>Dr Ihsan</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <input type="text" className="form-control" placeholder='your name'></input>
                        </div>

                        <div className='form-group'>
                            <input type="number" className="form-control" placeholder='Phone Numbers'></input>
                        </div>

                        <div className='form-group'>
                            <input type="date" className="form-control"></input>
                        </div>
                        <button type='submit' className='btn submit-btn btn-secondary btn-lg'>Appointment Now</button>
                    </form>
                </div>
            </div>

            <div className='col-xl-7 col-lg-6 col-md-6 '>
                <div className='appointment-thumb'>
                    <img src={appointment} alt=""/>
                    <div className='images-group'>
                        <img className='img1' src={img1} alt="" />
                        <img className='img2' src={img2} alt="" />
                        <img className='img3' src={img3} alt="" />
                        <img className='img4' src={img4} alt="" />
                        <img className='img5' src={img5} alt="" />
                    </div>
                    <img className='circle' src={formcircle} alt=""/>
                </div>
            </div>
        </div>





        
    </div>
  )
}
