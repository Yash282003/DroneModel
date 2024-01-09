import React from 'react'
const Servicecard = ({image,Topic,Description1,Description2,Description3}) => {
  return (
    <div className='servicecard-container'>
<div className="service-img">
    <img src={image} alt="" />
</div>
<div className="service-content">
<h1>{Topic}</h1>
<ul>
  <li>{Description1}</li>
  <li>{Description2} </li>
  <li>{Description3} </li>
</ul>
</div>
    </div>
  )
}

export default Servicecard