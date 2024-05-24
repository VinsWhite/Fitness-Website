import React from 'react'
import facebook from '../assets/img/facebook-color-icon.png';
import instagram from '../assets/img/Instagram_icon.png.webp';
import youtube from '../assets/img/youtube-icon.webp'
import IT from 'country-flag-icons/react/3x2/IT'

export default function FooterComp() {
  return (
    <div className='mt-5 mb-3'>
        <div className='social-icon d-flex justify-content-end pt-5'>
            <div className='me-5'>
              <a href="#"><img className='me-3' src={facebook} alt='facebook icon'></img></a>
              <a href="#"><img className='me-3' src={instagram} alt='instagram icon'></img></a>
              <a href="#"><img src={youtube} alt='youtube icon'></img></a>
            </div>
            <p className='fw-semibold me-5'><IT title="Italian Flag" className="it-flag"/> ITA</p>
            <p>Made by <span className='fw-bold'>PED</span></p>
        </div>
    </div>
  )
}
