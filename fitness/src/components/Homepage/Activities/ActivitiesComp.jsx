import React from 'react';
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import Postural from '../../../assets/img/postural-training.jpg';
import { Calendar3, Clock } from 'react-bootstrap-icons';
import { MdArrowForwardIos } from "react-icons/md";
import SingleNextActivity from './SingleNextActivity';
import SingleWaitActivity from './SingleWaitActivity';

export default function ActivitiesComp() {
  return (
    <>
      <Row className='postural-container g-5'>
        <Col md={6} className='d-none d-lg-block'>
          <h5 className='text-uppercase mb-5 text-yellow fw-semibold'><Calendar3 /> Le tue prossime attività</h5>
          <SingleNextActivity />
          <SingleNextActivity />
        </Col>

        <Col md={6} className='d-none d-lg-block'>
          <h5 className='text-uppercase mb-5 text-blue fw-semibold'>Hai 1 attività in lista d'attesa</h5>
          <SingleWaitActivity />
        </Col>
      </Row>


      <Row className='postural-container g-5 d-block d-lg-none mt-5'>
        <Col xs={12}>
          <h5 className='text-uppercase mb-5 text-yellow fw-semibold'><Calendar3 /> Le tue prossime attività</h5>
          <Carousel>
            <Carousel.Item>
              <SingleNextActivity />
            </Carousel.Item>
            <Carousel.Item>
              <SingleNextActivity />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col xs={12} className='attività-attesa-sm'>
          <h5 className='text-uppercase mb-5 text-blue fw-semibold'>Hai <span className='fw-bold'>1</span> attività in lista d'attesa</h5>
          <SingleWaitActivity />
        </Col>
      </Row>
    </>
  );
}
