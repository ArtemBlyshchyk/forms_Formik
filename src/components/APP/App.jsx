import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect, useState } from "react";
import initialContacts from "../../data/contacts.json";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const filteredContact = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((prevContact) => prevContact.id !== contactId);
    });
  };

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm onAddContat={addContact} />
      <SearchBox setFilter={setFilter} filter={filter} />
      <ContactList contacts={filteredContact} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
