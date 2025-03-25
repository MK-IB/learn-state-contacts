import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import { ContactEditModal } from "./components/ContactEditModal";

function App() {
  const STORAGE_KEY = "DetailsKey";
  const [person, setPersonDetails] = useState(() => {
    const savedDetails = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return savedDetails ? savedDetails : [];
  });

  const showDetails = (detail) => {
    setPersonDetails((prevDetails) => {
      const updatedDetails = [...prevDetails, detail];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDetails));
      console.log(`Initial Details= ${JSON.stringify(updatedDetails)}`);
      return updatedDetails;
    });
  };
  const deleteHandler = (index) => {
    const updatedDetail = person.filter((_, i) => i !== index);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDetail));
    setPersonDetails(updatedDetail);
  };

  const [canShowModal, setShowModal] = useState(false);
  const showModal = ()=>{
    setShowModal(!canShowModal);
  }

  const editContact = (details, index)=>{
    setPersonDetails((prevDetail)=>
      prevDetail.map((item, i)=>(i === index ? details : item)));
  }
  return (
    <>
      <Header />
      <AddContact details={showDetails} />
      <div className="contactList">
        <div className="listContainer">
          <ContactList persons={person} onDelete={deleteHandler} showModal={showModal}/>
        </div>
      </div>
      {canShowModal && <ContactEditModal showModal={showModal} onEdit={editContact}/>}
    </>
  );
}

export default App;
