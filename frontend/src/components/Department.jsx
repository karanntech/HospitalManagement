import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const Department = () => {

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/",
    },
    {
      name: "Orthopedics",
      imageUrl: "/",
    },
    {
      name: "Cardiology",
      imageUrl: "/",
    },
    {
      name: "Neurology",
      imageUrl: "/",
    },
    {
      name: "Oncology",
      imageUrl: "/",
    },
    {
      name: "Radiology",
      imageUrl: "/",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/",
    },
    {
      name: "Dermatology",
      imageUrl: "/",
    },
    {
      name: "ENT",
      imageUrl: "/",
    },
  ];

  const responsive = {
    extraLarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div className='container departments'>
      <h2>Departments</h2>
      <Carousel responsive={responsive}
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
      ]}>
        {departmentsArray.map((depart, index) => {
          return (
            <div key={index} className='card'>
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl} alt="Department" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Department