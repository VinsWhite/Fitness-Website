import React from 'react';
import SingleActivityGymComp from './SingleActivityGymComp';
import { activitiesGym } from '../../assets/data/activitiesGym';

export default function ActivitiesGymComp() {

    // !! ho sposato activities Gym in un file a parte per una migliore organizzazione 

    return (
        <div className='mt-5'>
            {activitiesGym.map((activity, index) => (
                <SingleActivityGymComp
                    key={index}
                    name={activity.name}
                    duration={activity.duration}
                    startTime={activity.startTime}
                    endTime={activity.endTime}
                    seats={activity.seats}
                    image={activity.image}
                    dynamicColor = {activity.dynamicColor}
                    reservation = {activity.reservation}
                    pendingSeats = {activity.pendingSeats}
                    free = {activity.free}
                />
            ))}
        </div>
    );
}
