import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  if (contacts.length === 0) {
    return (
      <p className={css.noContacts}>There are no contacts at your request</p>
    );
  }
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
