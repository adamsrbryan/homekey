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
        <section className="information">
            <div className='map-wrapper'>
                <canvas className="map" />
            </div>
            <div className='info-cat'>
                <h3>Property Condition</h3>
                <p>Excellent</p>
            </div>
            <div className='info-cat'>
                <h3>Included in Sale</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='info-cat'>
                <h3>Material defects</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='info-cat'>
                <h3>Warranties</h3>
                <p>Not provided</p>
            </div>
            <div className='info-cat'>
                <h3>Fees for buyer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque.</p>
            </div>
            <button className='view-listing'>VIEW LISTING</button>
        </section>
        <section className='bids-wrapper'>
            <canvas className='background-image' />
            <div className='bid-section'>
                <h2>CURRENT OFFERS</h2>
                <div className='bids'>
                    <div className="row header-row">
                        <div className="box">Bidder</div>
                        <div className="box">Offer $</div>
                        <div className="box">Close date</div>
                        <div className="box">Offer valid until</div>
                        <div className="box"></div>
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"John Smith"}
                            offerAmmount={"$36,000,000"}
                            contingencies={"NA"}
                            loanApproval={"Highly likely"}
                            closeDate={"June 1st, 2024"}
                            deedType={"General warranty deed"}
                            offerExpiration={"May 1st, 2024"}
                            ranking={"1"}
                        />
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"Susie Collins"}
                            offerAmmount={"$34,800,000"}
                            contingencies={"NA"}
                            loanApproval={"Likely"}
                            closeDate={"June 12th, 2024"}
                            deedType={"Special warranty deed"}
                            offerExpiration={"May 15th, 2024"}
                            ranking={"2"}
                        />
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"Paul Johnson"}
                            offerAmmount={"$38,500,000"}
                            contingencies={"NA"}
                            loanApproval={"Likely"}
                            closeDate={"May 20th, 2024"}
                            deedType={"Quit claim deed"}
                            offerExpiration={"April 28th, 2024"}
                            ranking={"3"}
                        />
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"Jackie Nguyen"}
                            offerAmmount={"$40,100,000"}
                            contingencies={"NA"}
                            loanApproval={"Not likely"}
                            closeDate={"May 10th, 2024"}
                            deedType={"Special warranty deed"}
                            offerExpiration={"April 1st, 2024"}
                            ranking={"4"}
                        />
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"Tanya Jackson"}
                            offerAmmount={"$33,000,000"}
                            contingencies={"NA"}
                            loanApproval={"Likely"}
                            closeDate={"May 25th, 2024"}
                            deedType={"General warranty deed"}
                            offerExpiration={"April 30th, 2024"}
                            ranking={"5"}
                        />
                    </div>
                    <div className="row">
                        <Offer 
                            bidderName={"Jeffrey Jones"}
                            offerAmmount={"$37,200,000"}
                            contingencies={"NA"}
                            loanApproval={"Not likely"}
                            closeDate={"June 3rd, 2024"}
                            deedType={"General warranty deed"}
                            offerExpiration={"May 10th, 2024"}
                            ranking={"6"}
                        />
                    </div>
                    <p className='disclaimer'>*Offers are sorted based on our recommendation model</p>
                </div>    
            </div>
        </section>
    </>
    )
};

export default Property