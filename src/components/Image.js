import React from 'react'

export default function Image(props) {
  return (
    <div className='image'>
        { props.year && <h2>{props.year}</h2>}
        { props.img && <img src={require(`../img/${props.img.src}`)} alt={props.img.alt} />}
    </div>
  )
}