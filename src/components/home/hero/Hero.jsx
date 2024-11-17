import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import "./Featured.css"
import { featured } from "../../data/Data"
import "./recent.css"
import { useState, useEffect } from "react"
import axios from 'axios';

const Hero = () => {
    const [data, setData] = useState([]);
    const firstTenItems = data.slice(0,12);
    const [carData, setCarData] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectbrand, setselectBrand] = useState('Datsun');
    const [transmission, setTransmission] = useState('Manual');
    const [bodyType, setbodyType] = useState('Hatchback');
    const [showfeatures, setShowfeatures] = useState(0);

    // FUELTYPE
  const [fuelType, setFuelType] = useState('Petrol');
  const [isFirstRender, setIsFirstRender] = useState(true);
  console.log('fuelType',fuelType);
  useEffect(() => {
    fetchData();
    setIsFirstRender(false);
  }, [fuelType,selectbrand,bodyType,transmission,isFirstRender]);

  useEffect(() => {

  // fetchBrands();
  console.log("brands",brands);

  }, []);

  console.log('carData',carData);

  async function fetchData() {
    try {
      const response = await axios.get('https://searchcar-b.onrender.com/data', {
      // const response = await axios.get('http://localhost:4000/data', {
        params: {
         fuelType,
         selectbrand,
         transmission,
         bodyType,
        },
        headers: {
          'Access-Control-Allow-Origin': 'https://search-car.vercel.app/'
        }
      });
      setCarData(response.data);
    } catch (error) {
      console.error('errrrrorrrr hai', error);
    }
  }

  // BRAND
  // async function fetchBrands() {
  //   try {
  //     const response = await axios.get('https://searchcar-b.onrender.com/brands');
  //     // const response = await axios.get('http://localhost:4000/brands');
  //     console.log(response.data);
  //     setBrands(response.data);
      
  //   } catch (error) {
  //     console.error('Error retrieving brands:', error);
  //   }
  // }


  // const [currentPage, setCurrentPage] = useState(1);
console.log('transmission',transmission);
console.log('bodyType',bodyType);
console.log('fuelType',fuelType);
console.log('selectbrand',selectbrand);
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Dream Car ' subtitle="Let's keep it simple when it comes to your dream car." />
          {/* <form className='flex'> */}
            {/* <div className='box'>
              <span>Brand</span>
              <select type='text' placeholder='Brand' value={selectbrand} onChange={(e) => {setselectBrand(e.target.value)}} > */}
           {/* {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))} */}
          {/* </select>
            </div> */}

{/*  FOR  FUEL - TYPE */}
            {/* <div className='box'>
              <span>Fuel Type</span>
              <select className="select-items" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
        </select>
            </div> */}
            {/* <div className='box'>
              <span>Transmission</span>
              <select type='text' placeholder='Transmission' className="select-items" value={transmission} onChange={(e) => setTransmission(e.target.value)} >
          <option value="">Select Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
          </select>
            </div> */}
            {/* <button className='btn1'>
              <i className='fa fa-search'></i>
            </button> */}
          {/* </form> */}
        </div>
      </section>

{/* featured section */}
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Car Types' subtitle='Find All Type of Cars.' />
          {/* <FeaturedCard /> */}
          <div className='content grid5 mtop' >
        {featured.map((items, index) => (
          <div className='box' key={index} value={bodyType} onClick={() => setbodyType(items.name)}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div> 
      </div>
      </section>

{/* Recent section or results  */}
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Car Listed' subtitle='Are you planning on buying a new car? Well, we know that with so many options 
          available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete 
          list of new cars. ' />
          {/* <RecentCard /> */}
          {console.log('data',data)}
      <div className='content grid3 mtop'>
        {carData.map((val, index) => {
          const { _id, Name, price, Milage, Engine, sitting_capacity, body_type, feutures,
               Image } = val
          return (
            
            <div className='box shadow' key={index} onClick={()=>{setShowfeatures(_id)}}> 
              <div className='img'>
                <img src={Image} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: body_type === "For Sale" ? "#25b5791a" : "#ff98001a", color: body_type === "For Sale" ? "#25b579" : "#ff9800" }}>{body_type}</span>
                  <i className='fa fa-heart'></i>
                </div>
                {/* <h4>{ Brand}</h4> */}
                  {/* <i className='fa fa-location-dot'></i> */}
                  <span>{Milage} </span> 
                  <span> sitting_capacity: {sitting_capacity} </span> <br />
                  {/* <span>{Fuel_type}</span> <br /> */}
                <span>{Name}</span>
                {/* <span>{transmission}</span> */}
              </div>
              <div className='button flex'>
                <div>
                  <span>Engine: {Engine}</span>
                  <button className='btn2'>{price}</button>
                  {(showfeatures === _id) ? <span>{feutures.map((feuture)=>(
                    <p key={feuture}>{feuture} </p>
                  ))}</span> : ""}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero