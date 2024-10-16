// import css from "./ContactList.module.css";

import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
