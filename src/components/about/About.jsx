// import React, { useState } from "react"
import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/VblackSportCarinLight.jpg"
import "./about.css"
import { useHistory } from "react-router-dom"
const About = () => {
  const history = useHistory()
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>- SearchCar is an online portal that provides a wide range of services
              related to buying  new and used cars in India. It offers tools for car research,
              comparisons, and reviews, as well as listings of new and used cars for sale. SearchCar also
              provides other services, such as car dealership, financing, pricing, featuring detailes as well as a range of
              other automotive-related content, such as news, reviews, and features.</p>

            <p>There is a vast scope for car comparison sites, as the automotive industry is constantly evolving,
              and consumers are always looking for new and better cars. Here are some potential areas of
              focus for a car comparison site: This site can provide a comparative analysis of different models and
              brands, highlighting their strengths and weaknesses and helping buyers make informed
              decisions.</p>
            <button className='btn2'onClick={() => history.push("/contact")}>Know More About Us To Contact</button>
          </div>
          <div className='right row'>
            {/* <img src='./immio.jpg' alt='' /> */}
            <img src='./Vpexels-pavel-danilyuk-9143483 --11--.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
