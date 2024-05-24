import React from 'react'
import { Bell } from 'react-bootstrap-icons'
import SingleAlarmComp from './SingleAlarmComp'

export default function AlarmsComp() {
  return (
    <>
        <div className='mt-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='text-uppercase text-blue fw-semibold d-flex align-items-center'><Bell className='me-2' /> Avvisi</h5>
                <h5 className='text-orange fw-semibold'>Mostra tutti</h5>
            </div>
            <SingleAlarmComp />
        </div>
    </>
  )
}
