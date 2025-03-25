import React from 'react'

export const ContactEditModal = (props) => {
  const index = -1;
  const [person, setPerson] = useState({ name: "", email: "" });
      const onSubmitForm = (e)=>{
          e.preventDefault();
          if (person.name === "" || person.email === "") {
              alert("Please fill in all fields");
              return;
          }
          //console.log(`Initial Details= ${JSON.stringify(person)}`);
          props.onEdit(person); // Send details to App.js
          setPerson({ name: "", email: "" }); // Clear form after submission
      }
  return (
    <div className='modalParent'>
        <div className='modalContainer'>
        <h3>Edit Contact</h3>
        <form className="ui form">
          <div className="field">
            <label> Full Name </label>
            <input type="text" name="name" placeholder="Enter Name"
            onChange={(e)=>{setPerson((prevValue)=>({...prevValue, name:e.target.value}))}}/>
          </div>
          <div className="field">
            <label> Email </label>
            <input type="text" name="Email" placeholder="Enter Email"
            onChange={(e)=>{setPerson((prevValue)=>({...prevValue, email:e.target.value}))}}/>
          </div>
          <div className='expanded'>
          <button className="ui button red" type="submit" onClick={props.showModal}>Cancel</button>
            <button className="ui button green" type="submit" onClick={onSubmitForm}>Done</button>
          </div>
        </form>
        </div>
    </div>
  )
}
