import React, { useState } from "react";
import { carsData } from "../../data/Data"; // Import the car data
import './recent.css'; // Assuming the CSS is in the same directory

const RecentCard = () => {
  const [data] = useState(carsData); // Use static data from data.js
  const firstTenItems = data.slice(0, 12); // Limit to the first 12 items

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="content grid3 mtop">
        {firstTenItems.map((val) => {
          const { _id, Name, price, Milage, Engine, Fuel_type, sitting_capacity, body_type, Brand, Image } = val;
          return (
            <div className="box shadow" key={_id}>
              <div className="img">
                <img src={Image} alt={Name} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: body_type === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: body_type === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {body_type}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{Brand}</h4>
                <span>{Milage}</span>
                <span> Sitting Capacity: {sitting_capacity} </span> <br />
                <span>{Fuel_type}</span> <br />
                <span>{Name}</span>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>
                </div>
                <span>{Engine}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
