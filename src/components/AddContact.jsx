import React from "react";
import { useState } from "react";

export const AddContact = (props) => {
    const [person, setPerson] = useState({ name: "", email: "" });
    const onSubmitForm = (e)=>{
        e.preventDefault();
        if (person.name === "" || person.email === "") {
            alert("Please fill in all fields");
            return;
        }
        //console.log(`Initial Details= ${JSON.stringify(person)}`);
        props.details(person); // Send details to App.js
        setPerson({ name: "", email: "" }); // Clear form after submission
    }

  return (
    <>
      <div className="container">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={onSubmitForm}>
          <div className="">
            <label> Full Name </label>
            <input type="text" name="name" placeholder="Enter Name" 
            onChange={(e)=>{setPerson((prevValue)=>({...prevValue, name:e.target.value}))}}/>
          </div>
          <br/>
          <div className="">
            <label> Email </label>
            <input type="text" name="Email" placeholder="Enter Email" 
            onChange={(e)=>{setPerson((prevValue)=>({...prevValue, email:e.target.value}))}}/>
          </div>
          <br/>
          <button className="ui button green" type="submit">
            Add
          </button>
        </form>

        {/* <h4>Name= {person.name}</h4>
        <h4>email= {person.email}</h4> */}
      </div>
    </>
  );
};

