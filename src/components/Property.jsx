import React, { useState } from 'react';
import '../App.scss'

function Property({address, location, beds, baths, sqft, price}) {
    return(
    <>
        <section className='hero'>
            <canvas className="property-image-1" />
        </section>
        <section className="listing-wrapper">
            <div className='listing'>
                <div className='property-info-wrapper'>
                    <p>View listing</p>
                    <div className='property-info'>
                        <h1>{address}</h1>
                        <h2>{location}</h2>  
                    </div>
                </div>
            </div>    
        </section>
        <section className='bids-wrapper'>
            <div className='bids'>
                
            </div>
        </section>
    </>
    )
};

export default Property