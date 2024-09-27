import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>HealthSync transforms hospital management with an integrated platform designed to enhance efficiency and improve patient care. By streamlining operations, optimizing workflows, and facilitating real-time communication among healthcare teams, HealthSync ensures that every patient receives timely and coordinated treatment, ultimately leading to better health outcomes and a superior healthcare experience.</p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt='hero' className='animated-image'/>
        <span>
          <img src='/Vector.png' alt='vector' />
        </span>
      </div>
    </div>
  )
}

export default Hero