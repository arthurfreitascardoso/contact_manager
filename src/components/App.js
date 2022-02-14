import React, {useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
   setContacts([...contacts, {id: uuid(), ...contact}]) 
   console.log(contact);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
  <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <div className="ui container center" style={{ marginTop: "70px"}}>
                <h2>Contact List</h2>
            </div>
      <ContactList contacts ={contacts} getContactId={removeContactHandler}/>
  </div>
  );
}

export default App;
