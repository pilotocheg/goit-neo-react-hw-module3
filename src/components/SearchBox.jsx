import { useId } from "react";

import styles from "./SearchBox.module.css";
export default function SearchBox({ onSearchChange, value }) {
  const id = useId();

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}
