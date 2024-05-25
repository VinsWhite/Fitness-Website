import React from 'react';
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import Postural from '../assets/img/postural-training.jpg';
import { Calendar3, Clock } from 'react-bootstrap-icons';
import { MdArrowForwardIos } from "react-icons/md";

export default function ActivitiesComp() {
  return (
    <>
      <Row className='postural-container g-5'>
        <Col md={6} className='d-none d-md-block'>
          <h5 className='text-uppercase mb-5 text-yellow fw-semibold'><Calendar3 /> Le tue prossime attività</h5>
          <Card className='shadow'>
            <Row className='g-0'>
              <Col md={4}>
                <Card.Img variant="top" src={Postural} alt="postural training img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
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

          <Card className='shadow mt-3'>
            <Row className='g-0'>
              <Col md={4}>
                <Card.Img variant="top" src={Postural} alt="postural training img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
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
        </Col>

        <Col xs={6} className='d-none d-md-block'>
          <h5 className='text-uppercase mb-5 text-blue fw-semibold'>Hai 1 attività in lista d'attesa</h5>
          <Card className='shadow'>
            <Row className='g-0'>
              <Col xs={4}>
                <Card.Img variant="top" src={Postural} alt="postural training img" />
              </Col>
              <Col xs={8}>
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
                      <div className='d-flex justify-content-between'>
                        <p className='text-orange'>2 persone prima di te</p>
                        <Button className='btn-custom fw-semibold'> ANNULLA </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>


      <Row className='postural-container g-5 d-block d-md-none mt-5'>
        <Col xs={12}>
          <h5 className='text-uppercase mb-5 text-yellow fw-semibold'><Calendar3 /> Le tue prossime attività</h5>
          <Carousel>
            <Carousel.Item>
              <Card className='shadow'>
                <Row className='g-0'>
                  <Col md={4}>
                    <Card.Img variant="top" src={Postural} alt="postural training img" />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
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
            </Carousel.Item>
            <Carousel.Item>
              <Card className='shadow'>
                <Row className='g-0'>
                  <Col md={4}>
                    <Card.Img variant="top" src={Postural} alt="postural training img" />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <Card.Title className='text-blue fw-semibold'>Postural Training</Card.Title>
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
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col xs={12} className='attività-attesa-sm'>
          <h5 className='text-uppercase mb-5 text-blue fw-semibold'>Hai 1 attività in lista d'attesa</h5>
          <Card className='shadow'>
            <Row className='g-0'>
              <Col>
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
                      <div className='d-flex flex-column align-items-center'>
                        <p className='text-orange mb-1'>2 persone prima di te</p>
                        <Button className='btn-custom fw-semibold px-5'> ANNULLA </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
