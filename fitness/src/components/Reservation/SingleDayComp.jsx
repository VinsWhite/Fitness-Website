import React from 'react';

export default function SingleDayComp({ day, month, label }) {
  return (
    <div className={`day text-center ${(label === 'OGGI') ? 'bg-day' : ''}`}>
      <p>{label}</p>
      <h5>{day}</h5>
      <p>{month}</p>
    </div>
  );
}
