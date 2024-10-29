import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Loader from '../Components/Loader'
function Allroutes() {
  return (
    <Routes>
    <Route path="/" element={<Loader/>}/>
    <Route path="/home" element={<Home/>}/>
  
 </Routes>
  )
}

export default Allroutes