import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import { ContactEditModal } from "./components/ContactEditModal";

function App() {
  const STORAGE_KEY = "DetailsKey";
  const [editName, setEditName] = useState("");
  const [person, setPersonDetails] = useState(() => {
    const savedDetails = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return savedDetails ? savedDetails : [];
  });

  const showDetails = (detail) => {
    setPersonDetails((prevDetails) => {
      const updatedDetails = [...prevDetails, detail];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDetails));
      //console.log(`Initial Details= ${JSON.stringify(updatedDetails)}`);
      return updatedDetails;
    });
  };
  const deleteHandler = (index) => {
    const updatedDetail = person.filter((_, i) => i !== index);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDetail));
    setPersonDetails(updatedDetail);
  };

  const [canShowModal, setShowModal] = useState(false);
  const showModal = (itemName)=>{
    
    if(!canShowModal)
      {
        if(!itemName) return;
        setEditName(itemName); // Update state instead of a variable
        console.log(`Edit name = ${itemName}`);
      }
    setShowModal(!canShowModal);
  }

  const editContact = (details) => {
    console.log(`New Name: ${details.name}, Edit Name: ${editName}`);
  
    setPersonDetails((prevDetail) =>
      prevDetail.map((item) => {
        console.log(`Checking item: ${item.name}`);
        
        if (item.name.trim().toLowerCase() === editName.trim().toLowerCase()) {
          console.log("MATCH FOUND! Updating...");
          return { name: details.name, email: details.email };
        }
  
        return item;
      })
    );
    showModal(false);
  };

  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(person));
  }, [person]);
  
  return (
    <>
      <Header />
      <div className="mainContainer">
        <AddContact details={showDetails} />
        <div className="contactList">
          <ContactList persons={person} onDelete={deleteHandler} showModal={showModal}/>
        </div>
      </div>
      {canShowModal && <ContactEditModal showModal={showModal} onEdit={editContact}/>}
    </>
  );
}

export default App;
