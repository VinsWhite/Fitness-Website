import React from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import SingleDayComp from './SingleDayComp';
import { Row, Col } from 'react-bootstrap';

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
      <Row className='days-container justify-content-between align-items-center'>
        <Col xs={1} className='d-flex justify-content-center align-items-center'>
          <MdArrowBackIosNew className='fs-5 text-yellow d-none d-md-block' />
        </Col>
        {Array.from({ length: 7 }, (_, index) => {
          const { day, month, label } = getDayDetails(index);
          return (
            <Col key={index} xs={1} className='d-flex justify-content-center align-items-center'>
              <SingleDayComp day={day} month={month} label={label} />
            </Col>
          );
        })}
        <Col xs={1} className='d-flex justify-content-center align-items-center'>
          <MdArrowForwardIos className='fs-5 text-yellow d-none d-md-block' />
        </Col>
      </Row>
    </div>
  );
}
