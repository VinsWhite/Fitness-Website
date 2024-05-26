import hathayoga from '../../assets/img/hathayoga.jpg';
import bodypump from '../../assets/img/bodypump.jpg';
import pancafit from '../../assets/img/pancafit.jpg';
import playaqua from '../../assets/img/playaqua.jpg';

export const activitiesGym = [
    {
        name: 'Hatha Yoga',
        duration: 45,
        startTime: '10:00',
        endTime: '10:45',
        seats: 25,
        image: hathayoga,
        dynamicColor: '#f14435', // in questo modo possiamo passare con gli oggetti anche il colore
        reservation: false,
        free: false,// quando si tratta di un'attività libera
        location: 'roma',
        category: 'relax',
        activity: 'subscription'
    },
    {
        name: 'Play aqua',
        duration: 35,
        startTime: '19:00',
        endTime: '19:35',
        image: playaqua,
        dynamicColor: '#80d4fa',
        reservation: false,
        free: true, // in questo caso essendo un'attività libera, non abbiamo neppure i posti da segnalare
        location: 'roma',
        category: 'water',
        activity: 'free'
    },
    {
        name: 'Body Pump',
        duration: 60,
        startTime: '12:00',
        endTime: '13:00',
        seats: 20,
        image: bodypump,
        dynamicColor: '#4ab052',
        reservation: true,
        pendingSeats: 4, // in caso di prenotazione necessaria, viene mostrato il numero di persone che sono in attesa
        free: false,
        location: 'catania',
        category: 'cardio',
        activity: 'waiting'
    },
    {
        name: 'Pancafit',
        duration: 40,
        startTime: '14:00',
        endTime: '14:40',
        seats: 15,
        image: pancafit,
        dynamicColor: '#9a27b0',
        reservation: false,
        free: false,
        location: 'firenze',
        category: 'cardio',
        activity: 'subscription'
    },
    {
        name: 'Play aqua',
        duration: 50,
        startTime: '16:00',
        endTime: '16:50',
        seats: 28,
        image: playaqua,
        dynamicColor: '#80d4fa',
        reservation: false,
        free: false,
        location: 'napoli',
        category: 'water',
        activity: 'subscription'
    },
    {
        name: 'Hatha Yoga',
        duration: 55,
        startTime: '18:00',
        endTime: '18:55',
        seats: 2,
        image: hathayoga,
        dynamicColor: '#f14435',
        reservation: true,
        pendingSeats: 4,
        free: false,
        location: 'palermo',
        category: 'relax',
        activity: 'waiting'
    },
    {
        name: 'Body Pump',
        duration: 35,
        startTime: '20:00',
        endTime: '20:35',
        seats: 2,
        image: bodypump,
        dynamicColor: '#4ab052',
        reservation: false,
        free: false,
        location: 'bologna',
        category: 'cardio',
        activity: 'subscription'
    },
    {
        name: 'Play aqua',
        duration: 35,
        startTime: '19:00',
        endTime: '19:35',
        image: playaqua,
        dynamicColor: '#80d4fa',
        reservation: false,
        free: true, 
        location: 'genova',
        category: 'water',
        activity: 'free'
    },
];