import React, { useState } from 'react';
import Offer from './Bids';
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
            <h2>OFFERS</h2>
            <div className='bids'>
                <div className="row header-row">
                    <div className="box">Bidder</div>
                    <div className="box">Offer $</div>
                    <div className="box">Contingencies</div>
                    <div className="box">Possibility of loan</div>
                    <div className="box">Deed delivery and close date</div>
                    <div className="box">Type of deed</div>
                    <div className="box">Offer valid until</div>
                </div>
                <div className="row">
                    <Offer 
                        bidderName={"John Smith"}
                        offerAmmount={"$36,000,000"}
                        contingencies={"NA"}
                        loanApproval={"Highly likely"}
                        closeDate={"June 1st, 2024"}
                        deedType={"NA"}
                        offerExpiration={"May 1st, 2024"}
                    />
                </div>
                <div className="row">
                    <Offer 
                        bidderName={"Susie Collins"}
                        offerAmmount={"$34,800,000"}
                        contingencies={"NA"}
                        loanApproval={"Unlikely"}
                        closeDate={"June 12th, 2024"}
                        deedType={"NA"}
                        offerExpiration={"May 15th, 2024"}
                    />
                </div>
                <div className="row">
                    <Offer 
                        bidderName={"Paul Johnson"}
                        offerAmmount={"$38,500,000"}
                        contingencies={"NA"}
                        loanApproval={"Likely"}
                        closeDate={"May 20th, 2024"}
                        deedType={"NA"}
                        offerExpiration={"April 28th, 2024"}
                    />
                </div>
            </div>
        </section>
    </>
    )
};

export default Property