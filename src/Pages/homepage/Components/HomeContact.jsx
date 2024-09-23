import React from 'react';
import '../Styles/homeContact.css';

import homecontact from '../Assets/homecontact.jpeg';

const HomeContact = () => {
  return (
    <div>
      <div className='home-contact-container'>
        <div className='home-contact-content'>

            <h1 style={{ color: '#165b9d' }}>We Will Reach Out To You...</h1>
            <h2 className='home-contact-header-2' style={{ color: '#165b9d' }}>Just Fill The Form</h2>

          {/* <div className='home-contact-header' style={{ color: '#d8b500' }}>Name</div> */}
          <input required="" type="text" placeholder="Enter your name" className='home-contact-input'/>
          {/* <div className='home-contact-header' style={{ color: '#3476cb ' }}>Phone Number</div> */}
          <input type='text'placeholder="Enter your mobile number"/>
          {/* <div className='home-contact-header' style={{ color: '#2fc298' }}>Email</div> */}
          <input type='email' placeholder="Enter your email"/>
          {/* <div className='home-contact-header' style={{ color: '#aa4015' }}>Your message</div> */}
          <textarea rows="5" cols="30" placeholder="Enter your message"></textarea>

          <div className='home-contact-button'>
          <button class="button">
            Contact Us
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          </div>

        </div>

        <div>
          <img src={homecontact} alt="contact" className='homecontact-image1'/>
        </div>

      </div>
    </div>
  )
}

export default HomeContact
