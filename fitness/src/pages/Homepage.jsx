import React from 'react'
import ActivitiesComp from '../components/ActivitiesComp'
import Container from 'react-bootstrap/esm/Container'

export default function Homepage() {
  return (
    <>
      <Container className='mt-4'>
        <ActivitiesComp />
      </Container>
    </>
  )
}
