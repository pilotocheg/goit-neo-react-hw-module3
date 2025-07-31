import { useId } from "react";
import { ErrorMessage, Field as FormikField } from "formik";

import styles from "./Field.module.css";

export default function Field({ name }) {
  const id = useId();

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <FormikField id={id} name={name} />
      <ErrorMessage name={name} component="span" className={styles.error} />
    </div>
  );
}
