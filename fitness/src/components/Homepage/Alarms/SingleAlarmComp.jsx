import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function SingleAlarmComp() {
  const [showText, setShowText] = useState([false, false]);
  const [showMore, setShowMore] = useState([false, false]);
  const [sawAlert, setSawAlert] = useState([false, false]); // con questo stato traccio se la notifica è stata visualizzata o no

  const toggleText = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);

    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);

    const newSawAlert = [...sawAlert]; 
    newSawAlert[index] = true; // se la notifica viene aperta, verrà segnata come letta
    setSawAlert(newSawAlert);
  };

  return (
    <>
      <Card className='shadow alarm-card position-relative'>
        {!sawAlert[0] && (
          <>
            <span className='dot position-absolute d-none d-md-block start-0 ms-5'></span>
            <div className='d-flex d-md-none justify-content-between'>
              <div className='dot'></div>
              <p className='opacity-75 m-0'>20/12/2019</p>
            </div>
          </>
        )}
        <Card.Body onClick={() => toggleText(0)}>
          <div className='d-flex justify-content-between'>
            <Card.Title className='fw-semibold'>Chiusure straordinarie per vacanze di Natale</Card.Title>
            <div className='d-flex align-items-center'>
              <p className='opacity-75 me-5 d-none d-md-block'>20/12/2019</p>
              <p> {!showText[0] ? (
                <MdArrowForwardIos />
              ) : (
                <IoIosArrowDown />
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
        {!sawAlert[1] && (
          <>
            <span className='dot position-absolute d-none d-md-block start-0 ms-5'></span>
            <div className='d-flex d-md-none justify-content-between'>
              <div className='dot'></div>
              <p className='opacity-75 m-0'>20/12/2019</p>
            </div>
          </>
        )}
        <Card.Body onClick={() => toggleText(1)}>
          <div className='d-flex justify-content-between'>
            <Card.Title className='fw-semibold'>Chiusure straordinarie per vacanze di Natale</Card.Title>
            <div className='d-flex align-items-center'>
            <p className='opacity-75 me-5 d-none d-md-block'>20/12/2019</p>
              <p> {!showText[1] ? (
                <MdArrowForwardIos />
              ) : (
                <IoIosArrowDown />
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
