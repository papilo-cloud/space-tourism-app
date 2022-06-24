import './Technology.css'
import data from '../../data.json'
import { useState } from 'react'


const Technology = () => {

  const {technology} = data
  const [first] = useState(technology)
  const [technologys, setTechnologys] = useState(2)
  const {name, images, description} = first[technologys]

  return (
    <div className='tech'>
      <p className='p'><span>03</span>Space launch 101</p>
      <div className="tech-img">
        <img className='img' src={images.landscape} alt={name} />
      </div>
      
      <div className="tech-text">
        <div className="btn">
          {technology.map((btn, i) => <button key={i} onClick={() => setTechnologys(i)}>
            {i + 1}
          </button> )}
        </div>
        <div>
          <p className='pp'>the terminology...</p>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Technology