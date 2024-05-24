import React from 'react'
import { Button } from 'react-bootstrap'

export default function DiscoverComp() {
  return (
    <>
        <div className='discover-general-container d-flex justify-content-between align-items-center'>
            <div className='mt-5 discover-container'>
                <h4 className='text-light'>Allenati con noi nell'Arco della Pace</h4>
                <h4 className='text-light'>Tutte le domeniche</h4>
                <Button className='btn-custom-discover fw-semibold text-uppercase'> Scopri di più </Button>
            </div>
            <div className='discover-img'></div>
        </div>
    </>
  )
}
