import React from 'react'

import '../Styles/FollowComponent.css';

import boookingdotcom from '../Assets/bookingdotcom.png'
import goibibo from '../Assets/goibibo.png'
import makemytrip from '../Assets/makemytrip.png'
import trivago from '../Assets/trivago.png'

import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import youtube from '../Assets/youtube.png'
import whatsapp from '../Assets/whatsapp.png'

const FollowComponent = () => {
  return (
    <div className='Follow-main-container'>
    <div className='Follow-container'>
      <div className='Follow-sub-1'>
  <div className='Follow-1-container'>
    <img src={facebook} alt="follow" className='Follow-1-logo'/>
    <span className="Follow-1-text">Facebook</span>
  </div>
  <div className='Follow-1-container'>
    <img src={instagram} alt="follow" className='Follow-1-logo'/>
    <span className="Follow-1-text">Instagram</span>
  </div>
  <div className='Follow-1-container'>
    <img src={whatsapp} alt="follow" className='Follow-1-logo'/>
    <span className="Follow-1-text">WhatsApp</span>
  </div>
  <div className='Follow-1-container'>
    <img src={youtube} alt="follow" className='Follow-3-logo'/>
    <span className="Follow-1-text">YouTube</span>
  </div>
</div>


      <div className='Follow-sub-2'>
        <img src={boookingdotcom} alt="booking" className='Follow-2-logo'/>        
        <img src={goibibo} alt="booking" className='Follow-2-logo'/>        
        <img src={makemytrip} alt="booking" className='Follow-2-logo'/>        
        <img src={trivago} alt="booking" className='Follow-2-logo1'/>        
      </div>
    </div>
    </div>
  )
}

export default FollowComponent
