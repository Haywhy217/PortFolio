import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage';


const App = () => {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element ={<Homepage/>}/> 
    </Routes>
  </Router>
  )
}

export default App