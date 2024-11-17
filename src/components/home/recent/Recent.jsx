import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Car Listed' subtitle='Are you planning on buying a new car? Well, we know that with so many options 
          available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete 
          list of new cars. ' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
