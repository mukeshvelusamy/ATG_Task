import React from 'react'
import home from '../image/home.jpg';
export default function Home() {
  return (
    <div className='container-fluid position-relative'>
    <img src={home} alt='home image' className='w-100 mx-0' />
    <div className='position-absolute bottom-0 start-10 mb-4 ms-4 text-white'>
      <h4>Computer Engineering</h4>
      <p>142,765 computer engineers follow this</p>
    </div>
  </div>
  

  )
}
