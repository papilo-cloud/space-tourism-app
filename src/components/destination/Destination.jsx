import React from 'react'
import './Destination.css'
import data from '../../data.json'
import { useState } from 'react'


export const Destination = () => {

  const {destinations} = data
  const [first] = useState(destinations)
  const [destination, setDestination] = useState(1)
  const {name, images, description, distance, travel} = first[destination]

  return (
    <div className='destination'>
      <div className="dest-img">
        <p><span>01</span> Pick your destination</p>
          <img src={images.png} alt={name} />
      </div>
      <div className='dest-text'>
        <div className="btn">
          {destinations.map((btn, index) => <button key={index} onClick={() => setDestination(index)}>
            {btn.name }</button>) }
        </div>
        <h1>{name}</h1>
        <p>{description} </p>
        <div className="data">
          <ul className="distance">
            <li className='one'>avg. distance</li>
            <li className='two'>{distance}</li>
          </ul>
          <ul className="travel">
            <li className='one'>est. travel time</li>
            <li className='two'>{travel} </li>
          </ul>
        </div>
      </div>
     </div>
  )
}


 