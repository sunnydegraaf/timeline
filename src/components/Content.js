import React from 'react'

export default function Content(props) {
  return (
    <div className='content'>
      { props.title && <h2>{props.title}</h2> }
      { props.body && <p>{props.body}</p> }
    </div>
  )
}