import React from 'react'
import { Cores } from '../../redux/types/Cores';
import { Payloads } from '../../redux/types/Payloads';
import styles from "./styles.module.css"

interface Props {
  data: Cores  | Payloads,
  type: "core" | "payload",
  index: number
}



const Info: React.FC<Props> = ({ data , type , index }) => {

  if(type === "core"  &&  data.discriminator === "core" )
  {
    return (
      <div className={styles.con}>
        <h2 style={{ fontWeight: 400 }} >Core #{index}</h2>
        <div>
          <h4 className={styles.h4}>Landing</h4>
          <h5 className={styles.h5}>{data.landing_success ? "Successful" : "Failed"}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>landing type</h4>
          <h5 className={styles.h5}>{data.landing_type}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>reused</h4>
          <h5 className={styles.h5}>{data.reused ? "yes" : "no"}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>flight</h4>
          <h5 className={styles.h5}>{data.flight}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>landpad</h4>
          <h5 className={styles.h5}>{data.landpad.name}</h5>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.con}>
      <h2 style={{ fontWeight: 400 }} >Payload #{index}</h2>
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