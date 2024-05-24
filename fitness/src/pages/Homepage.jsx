import React from 'react'
import ActivitiesComp from '../components/ActivitiesComp'
import Container from 'react-bootstrap/esm/Container'
import DiscoverComp from '../components/DiscoverComp'
import AlarmsComp from '../components/AlarmsComp'
import AdBannerComp from '../components/AdBannerComp'
import MagazineComp from '../components/MagazineComp'

export default function Homepage() {
  return (
    <>
      <Container className='mt-4'>
        <ActivitiesComp />
        <DiscoverComp />
        <AlarmsComp />
        <AdBannerComp />
        <MagazineComp />
      </Container>
    </>
  )
}
