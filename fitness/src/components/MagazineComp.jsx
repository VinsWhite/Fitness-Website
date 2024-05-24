import React from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import personeNevi from '../assets/img/persone-nevi.jpg';
import { ArrowRight } from 'react-bootstrap-icons';

export default function MagazineComp() {
  return (
    <>
      <div className='mt-1 mb-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='text-uppercase text-blue fw-semibold ms-2'>
            <li>Magazine</li>
          </h5>
          <h5 className='text-orange fw-semibold'>Mostra tutti</h5>
        </div>
        <Carousel className='mt-5'>
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img variant="top" src={personeNevi} />
                  <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase'>Gli eventi di dicembre e gennaio</h5>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.
                    </Card.Text>
                    <p className='opacity-75'>16/12/2019</p>
                    <ArrowRight className='position-absolute top-0 end-0 me-4 text-blue fs-4' />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
