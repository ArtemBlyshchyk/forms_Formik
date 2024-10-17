import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState } from "react";
import initialContacts from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContat={addContact} />
      <SearchBox setFilter={setFilter} filter={filter} />
      <ContactList
        contacts={filteredContact}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
