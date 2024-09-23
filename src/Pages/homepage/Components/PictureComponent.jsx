import React from 'react'

import '../Styles/PictureComponent.css';

import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
import image4 from '../Assets/image4.jpg'
import image5 from '../Assets/image5.jpg'
import image6 from '../Assets/image6.jpg'

import instagram from '../Assets/instagram.png'

const PictureComponent = () => {
  return (
    <div className='pictureComponent-container'>

      <div style={{ color: '#165b9d' }} className='pictureComponent-header'>
        Our Gallery 
      </div>

      <div className='picture-container'>
        <div className='picture-sub-1'>
          <img src={image1} alt="img" className='picturecomponent-img3'/>
          <img src={image2} alt="img" className='picturecomponent-img2'/>
          <img src={image3} alt="img" className='picturecomponent-img3'/>
        </div>

        <div className='picture-sub-2'>
          <img src={image4} alt="img" className='picturecomponent-img1'/>
          <img src={image5} alt="img" className='picturecomponent-img1'/>
          <img src={image6} alt="img" className='picturecomponent-img1'/>
        </div>

        <div className='pictureComponent-content'>
          <div className='pictureComponent-sub1'>
          <img src={instagram} alt="img" className='pictureComponent-logo1'/>
          <div className='pictureComponent-content-text'>#Rashi_Eco_Fun</div>
          </div>

          <div>
          <button class="button">
            Follow Hashtag
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
      </div>
    </div>
  )
}

export default PictureComponent
