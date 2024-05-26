import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

export default function DiscoverComp() {
  return (
    <>
        <div className='discover-general-container d-none d-md-block mt-5'>
          <Row>
            <Col className='p-0'>
              <div className='discover-container'>
                  <h4 className='text-light'>Allenati con noi nell'Arco della Pace</h4>
                  <h4 className='text-light'>Tutte le domeniche</h4>
                  <Button className='btn-custom-discover fw-semibold text-uppercase'> Scopri di più </Button>
              </div>
            </Col>
            <Col className='discover-img'>
            </Col>
          </Row>
        </div>
    </>
  )
}
