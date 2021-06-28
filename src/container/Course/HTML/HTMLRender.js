import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Mock1 from "../../MockTest/CLAT/Mock1";
import Mock2 from "../../MockTest/CLAT/Mock2";
import Mock3 from "../../MockTest/CLAT/Mock3";
import Mock4 from "../../MockTest/CLAT/Mock4";
import Mock5 from "../../MockTest/CLAT/Mock5";
import Mock6 from "../../MockTest/CLAT/Mock6";

const HTMLRender = () => {
  const { handle } = useParams();
  const [mock, setmock] = useState("");
  useEffect(() => {
    if(localStorage.getItem('mock-sto')==='checkMock'){
      switch (handle) {
        case "Mock1":
          setmock(<Mock1 />);
          break;
        case "Mock2":
          setmock(<Mock2 />);
          break;
        case "Mock3":
          setmock(<Mock3 />);
          break;
        case "Mock4":
          setmock(<Mock4 />);
          break;
          case "Mock5":
          setmock(<Mock5 />);
          break;
          case "Mock6":
          setmock(<Mock6 />);
          break;
        default:
          setmock("404 Not found ");
      }
    }
    else
    setmock("Not Authorised to view ");
    // localStorage.clear();
    
  });
  return (
    <div>
      <Header />
      <div className='min-vh-100'>{mock}</div>
      
    </div>
  );
};

export default HTMLRender;
