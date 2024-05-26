import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <div className='text-center altezza pt-5'>
          <p>404 pagina non trovata</p>
          <NavLink to='/' className='btn btn-primary'>Homepage</NavLink>
      </div>
    </>
  )
}
