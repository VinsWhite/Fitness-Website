import { LiaDumbbellSolid } from "react-icons/lia";
import { Fire, GeoAlt } from 'react-bootstrap-icons';

export const locations = [
    { value: '', label: <span><GeoAlt /> Tutte le località</span> },
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
    { value: '', label: <span><Fire /> Tutte le categorie </span> },
    { value: 'acqua', label: 'Attività in acqua'},
    { value: 'cardio', label: 'Cardiovascolari'},
    { value: 'danza', label: 'Danza'},
]

export const activities = [
    { value: '', label: <span><LiaDumbbellSolid /> Tutte le attività </span> },
    { value: 'iscrizione', label: 'Ad iscrizione' },
    { value: 'attesa', label: 'In attesa' },
    { value: 'prenotato', label: 'Già prenotato' }
  ]
