import React, {useState} from 'react';
import ReactModal from 'react-modal';
import '../App.scss'

function Offer({bidderName, offerAmmount, contingencies, loanApproval, closeDate, deedType, offerExpiration, ranking}) {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return(
        <>
            <p>{ranking})</p>
            <div className="box">{bidderName}</div>
            <div className="box">{offerAmmount}</div>
            {/*<div class="box">{contingencies}</div>
            <div class="box">{loanApproval}</div>
            <div class="box">{closeDate}</div>
    <div class="box">{deedType}</div>*/}
            <div className="box">{offerExpiration}</div>
            <ReactModal 
                isOpen={show} 
                onRequestClose={hideModal}
                className='offer-modal'
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <h2>{bidderName}</h2>
                <div className='modal-row'>
                    <div className='modal-info'>
                        <h4>Type of deed</h4>
                        <p>{deedType}</p>
                    </div>
                    <div className='modal-info'>
                        <h4>Offer</h4>
                        <p>{offerAmmount}</p>
                    </div>
                    <div className='modal-info'>
                        <h4>Possibility of loan</h4>
                        <p>{loanApproval}</p>
                    </div>
                </div>
                
                <div className='modal-row'>
                    <div className='modal-info'>
                        <h4>Date to deliver deed and close</h4>
                        <p>{closeDate}</p>
                    </div>
                    <div className='modal-info'>
                        <h4>Offer expiration</h4>
                        <p>{offerExpiration}</p>
                    </div>
                </div>

                <div className='modal-row'>
                    <div className='modal-info'>
                        <h4>Contingencies</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin. Amet dictum sit amet justo donec enim diam vulputate. Neque convallis a cras semper auctor neque. Hac habitasse platea dictumst vestibulum. Sit amet risus nullam eget.</p>
                    </div>
                </div>

                <div className='modal-row'>
                    <div className='modal-info'>
                        <h4>Comment left by bidder</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin. Amet dictum sit amet justo donec enim diam vulputate.</p>
                    </div>
                </div>
            </ReactModal>
            <a className="box" onClick={showModal}>Expand details</a>
        </>
    )
};

export default Offer