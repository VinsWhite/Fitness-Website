import React from 'react'
import ActivitiesComp from '../components/ActivitiesComp'
import {Container, Row, Col} from 'react-bootstrap'
import DiscoverComp from '../components/DiscoverComp'
import AlarmsComp from '../components/Homepage/Alarms/AlarmsComp';
import AdBannerComp from '../components/Homepage/AdBanner/AdBannerComp'
import MagazineComp from '../components/Homepage/Magazine/MagazineComp'

export default function Homepage() {
  return (
    <>
      <Container className='mt-4 px-5'>
        <ActivitiesComp />
        <DiscoverComp />
        <AlarmsComp />
        <AdBannerComp />
        <MagazineComp />
      </Container>
      <Row className='starter-bg py-5 m-0'>
          <Col className='starter-1 p-5 m-0'></Col>
          <Col className='starter-2 p-5 d-none d-md-block'></Col>
      </Row>
    </>
  )
}
