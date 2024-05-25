import React from 'react'
import facebook from '../assets/img/facebook-color-icon.png';
import instagram from '../assets/img/Instagram_icon.png.webp';
import youtube from '../assets/img/youtube-icon.webp'
import IT from 'country-flag-icons/react/3x2/IT'

export default function FooterComp() {
  return (
    <div className='mt-5 mb-3'>
        <div className='social-icon d-flex justify-content-end align-items-center flex-column flex-md-row pt-5'>
            <div className='me-0 me-md-5'>
              <a href="#"><img className='me-3' src={facebook} alt='facebook icon'></img></a>
              <a href="#"><img className='me-3' src={instagram} alt='instagram icon'></img></a>
              <a href="#"><img src={youtube} alt='youtube icon'></img></a>
            </div>
            <p className='fw-semibold me-0 me-md-5 mt-3 mt-md-0'><IT title="Italian Flag" className="it-flag"/> ITA</p>
            <p className='mt-2 mt-md-0'>Made by <span className='fw-bold'>PED</span></p>
        </div>
    </div>
  )
}
