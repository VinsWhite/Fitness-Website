import React from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import SingleDayComp from './SingleDayComp';

export default function DaysComp() {
  const today = new Date();
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB'];
  const months = ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'];

  const getDayDetails = (offset) => {
    const date = new Date();
    date.setDate(today.getDate() + offset);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = daysOfWeek[date.getDay()];
    let label = '';

    if (offset === 0) {
      label = 'OGGI';
    } else if (offset === 1) {
      label = 'DOMANI';
    } else {
      label = dayOfWeek;
    }

    return { day, month, label };
  };

  return (
    <div className='text-center'>
      <div className='d-flex days-container justify-content-around align-items-center px-5'>
        <MdArrowBackIosNew className='fs-5 text-yellow' />
        {Array.from({ length: 7 }, (_, index) => {
          const { day, month, label } = getDayDetails(index);
          return <SingleDayComp key={index} day={day} month={month} label={label} />;
        })}
        <MdArrowForwardIos className='fs-5 text-yellow' />
      </div>
    </div>
  );
}
