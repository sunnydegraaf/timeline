import React from 'react'

export default function ImageContainer(props) {
  return (
    <div className='image'>
        { props.year && <h2>{props.year}</h2>}
        { props.img && <picture>
          <img src={require(`../img/${props.img.src}`)} alt={props.img.alt} />
        </picture> }
    </div>
  )
}