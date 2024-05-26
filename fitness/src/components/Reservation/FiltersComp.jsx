import React, { useState } from 'react';
import Select from 'react-select';
import { Filter } from 'react-bootstrap-icons';
import { locations, categories, activities } from '../../assets/data/filters';

// !! ho spostato locations ecc. in un altro file per una migliore organizzazione

export default function FiltersComp() {

  const [openFilters, setOpenFilters] = useState(false); // stato per aprire il menù con 

  return (
    <div>
      <div className='filter-container'>
        <div className='d-md-flex d-none text-blue align-items-center justify-content-around'>
          <Select /* uso questo select di react select per poter renderizzare ad esempio anche le icone; con il select classico non è possibile farlo */
            options={locations} 
            defaultValue={locations[0]} 
            className="select-container"
            menuPortalTarget={document.body} // in questo modo il menu del select esce fuori dal suo contenitore ed è visibile
            classNamePrefix="react-select"
          />
          <Select 
            options={categories} 
            defaultValue={categories[0]} 
            className="select-container"
            menuPortalTarget={document.body}
            classNamePrefix="react-select"
          />
          <Select 
            options={activities} 
            defaultValue={activities[0]} 
            className="select-container"
            menuPortalTarget={document.body}
            classNamePrefix="react-select"
          />
        </div>

        {/* filtri per la modalità più piccola */}
        <div className='d-block d-md-none text-center text-blue'>
          <h5 onClick={() => setOpenFilters(!openFilters)}><Filter /> Filtri</h5>
          {openFilters && (
            <>
              <div className='mx-5 pb-4'>
                <Select /* uso questo select di react select per poter renderizzare ad esempio anche le icone; con il select classico non è possibile farlo */
                  options={locations} 
                  defaultValue={locations[0]} 
                  className="select-container"
                  menuPortalTarget={document.body} // in questo modo il menu del select esce fuori dal suo contenitore ed è visibile
                  classNamePrefix="react-select"
                />
                <Select 
                  options={categories} 
                  defaultValue={categories[0]} 
                  className="select-container"
                  menuPortalTarget={document.body}
                  classNamePrefix="react-select"
                />
                <Select 
                  options={activities} 
                  defaultValue={activities[0]} 
                  className="select-container"
                  menuPortalTarget={document.body}
                  classNamePrefix="react-select"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
