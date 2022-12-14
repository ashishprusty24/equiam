import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFileEarmarkPlus, BsFileCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <BiHomeAlt />{" "}
        </Link>{" "}
      </div>
      <div>
        <Link to="/blog">
          <BsFileEarmarkPlus />{" "}
        </Link>{" "}
      </div>
      <div>
        <Link to="/publish">
          <BsFileCheck />{" "}
        </Link>{" "}
      </div>
      {/* <BiHomeAlt /> */}
    </div>
  );
};

export default Sidebar;
