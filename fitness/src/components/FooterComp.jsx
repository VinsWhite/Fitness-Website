import React from 'react'
import facebook from '../assets/img/facebook-color-icon.png';
import instagram from '../assets/img/Instagram_icon.png.webp';
import youtube from '../assets/img/youtube-icon.webp'
import IT from 'country-flag-icons/react/3x2/IT'

export default function FooterComp() {
  return (
    <div>
        <div className='social-icon'>
            <img src={facebook} alt='facebook icon'></img>
            <img src={instagram} alt='instagram icon'></img>
            <img src={youtube} alt='youtube icon'></img>
            <IT title="Italian Flag" className="it-flag"/>
        </div>
    </div>
  )
}
