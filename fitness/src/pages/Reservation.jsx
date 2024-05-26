import React from 'react'
import { Container } from 'react-bootstrap'
import DaysComp from '../components/Reservation/DaysComp'
import FiltersComp from '../components/Reservation/FiltersComp'
import ActivitiesGymComp from '../components/Reservation/ActivitiesGymComp'

export default function Reservation() {
  return (
    <>
      <DaysComp className='mt-5' />
      <FiltersComp className='mt-5' />
      <Container className='mt-4'>
        <ActivitiesGymComp />
      </Container>
      
    </>
  )
}
