import React from "react";
import Navbar from "../Components/Comman/Navbar";
import Sidebar from "../Components/Comman/Sidebar";

function Home(props) {
  return (
    <div className="layout overflow-hidden">
        <Navbar />
        <Sidebar />
        {props.ele}
    </div> 
  );
}

export default Home;
