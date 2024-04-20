import React, { useState } from 'react';
import '../App.scss'

function Property({address, location, beds, baths, sqft, price}) {
    return(
    <>
        <canvas className="background-image" />
        <section className='hero'>
            <canvas className="property-image-1" />
        </section>
        <section className="listing-wrapper">
            <div className='listing'>
                <div className='property-info-wrapper'>
                    <div className='property-thumbnail' />
                    <div className='property-info'>
                        <h1>{address}</h1>
                        <h2>{location}</h2>  
                        <h2 className="price">${price}</h2>
                        <div className='details'>
                            <div className='icon'>
                                <div className='icon-bed' />
                                <p>{beds} beds</p>
                            </div>
                            <div className='icon'>
                                <div className='icon-bath' />
                                <p>{baths} baths</p>
                            </div>
                            <div className='icon'>
                                <div className='icon-sqft' />
                                <p>{sqft} sq. ft.</p>
                            </div>
                        </div>
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