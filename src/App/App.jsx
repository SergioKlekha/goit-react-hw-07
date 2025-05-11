import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useState, useEffect } from "react";
import css from "./App.module.css"
import initialContacts from "../../contacts.json"



const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

      useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);



    const addContact = (newContact) => {
        setContacts ((prev) => {
          return [...prev, newContact]
        })
    }

    const [filter, setFilter] = useState("");
    const filterContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    const deleteContacts = (contactId) => {
      setContacts((prev) => {
        return prev.filter((contact) => contact.id !== contactId);
      })
    }
  return (
    <>
    <div className={css.block}>
      <h1>Phonebook</h1>
      <ContactForm 
                onAdd={addContact}/>
      <SearchBox 
                value={filter} 
                onFilter={setFilter}/>
      <ContactList 
                contacts={filterContacts}
                onDelete={deleteContacts}
                />
    </div>
    </>
  );
};




export default App;