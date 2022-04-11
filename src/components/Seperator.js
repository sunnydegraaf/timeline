import React from 'react'

export default function Seperator(props) {

    return (
        <div className={`seperator ${props.reverse ? "reverse" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><rect x="6" y="6" width="6" height="6"/><rect width="6" height="6"/></svg>
            <hr className={props.reverse} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><rect x="6" y="6" width="6" height="6"/><rect width="6" height="6"/></svg>
        </div>
    )
}

// import React from 'react'

// export default function Seperator(props) {

//     return (
//         <div>
//             <hr className={props.reverse} />
//         </div>
//     )
// }
