import React from 'react'

export default function SingleDayComp({ day, month, isToday }) {
  return (
    <div className='day'>
      <p>{isToday ? 'Oggi' : ''}</p>
      <h5>{day}</h5>
      <p>{month}</p>
    </div>
  )
}
