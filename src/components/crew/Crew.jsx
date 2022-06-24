import './Crew.css'
import data from '../../data.json'
import { useState } from 'react'


const Crew = () => {

  const {crew} = data
  const [first] = useState(crew)
  const [crews, setCrews] = useState(3)
  const {name, images, role, bio} = first[crews]

  return (
    <div className="crew">
      <p className='name'><span>02</span> Meet your crew</p>
      <div className="crew-img">
        <img src={images.png} alt={name} />
      </div>
      <div className="crew-btns">
        {crew.map((btn, i) => <button key={i} onClick={() => setCrews(i)}>
          
        </button> )}
      </div>
      <div className="crew-text">
        <h4>{role}</h4>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      
    </div>
  )
}

export default Crew