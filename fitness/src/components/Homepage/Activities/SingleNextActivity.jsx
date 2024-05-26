import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { MdArrowForwardIos } from "react-icons/md";
import Postural from '../../../assets/img/postural-training.jpg';
import { Clock } from 'react-bootstrap-icons';

export default function SingleActivity() {
  return (
        <Card className='shadow mt-3'>
            <Row className='g-0'>
              <Col md={4}>
                <Card.Img variant="top" src={Postural} alt="postural training img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <div className='d-lg-flex justify-content-between align-items-center mb-2 d-none'>
                    <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
                    <MdArrowForwardIos className='fs-5 text-blue' />
                  </div>

                  {/* con gli schermi più piccoli, cambia un po' */}
                  <div className='d-flex d-lg-none justify-content-between align-items-center me-4 mb-2 pe-4 postural-training-bg'>
                        <Card.Title className='fw-semibold postural-training'>Postural Training</Card.Title>
                        <MdArrowForwardIos className='fs-5 text-blue' />
                  </div>

                  <div> {/* Card text */}
                    <h5 className='text-blue fw-semibold'>Oggi</h5>
                    <div>
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                          <p>11:10</p>
                          <p className='ms-2 opacity-75'>11:40</p>
                        </div>
                        <p className='d-flex align-items-center opacity-75'><Clock className='me-2'/> 30 min</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='opacity-75 m-0'>Club</p>
                          <p>Ravizza</p>
                        </div>
                        <div>
                          <p className='opacity-75 m-0'>Sala</p>
                          <p>Ravizza</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
  )
}
