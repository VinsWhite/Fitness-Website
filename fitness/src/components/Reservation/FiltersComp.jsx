import React from 'react';
import Select from 'react-select';
import { Fire, GeoAlt } from 'react-bootstrap-icons';
import { LiaDumbbellSolid } from "react-icons/lia";

const locations = [
  { value: '', label: <span><GeoAlt /> Tutte le località</span> },
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'parrot', label: 'Parrot' },
  { value: 'spider', label: 'Spider' },
  { value: 'goldfish', label: 'Goldfish' }
];

const categories = [
  { value: '', label: <span><Fire /> Tutte le categorie </span> },
  { value: 'acqua', label: 'Attività in acqua'},
  { value: 'cardio', label: 'Cardiovascolari'},
  { value: 'danza', label: 'Danza'},
]

const activities = [
  { value: '', label: <span><LiaDumbbellSolid /> Tutte le attività </span> },
  { value: 'attivita1', label: 'Attività 1' }
]

export default function FiltersComp() {
  return (
    <div>
      <div className='filter-container'>
        <div className='d-flex text-blue align-items-center justify-content-around'>
          <Select /* uso questo select di react select per poter renderizzare ad esempio anche le icone; con il select classico non è possibile farlo */
            options={locations} 
            defaultValue={locations[0]} 
            className="select-container"
            classNamePrefix="react-select"
          />
          <Select 
            options={categories} 
            defaultValue={categories[0]} 
            className="select-container"
            classNamePrefix="react-select"
          />
          <Select 
            options={activities} 
            defaultValue={activities[0]} 
            className="select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>
    </div>
  );
}
