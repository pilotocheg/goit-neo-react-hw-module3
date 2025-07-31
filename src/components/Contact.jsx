import { FaUser, FaPhone } from "react-icons/fa";

import styles from "./Contact.module.css";

export default function Contact({ contact, onRemoveContact }) {
  return (
    <li className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <div className={styles.name}>
          <FaUser className={styles.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={styles.phone}>
          <FaPhone className={styles.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onRemoveContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
