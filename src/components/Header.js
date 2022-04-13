import React from 'react'
import BrinkLogo from '../img/logo.svg'

export default function Header() {

  let link = window.location.href

  const copyLink = () => {
    
    navigator.clipboard.writeText(link)
    console.log('copied')
  }

  return (
    <div className='header'>
        <a href='https://www.brink.nl/' id='go-to'>Naar website</a>
        <img className='logo' src={BrinkLogo} alt={'Brink logo'}/>
        <h1>50 jaar een kleurrijke reis door de gebouwde omgeving</h1>
        <ul className='share'>
            <li>Deel</li>
            <li><a href={`https://twitter.com/share?url=${link}&via=brink_nl`}>Twitter</a></li>
            <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}>Facebook</a></li>    
            <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}>LinkedIn</a></li>
            <li><a href='#' onClick={copyLink}>Kopieer link</a></li>
        </ul>
    </div>
  )
}
