import React from 'react'
import { Card } from 'react-bootstrap';
import { MdArrowForwardIos } from "react-icons/md";

export default function SingleMagazineComp({ title, date, description, image }) {
  return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body className='position-relative'>
                    <h5 className='fw-bold text-orange text-uppercase mt-3'>{title}</h5>
                <Card.Text className='mt-3'>
                    { description }
                </Card.Text>
                <p className='opacity-75'>{date} </p>
                <MdArrowForwardIos className='arrowMagazine position-absolute top-0 end-0 me-4 text-blue fs-2' />
            </Card.Body>
        </Card>
  )
}
