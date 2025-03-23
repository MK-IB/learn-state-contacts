import React from 'react'

export const ContactEditModal = (props) => {
  return (
    <div className='modalParent'>
        <div className='modalContainer'>
        <h3>Edit Contact</h3>
        <form className="ui form">
          <div className="field">
            <label> Full Name </label>
            <input type="text" name="name" placeholder="Enter Name"/>
          </div>
          <div className="field">
            <label> Email </label>
            <input type="text" name="Email" placeholder="Enter Email"/>
          </div>
          <button className="ui button green" type="submit">
            Done
          </button>
        </form>
        </div>
    </div>
  )
}
