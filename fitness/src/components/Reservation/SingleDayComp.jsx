import React from 'react';

export default function SingleDayComp({ day, month, label }) {
  return (
    <div className='day'>
      <p>{label}</p>
      <h5>{day}</h5>
      <p>{month}</p>
    </div>
  );
}
