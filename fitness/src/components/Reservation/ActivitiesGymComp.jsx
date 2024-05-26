import React from 'react';
import SingleActivityGymComp from './SingleActivityGymComp';
import { activitiesGym } from '../../assets/data/activitiesGym';
import { useSelector } from 'react-redux';

export default function ActivitiesGymComp() {
    const filterState = useSelector(state => state.filters);

    /* console.log('Filter State:', filterState); */

    // !! ho sposato activities Gym in un file a parte per una migliore organizzazione 

    // filtra le attività in base ai filtri applicati nello stato globale
    const filteredActivities = activitiesGym.filter(activity => {
        const isActivityMatch = !filterState.activity || activity.activity === filterState.activity;
        const isLocationMatch = !filterState.location || activity.location === filterState.location;
        const isCategoryMatch = !filterState.category || activity.category === filterState.category;

        /* console.log('Activity:', activity);
        console.log('Matching filters:', isActivityMatch, isLocationMatch, isCategoryMatch); */

        return isActivityMatch && isLocationMatch && isCategoryMatch;
    });

    /* console.log('Filtered Activities:', filteredActivities); */

    return (
        <div className='mt-5'>
            {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                    <SingleActivityGymComp
                        key={index}
                        name={activity.name}
                        duration={activity.duration}
                        startTime={activity.startTime}
                        endTime={activity.endTime}
                        seats={activity.seats}
                        image={activity.image}
                        dynamicColor={activity.dynamicColor}
                        reservation={activity.reservation}
                        pendingSeats={activity.pendingSeats}
                        free={activity.free}
                        location={activity.location}
                        category={activity.category}
                        activity={activity.activity}
                    />
                ))
            ) : (
                <p>Nessun elemento trovato</p>
            )}
        </div>
    );
}
