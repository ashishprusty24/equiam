import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogpost from '../pages/Blogpost'
import Home from '../pages/Home'
import Publish from '../pages/Publish'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blog" element = { <Blogpost/> }></Route>
            <Route path="/publish/:id" element ={<Publish/>} ></Route>
        </Routes>
    </div>
  )
}

export default Allroutes