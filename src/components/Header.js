import React from 'react'
import BrinkLogo from '../img/logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <a id='go-to'>Naar website</a>
        <img className='logo' src={BrinkLogo} alt={'Brink logo'}/>
        <h1>50 jaar een kleurrijke reis door de gebouwde omgeving</h1>
        <ul className='share'>
            <li>Deel</li>
            <li><a>Twitter</a></li>
            <li><a>Facebook</a></li>
            <li><a>Kopieer link</a></li>
        </ul>
    </div>
  )
}
