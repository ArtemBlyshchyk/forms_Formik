import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.listContainer}>
      <div>
        <p>
          <FaUser className={css.avatar} />
          <span>{contact.name}</span>
        </p>
        <p>
          <BsTelephoneFill className={css.avatar} />
          <span>{contact.number}</span>
        </p>
      </div>
      <Button onClickDelete={() => onDeleteContact(contact.id)}>Delete</Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
