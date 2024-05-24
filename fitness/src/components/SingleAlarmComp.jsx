import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArrowDown, ArrowRight } from 'react-bootstrap-icons';

export default function SingleAlarmComp() {
  const [showText, setShowText] = useState([false, false]);

  const toggleText = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  return (
    <>
      <Card className='shadow alarm-card position-relative'>
        <span className='dot position-absolute bottom-50 start-0 ms-5'></span>
        <Card.Body onClick={() => toggleText(0)}>
          <div className='d-flex justify-content-between'>
            <Card.Title className='fw-semibold'>Chiusure straordinarie per vacanze di Natale</Card.Title>
            <div className='d-flex align-items-center'>
              <p className='opacity-75 me-5'>20/12/2019</p>
              <p> {!showText[0] ? (
                <ArrowRight />
              ) : (
                <ArrowDown />
              )}
              </p>
            </div>
          </div>
          {showText[0] && <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim facilis necessitatibus, iure, aliquam nesciunt animi pariatur nemo eos itaque debitis, velit consequuntur fuga cumque sequi quibusdam sed non ullam. Deleniti!
          </Card.Text>}
        </Card.Body>
      </Card>

      <Card className='shadow alarm-card position-relative mt-3'>
        <span className='dot position-absolute bottom-50 start-0 ms-5'></span>
        <Card.Body onClick={() => toggleText(1)}>
          <div className='d-flex justify-content-between'>
            <Card.Title className='fw-semibold'>Chiusure straordinarie per vacanze di Natale</Card.Title>
            <div className='d-flex align-items-center'>
              <p className='opacity-75 me-5'>20/12/2019</p>
              <p> {!showText[1] ? (
                <ArrowRight />
              ) : (
                <ArrowDown />
              )}
              </p>
            </div>
          </div>
          {showText[1] && <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim facilis necessitatibus, iure, aliquam nesciunt animi pariatur nemo eos itaque debitis, velit consequuntur fuga cumque sequi quibusdam sed non ullam. Deleniti!
          </Card.Text>}
        </Card.Body>
      </Card>
    </>
  )
}
