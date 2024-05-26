import { LiaDumbbellSolid } from "react-icons/lia";
import { Fire, GeoAlt } from 'react-bootstrap-icons';

// ho eliminato le icone da qui perché davano problemi di serializzazione

export const locations = [
    { value: '', label: 'Tutte le località' },
    { value: 'roma', label: 'Roma' },
    { value: 'milano', label: 'Milano' },
    { value: 'firenze', label: 'Firenze' },
    { value: 'napoli', label: 'Napoli' },
    { value: 'venezia', label: 'Venezia' },
    { value: 'torino', label: 'Torino' },
    { value: 'bologna', label: 'Bologna' },
    { value: 'genova', label: 'Genova' },
    { value: 'catania', label: 'Catania' },
    { value: 'palermo', label: 'Palermo' }
  
];

export const categories = [
    { value: '', label: 'Tutte le categorie' },
    { value: 'water', label: 'Attività in acqua'},
    { value: 'cardio', label: 'Cardiovascolari'},
    { value: 'relax', label: 'Attività rilassanti'},
    { value: 'dance', label: 'Danza'},
]

export const activities = [
    { value: '', label: 'Tutte le attività' },
    { value: 'subscription', label: 'Ad iscrizione' },
    { value: 'waiting', label: 'In attesa' },
    { value: 'free', label: 'Attività libera' },
    { value: 'booked-up', label: 'Già prenotato' }
  ]
