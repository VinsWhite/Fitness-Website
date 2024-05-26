import React, { useState } from 'react'
import { CheckCircle, Clock } from 'react-bootstrap-icons'
import { MdArrowForwardIos } from 'react-icons/md'

export default function SingleActivityGymComp({ image, duration, startTime, endTime, seats, dynamicColor, reservation, pendingSeats }) {
    
    const [subscribed, setSubscribed] = useState(false);
    const [reservated, setReservated] = useState(false);
    const [availableSeats, setAvailableSeats] = useState(seats);

    const handleSubscription = () => {
        if (!subscribed && availableSeats > 0) {
            setAvailableSeats(prevSeats => prevSeats - 1);
            setSubscribed(true);
        } else if (subscribed) {
            setAvailableSeats(prevSeats => prevSeats + 1);
            setSubscribed(false);
        }
    };

    const handleReservation = () => {
        if (!reservated && availableSeats > 0) {
            setAvailableSeats(prevSeats => prevSeats - 1);
            setReservated(true);
        } else if (reservated) {
            setAvailableSeats(prevSeats => prevSeats + 1);
            setReservated(false);
        }
    };

    return (
        <>
            <div className={`d-flex justify-content-between align-items-center shadow activity-gym mt-2 ${subscribed ? 'border-yellow' : ''} ${reservated ? 'border-red' : ''}`}>
                <div className='div-img d-md-flex d-none'>
                    <div style={{ '--custom-color': dynamicColor }}></div>
                    <img src={image} alt="hatha yoga" />
                </div>
                <div className='d-flex'>
                    <p className='opacity-75 d-flex align-items-center'><Clock className='me-2' />{duration} min</p>
                    <p className='fw-semibold ms-4'>{startTime} <span className='opacity-75 ms-2'>{endTime}</span></p>
                </div>
                {!reservation ? (
                    <>
                    <div>
                        {!subscribed ? (
                            <>
                                <p className='mb-0'><span className={availableSeats <= 2 ? 'text-orange' : ''}>{availableSeats}</span> / 30</p>
                                <p className='opacity-75'>Posti disponibili</p> 
                            </>
                        ) : (
                            <p className='d-flex align-items-center px-1'>
                                <CheckCircle className='me-2 bg-yellow rounded-3 text-blue' /> Sei iscritto
                            </p>
                        )}
                        
                    </div>
                    <button className={subscribed ? 'cancel-button' : 'subscribe-button'} onClick={handleSubscription}>
                        {subscribed ? 'ANNULLA' : 'ISCRIVITI'}
                    </button>
                    </>
                ) : ( /* nel caso in cui bisogna mettersi in lista di attesa */
                    <>
                        <div>
                            {!reservated ? (
                                <>
                                    <p className='mb-0'>{pendingSeats}</p>
                                    <p className='opacity-75'>Persone in attesa</p> 
                                </>
                            ) : (
                                <>
                                    <p className='d-flex align-items-center mb-0'>
                                        Sei in lista d'attesa
                                    </p>
                                    <p className='opacity-75'>{pendingSeats} persone prima di te</p>
                                </>
                            )}
                        
                        </div>
                        <button className={reservated ? 'cancel-button' : 'reservation-button'} onClick={handleReservation}>
                            {reservated ? 'ANNULLA' : 'METTITI IN ATTESA'}
                        </button>
                    </>
                )}
                
                <MdArrowForwardIos />
            </div>
        </>
    )
}
