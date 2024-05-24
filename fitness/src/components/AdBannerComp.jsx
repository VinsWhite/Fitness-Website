import React from 'react';
import googlePlay from '../assets/img/googlePlay-badge.png';
import appStore from '../assets/img/appStore-badge.png';
import { Row, Col } from 'react-bootstrap';

export default function AdBannerComp() {
  return (
    <>
        <div className='my-5 adbanner-container'>
          <Row>
            <Col className='col1'>
              <div>
                  <h5 className='text-yellow text-uppercase'>Scarica ora la nuova app</h5>
                  <div>
                    <img src={googlePlay} alt="google play" />
                    <img className='p-3 ms-2' src={appStore} alt="app store" />
                  </div>
              </div>
            </Col>
            <Col className='col2'>
            </Col>
          </Row>
        </div>
    </>
  )
}
