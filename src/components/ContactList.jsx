import Contact from "./Contact";

import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
}
