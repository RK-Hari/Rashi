import '../Styles/Counters.css'
import React, { useState } from 'react';


const Counters = () => {
    return(
        <div className='counter-container'>
        <div className='counter-box'>
            <div className='Counter-content-box'>
                <h1 className='h1-blue'>46,600+</h1>
                <h3 className='h2-subhead'>Happy Guests</h3>
            </div>
            <div className='Counter-content-box'>
                <h1 className='h1-green'>12,300+</h1>
                <h3 className='h2-subhead'>Reviews</h3>
            </div>
            <div className='Counter-content-box'>
                <h1 className='h1-orange'>16,400+</h1>
                <h3 className='h2-subhead'>Visitors/Month</h3>
            </div>
            <div className='Counter-content-box'>
                <h1 className='h1-yellow'>4,600+</h1>
                <h3 className='h2-subhead'>Customers</h3>
            </div>

        </div>
        </div>
    );
};
export default Counters;