import React, { useState } from "react";
import Seccomp from "./Seccomp";

const Firstcomp = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Reg, setReg] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "age") {
      setAge(event.target.value);
    } else if (event.target.name === "address") {
      setAddress(event.target.value);
    } else if (event.target.name === "phone") {
      setPhone(event.target.value);
    } else {
      setReg(event.target.value);
    }
  };

  const handleClick = () => {
    setShow(true);
  };

  return ( <div>{show ? 
    <Seccomp
          propname={Name}
          propage={Age}
          propaddr={Address}
          propphone={Phone}
          propreg={Reg}
        /> 
        :
       
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        padding: 10,
        backgroundColor: "gray",
      }}
    >
     
        
       : 
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            border: "5px outset black",
            padding: 50,
          }}
        >
          <p>Registration Form</p>
          <input
            placeholder="Name"
            name="name"
            onChange={handleChange}
          ></input>
          <input
            placeholder="Age"
            name="age"
            onChange={handleChange}
          ></input>
          <input
            placeholder="Address"
            name="address"
            onChange={handleChange}
          ></input>
          <input
            placeholder="Phone No:"
            name="phone"
            onChange={handleChange}
          ></input>
          <input
          
            name="reg"
            onChange={handleChange}
          ></input>
          <button onClick={handleClick}>Submit</button>
        </div>
      
    </div>}
    </div>
  );
};

export default Firstcomp;
