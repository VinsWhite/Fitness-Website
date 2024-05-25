import React from 'react';
import googlePlay from '../../../assets/img/googlePlay-badge.png';
import appStore from '../../../assets/img/appStore-badge.png';
import { Row, Col } from 'react-bootstrap';

export default function AdBannerComp() {
  return (
    <>
        <div className='my-5 adbanner-container d-none d-md-block'>
          <Row>
            <Col className='col1'>
              <div>
                  <h5 className='text-yellow text-uppercase'>Scarica ora la nuova app</h5>
                  <div>
                    <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1" target="_blank"><img src={googlePlay} alt="google play" /></a>
                    <a href="https://www.apple.com/app-store/" target="_blank"><img className='p-3 ms-2' src={appStore} alt="app store" /></a>
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
