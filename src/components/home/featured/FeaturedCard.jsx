import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            {/* <img src={items.cover} alt='' />
            <h4>{items.name}</h4> */}
            <a href={items.link} >
              <img src={items.cover} alt={items.name} />
              <h1>{items.name}</h1>
            </a>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
