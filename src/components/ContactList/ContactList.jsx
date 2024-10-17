import css from "./ContactList.module.css";
import PropTypes from "prop-types";

import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.listContainer}>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
