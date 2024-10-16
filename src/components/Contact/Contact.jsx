import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = ({ contact }) => {
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
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
