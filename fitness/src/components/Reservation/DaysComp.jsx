import React from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import SingleDayComp from './SingleDayComp';

export default function DaysComp() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('it-IT', { month: 'short' }).toUpperCase();
  const isToday = true; 

  return (
    <>
      <div className='text-center'>
        <div className='d-flex days-container justify-content-around align-items-center px-5'>
          <MdArrowBackIosNew className='fs-5 text-yellow' />
          <SingleDayComp day={day} month={month} isToday={isToday} />
          <MdArrowForwardIos className='fs-5 text-yellow' />
        </div>
        <div></div>
      </div>
    </>
  );
}
