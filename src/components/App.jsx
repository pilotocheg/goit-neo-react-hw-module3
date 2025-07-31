import { useEffect, useMemo, useState } from "react";

import css from "./App.module.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";

const STORAGE_KEY = "contactsData";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const newContact = {
      id: Date.now(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleRemoveContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = useMemo(() => {
    if (!searchQuery) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [contacts, searchQuery]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onSearchChange={handleSearchChange} value={searchQuery} />
      <ContactList
        contacts={filteredContacts}
        onRemoveContact={handleRemoveContact}
      />
    </div>
  );
}
