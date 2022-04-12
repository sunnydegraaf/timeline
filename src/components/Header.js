import React from 'react'
import BrinkLogo from '../img/logo.svg'

export default function Header() {

  console.log('link is: ', window.location.href)

  const copyLink = () => {
    let link = window.location.href
    navigator.clipboard.writeText(link)
    console.log('copied')
  }

  return (
    <div className='header'>
        <a id='go-to'>Naar website</a>
        <img className='logo' src={BrinkLogo} alt={'Brink logo'}/>
        <h1>50 jaar een kleurrijke reis door de gebouwde omgeving</h1>
        <ul className='share'>
            <li>Deel</li>
            <li><a href='https://twitter.com/brink_nl'>Twitter</a></li>
            <li><a href='https://www.instagram.com/brink.nl/'>Instagram</a></li>    
            <li><a href='https://www.linkedin.com/company/brink-nl/'>LinkedIn</a></li>
            <li><a onClick={copyLink}>Kopieer link</a></li>
        </ul>
    </div>
  )
}
