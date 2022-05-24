import React from 'react'
import ImageContainer from './ImageContainer'
import Content from './Content'
import Seperator from './Seperator';
import Cube from './Cube'
import containers from '../data/data.json'

export default function Container() {

    let cubes = [
        {
            width: 9,
            height: 9,
            color: '#e83e8c',
            scrollFactor: -2200
        },
        {
            width: 3,
            height: 3,
            color: '#fd7e14',
            scrollFactor: -1300
        },
        {
            width: 6,
            height: 6,
            color: '#007bff',
            scrollFactor: -1700
        }
    ]

    return (
        <>
            {containers.map((container, index) => {
                if (index % 2 === 0) {
                    // Renders odd container on odd index
                    return <section className={`${container.future ? "future" : ""}`}>
                        <div className='odd' key={index}>
                            {cubes.map((cube, index) => {
                                return <Cube cube={cube} index={index} />
                            })}
                            <ImageContainer img={container.img} year={container.year} />
                            <Content title={container.title} body={container.body} readMore={container.readMore} link={container.link} />
                        </div>
                        <Seperator />
                    </section>
                } else {
                    // Renders even container on odd index
                    return <section className={`${container.future ? "future" : ""}`}>
                        <div className='even' key={index}>
                            {cubes.map((cube, index) => {
                                return <Cube cube={cube} index={index} />
                            })}
                            <Content title={container.title} body={container.body} readMore={container.readMore} link={container.link} />
                            <ImageContainer img={container.img} year={container.year} />
                        </div>
                        <Seperator reverse={'reverse'} />
                    </section>
                }
            })}
        </>
    )
}
