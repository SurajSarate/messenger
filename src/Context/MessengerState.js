import React, { useState } from "react";
import MessengerContext from "./MessengerContext";



const MessengerState = (props) => {

  const[chatPage,setChatPage]=useState(false);  

  return (
    <MessengerContext.Provider value={{chatPage,setChatPage}}>
      {props.children}
    </MessengerContext.Provider>
  );
};

export default MessengerState;
