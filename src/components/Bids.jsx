import React, {useState} from 'react';
import '../App.scss'

function Offer({bidderName, offerAmmount, contingencies, loanApproval, closeDate, deedType, offerExpiration}) {
    return(
        <>
            <div class="box">{bidderName}</div>
            <div class="box">{offerAmmount}</div>
            <div class="box">{contingencies}</div>
            <div class="box">{loanApproval}</div>
            <div class="box">{closeDate}</div>
            <div class="box">{deedType}</div>
            <div class="box">{offerExpiration}</div>
        </>
    )
};

export default Offer