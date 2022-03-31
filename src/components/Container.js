import React from 'react'
import ImageContainer from './ImageContainer'
import Content from './Content'
import Seperator from './Seperator';
import Cube from './Cube'
import containers from '../data/data.json'

export default function Container() {

    let cubes = [
        {
          width: 4,
          height: 4,
          color: '#e83e8c'
        },
        {
          width: 6,
          height: 6,
          color: '#fd7e14'
        },
        {
          width: 4,
          height: 4,
          color: '#007bff'
        },
        {
          width: 8,
          height: 8,
          color: 'e83e8c'
        },
        {
          width: 6,
          height: 6,
          color: 'fd7e14'
        },
        {
          width: 4,
          height: 4,
          color: '#007bff'
        }
      ]

    return (
        <>
            {containers.map((container, index) => {
                if (index % 2 === 0) {
                    // Renders odd container on odd index
                    return <>
                        <div className='odd' key={index}>
                            {cubes.map((cube, index) => {
                                return <Cube cube={cube} index={index} />
                            })}
                            <ImageContainer img={container.img} year={container.year} />
                            <Content title={container.title} body={container.body} />
                        </div>
                        <Seperator />
                    </>
                } else {
                    // Renders even container on odd index
                    return <>
                        <div className='even'>
                            {cubes.map((cube, index) => {
                                return <Cube cube={cube} index={index} />
                            })}
                            <Content title={container.title} body={container.body} />
                            <ImageContainer img={container.img} year={container.year} />
                        </div>
                        <Seperator reverse={'reverse'} />
                    </>
                }
            })}
        </>
    )
}
