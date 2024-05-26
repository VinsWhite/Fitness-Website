import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import SingleMagazineComp from './SingleMagazineComp';
import personeNevi from '../../../assets/img/persone-nevi.jpg';

export default function MagazineComp() {

  const cardData = [
    { 
      title: 'Gli eventi di Dicembre e Gennaio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam fugiat itaque iste nam libero.',
      date: '16/12/2019' 
    },
  ];

  return (
    <>
      <div className='mt-4 mb-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='text-uppercase text-blue fw-semibold ms-2'>
            <p><span className='dot-magazine'></span> Magazine</p>
          </h5>
          <h5 className='text-orange fw-semibold'>Mostra tutti</h5>
        </div>
        <Carousel className='mt-3 d-none d-md-block'>
          {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(4)].map((_, i) => ( // crea dinamicamente le Card
                  <Col md={3} key={i}>
                    <SingleMagazineComp
                      title={data.title} // passiamo le props
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
          

          {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(4)].map((_, i) => ( 
                  <Col md={3} key={i}>
                    <SingleMagazineComp
                      title={data.title}
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

          {/* su schermi più piccoli */}
        <Carousel className='mt-3 d-md-none d-block'>
        {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(1)].map((_, i) => ( 
                  <Col xs={12} key={i}>
                    <SingleMagazineComp
                      title={data.title}
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
          {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(1)].map((_, i) => ( 
                  <Col xs={12} key={i}>
                    <SingleMagazineComp
                      title={data.title}
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
          {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(1)].map((_, i) => ( 
                  <Col xs={12} key={i}>
                    <SingleMagazineComp
                      title={data.title}
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
          {cardData.map((data, index) => (
            <Carousel.Item key={index}>
              <Row>
                {[...Array(1)].map((_, i) => ( 
                  <Col xs={12} key={i}>
                    <SingleMagazineComp
                      title={data.title}
                      date={data.date}
                      description={data.description} 
                      image={personeNevi} 
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
