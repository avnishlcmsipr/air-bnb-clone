import React from 'react'
import "./Css/BigCard.css"

export const BigCard = ({src,title,desc}) => {
    return (
        <div className="big_card">
            <img src={src} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

// export default BigCard