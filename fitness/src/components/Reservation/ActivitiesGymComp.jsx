import React from 'react';
import SingleActivityGymComp from './SingleActivityGymComp';
import hathayoga from '../../assets/img/hathayoga.jpg';
import bodypump from '../../assets/img/bodypump.jpg';
import pancafit from '../../assets/img/pancafit.jpg';
import playaqua from '../../assets/img/playaqua.jpg';

export default function ActivitiesGymComp() {
    const activitiesGym = [
        {
            duration: 45,
            startTime: '10:00',
            endTime: '10:45',
            seats: 25,
            image: hathayoga,
            dynamicColor: '#f14435', // in questo modo possiamo passare con gli oggetti anche il colore
            reservation: false
        },
        {
            duration: 60,
            startTime: '12:00',
            endTime: '13:00',
            seats: 20,
            image: bodypump,
            dynamicColor: '#4ab052',
            reservation: true,
            pendingSeats: 4, // in caso di prenotazione necessaria, viene mostrato il numero di persone che sono in attesa
        },
        {
            duration: 40,
            startTime: '14:00',
            endTime: '14:40',
            seats: 15,
            image: pancafit,
            dynamicColor: '#9a27b0',
            reservation: false,
        },
        {
            duration: 50,
            startTime: '16:00',
            endTime: '16:50',
            seats: 28,
            image: playaqua,
            dynamicColor: '#80d4fa',
            reservation: false
        },
        {
            duration: 55,
            startTime: '18:00',
            endTime: '18:55',
            seats: 2,
            image: hathayoga,
            dynamicColor: '#f14435',
            reservation: true,
            pendingSeats: 4,
        },
        {
            duration: 35,
            startTime: '20:00',
            endTime: '20:35',
            seats: 3,
            image: bodypump,
            dynamicColor: '#4ab052',
            reservation: false
        },
    ];

    return (
        <div className='mt-5'>
            {activitiesGym.map((activity, index) => (
                <SingleActivityGymComp
                    key={index}
                    duration={activity.duration}
                    startTime={activity.startTime}
                    endTime={activity.endTime}
                    seats={activity.seats}
                    image={activity.image}
                    dynamicColor = {activity.dynamicColor}
                    reservation = {activity.reservation}
                    pendingSeats = {activity.pendingSeats}
                />
            ))}
        </div>
    );
}
