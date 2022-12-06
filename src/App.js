import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList'
function App() {

  
  // const contacts = [
  //   {
  //     id:1,
  //     name:"Pratham P. Sakhare",
  //     email:"prathampsakhare@gmail.com"
  //   },
  //   {
  //     id:2,
  //     name:"Nikhil Patil",
  //     email:"nikhilpatil@gmail.com"
  //   }
  // ]

  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  } 

  
 
  return(
  <div className='ui container'>
    <Header /><br></br><br></br><br></br>
    <AddContact addContactHandler= {addContactHandler}/>
    <ContactList contacts = {contacts}/>
  </div>
  )
}

export default App;
