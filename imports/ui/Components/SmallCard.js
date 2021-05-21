import React from 'react'
import "./Css/SmallCard.css"

export const SmallCard = ({src,title,desc}) => {
    return (
        <div className="small_card">
          <img src={src} />
          <div className="small_data">
          <h4>{title}</h4>
          <p>{desc}</p>
          </div>
        </div>
    )
}

// export default SmallCard
