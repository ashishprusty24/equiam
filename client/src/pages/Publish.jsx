import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Publish = () => {
    const param = useParams()
    const [data,setdata] = useState()
    const handlegetdata = ()=>{
        axios.get(`http://localhost:8080/blog/${param.id}`)
        .then((r)=>{
            console.log(r.data);
           setdata(r.data[0])
        })
    }

    useEffect(()=>{
        handlegetdata()
    },[])
    if (data===undefined) return <div>Loading...</div>;
  return (
    <div>
    <Navbar />
    <div className="post_container">
      <div className="icon_container">
        {" "}
        <div>
          <Link to="/">
            <BiHomeAlt />
          </Link>
        </div>
      
      </div>
      <div>
         <h1> {data.title} </h1>
         <p dangerouslySetInnerHTML={{__html:data.value }} ></p>
      </div>
    </div>
  </div>
  )
}

export default Publish