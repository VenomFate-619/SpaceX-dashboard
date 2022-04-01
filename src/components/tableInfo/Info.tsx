import React from 'react'
import styles from "./styles.module.css"
const Info = () => {
  return (
    <div className={styles.con}>
      <h2>Payload #1</h2>
      <div>
        <h4 className={styles.h4}>Customer</h4>
        <h5 className={styles.h5}>United States</h5>
      </div>
      <div>
        <h4 className={styles.h4}>Name</h4>
        <h5 className={styles.h5}>Starlink 4-8 (v1.5)</h5>
      </div>
    </div>
  );
}

export default Info