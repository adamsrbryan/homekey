import React, { useState } from 'react';
import '../App.scss'

function Property({address, location, beds, baths, sqft, price}) {
    const [propertyImage, setPropertyImage] = useState('box property-image-1');

    const changeImageRight = () => {
        if(propertyImage == "box property-image-1")
            setPropertyImage("box property-image-2")
        if(propertyImage == "box property-image-2")
            setPropertyImage("box property-image-3")
        if(propertyImage == "box property-image-3")
            setPropertyImage("box property-image-1")
    }

    const changeImageLeft = () => {
        if(propertyImage == "box property-image-1")
            setPropertyImage("box property-image-3")
        if(propertyImage == "box property-image-2")
            setPropertyImage("box property-image-1")
        if(propertyImage == "box property-image-3")
            setPropertyImage("box property-image-2")
    }

    const changeImage = (e) => {
        setPropertyImage(e.target.className)
    }

    return(
    <>
        <section className='hero'>
            <canvas className={propertyImage} />
            <div className='arrow arrow-left' onClick={changeImageLeft}/>
            <div className='arrow arrow-right' onClick={changeImageRight} />
        </section>
        <section className="listing-wrapper">
            <div className='listing'>
                <div className='property-info-wrapper'>
                    <div className='property-info'>
                        <h1>{address}</h1>
                        <h2>{location}</h2>  
                        <div className='listing-price'>
                            <h1>${price}</h1>
                        </div> 
                        <div className='details-wrapper'>
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
                            <div className='filler-text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>   
                            </div> 
                        </div>
                        <button className='bid'>MAKE A BID</button>
                    </div>
                    
                </div>
                <div className='gallery-wrapper'>
                    <div className='gallery'>
                        <div className="box property-image-1" onClick={changeImage}></div>
                        <div className="box property-image-2" onClick={changeImage}></div>
                        <div className="box property-image-3" onClick={changeImage}></div>
                        <div className="box">+</div>
                    </div>
                    <div className='user-buttons'>
                        <button>MORE DETAILS</button>
                        <button>SCHEDULE A SHOWING</button>
                        <button>MESSAGE SELLER</button>
                    </div>      
                </div>
            </div>    
        </section>
        <section className='filler'></section>
    </>
    )
};

export default Property