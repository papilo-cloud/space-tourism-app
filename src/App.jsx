import Header from './components/header/Header';
import Technology from './components/technology/Technology';
import { Home } from './components/home/home';
import {Destination} from './components/destination/Destination';
import Crew from './components/crew/Crew';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



const App = () =>{
  return(
  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/destination' element={<Destination />} />
          <Route index element={<Home />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
