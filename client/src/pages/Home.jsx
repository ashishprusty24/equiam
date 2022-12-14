import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Texteditor from "../component/Texteditor";
import { BsFileEarmarkPlus, BsFileCheck } from "react-icons/bs";
const Home = () => {
  const [data1, setdata] = useState([]);
  const handlegetdata = async () => {
    try {
      let res = await axios.get("http://localhost:8080/blog");
      setdata(res.data);
    } catch {
      console.log("something error");
    }
  };

  useEffect(() => {
    handlegetdata();
  }, []);
  if (data1.length == 0) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="blog_container">
          {data1.map((el) => (
              <div className="blog_card">
            <Link to={`/publish/${el._id}`}>
                <h2 dangerouslySetInnerHTML={{ __html: el.title }}></h2>
                <h4 dangerouslySetInnerHTML={{ __html: el.desc }}></h4>
            </Link>
              </div>
          ))}
        </div>
        <span className="post_icon" >
            <Link to={"/blog"} >

          <BsFileEarmarkPlus/>
            </Link>
        </span>
      </div>
    </>
  );
};

export default Home;
