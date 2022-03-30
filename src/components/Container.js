import React from 'react'
import Image from './Image'
import Content from './Content'
import Seperator from './Seperator';
import containers from '../data/data.json'

export default function Container() {
    return (
        <>
            {containers.map((container, index) => {
                if (index % 2 === 0) {
                    return <> <div className='odd' key={index}>
                        <Image src={container.img} year={container.year} />
                        <Content title={container.title} body={container.body} />
                    </div>
                        <Seperator/>
                    </>
                } else {
                    return <> <div className='even'>
                        <Content title={container.title} body={container.body} />
                        <Image img={container.img} year={container.year} />
                    </div>
                        <Seperator reverse={'reverse'} />
                    </>
                }
            })}
        </>
    )
}
