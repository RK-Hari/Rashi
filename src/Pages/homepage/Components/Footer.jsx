import React from 'react'

import '../Styles/Footer.css';

import rashi from '../Assets/rashi.jpg';
import karnataka from '../Assets/karnataka.png'
import iso from '../Assets/iso.png'

const Footer = () => {
  return (
    <div>
      <div className='Footer-container'>
        <div className='Footer-subcontainer-1'>
          <img src={rashi} alt="icon" className='Footer-icon-1'/>
          <div className='Footer-text-1'>Embrace Luxury in Nature...</div>
        </div>
        <div className='Footer-subcontainer-2'>
          <img src={iso} alt="icon"/>
          <img src={karnataka} alt="icon" className='Footer-icon-2'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
