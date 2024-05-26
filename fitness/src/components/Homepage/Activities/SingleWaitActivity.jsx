import React, { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { MdArrowForwardIos } from "react-icons/md";
import Postural from '../../../assets/img/postural-training.jpg';
import { Clock } from 'react-bootstrap-icons';

export default function SingleWaitActivity() {

    const [cancel, setCancel] = useState(false);

  return (
    <>
        <Card className='shadow'>
            <Row className='g-0'>
              <Col lg={4} className='d-none d-lg-block'>
                <Card.Img variant="top" src={Postural} alt="postural training img" />
              </Col>
              <Col xs={12} lg={8}>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
                    <MdArrowForwardIos className='fs-5 text-blue' />
                  </div>
                  <div>
                    <h5 className='text-blue fw-semibold'>Oggi</h5>
                    <div> {/* Card text */}
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                          <p>11:10</p>
                          <p className='ms-2 opacity-75'>11:40</p>
                        </div>
                        <p className='d-flex align-items-center opacity-75'><Clock className='me-2'/> 30 min</p>
                      </div>
                      <div className='d-lg-flex justify-content-between d-none'>
                        
                        {!cancel ? (
                            <>
                                <p className='text-orange'>2 persone prima di te</p>
                                <Button className='btn-custom fw-semibold' onClick={() => setCancel(!cancel)}> ANNULLA </Button>
                            </>
                        ) : (
                            <>
                                <p className='text-orange'>Prenotazione cancellata</p>
                                <Button className='btn-custom fw-semibold' onClick={() => setCancel(!cancel)}> PRENOTA </Button>
                            </>
                        )}
                        
                      </div>

                        {/* negli schermi più piccoli */}
                      <div className='d-flex flex-column align-items-center d-lg-none'>
                        {!cancel ? (
                                <>
                                    <p className='text-orange'>2 persone prima di te</p>
                                    <Button className='btn-custom fw-semibold' onClick={() => setCancel(!cancel)}> ANNULLA </Button>
                                </>
                            ) : (
                                <>
                                    <p className='text-orange'>Prenotazione cancellata</p>
                                    <Button className='btn-custom fw-semibold' onClick={() => setCancel(!cancel)}> PRENOTA </Button>
                                </>
                            )}
                      </div>
                      
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
    </>
  )
}
