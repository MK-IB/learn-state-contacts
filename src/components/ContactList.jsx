import React from "react";

export const ContactList = (props) => {
 // console.log(`From CONTACTLIST- ${JSON.stringify(props.persons)}`);
  return (
    <>
      {props.persons.map((item, index) => {
        return (
          <div className="ui list"
           key={index} 
           style={{height: 50}}>
            <div className="item">
            <img className="ui avatar image" src="src/images/rachel.png"/>
                <div className="content">
                <a className="header">{item.name}</a>
                <div className="description">{item.email}</div>
                </div>
            </div>
            <div className="edit">
              <i className="fa-solid fa-trash" style={{color:"white"}} onClick={()=>(props.onDelete(index))}/>
              <i className="fa-solid fa-pen" style={{color:"white"}} onClick={()=>(props.showModal(item.name))}/>
            </div>
            <div className="ui divider"></div>
          </div>
        );
      })}
      {/* <h4>NAME: {props.persons.name}</h4>
     <h4>NAME: {props.persons.email}</h4> */}
      {/* {props.persons.map((item, index) => (
      <List item={item} key={index} />
    ))}  */}
    </>
  );
};
