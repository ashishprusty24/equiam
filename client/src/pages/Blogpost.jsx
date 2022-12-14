import React from "react";
import Texteditor from "../component/Texteditor";
import axios from "axios";
import Navbar from "../component/Navbar";
import { BiHomeAlt } from "react-icons/bi";

import { Link } from "react-router-dom";
const Blogpost = () => {
  const handleclick = async (payload) => {
    let res = await axios.post("http://localhost:8080/post", payload);
    console.log(res);
    let data = res;
  };
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
          <Texteditor handleclick={handleclick} />
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
