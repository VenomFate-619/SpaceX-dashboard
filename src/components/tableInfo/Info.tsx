import React from "react";
import { Cores } from "../../redux/types/Cores";
import { Payloads } from "../../redux/types/Payloads";
import styles from "./styles.module.css";

interface Props {
  data: Cores | Payloads;
  type: "core" | "payload";
  index: number;
}

const payloadLsit = [{
  name:"name",
  value:"data.name",
  condition:"data?.name"
},{
  name:"customers",
  value:"data?.customers",
  condition:"data?.customers?.length > 0"
}]

const Info: React.FC<Props> = ({ data, type, index }) => {
  if (type === "core" && data.discriminator === "core") {
    return (
      <div className={styles.con}>
        <h2 style={{ fontWeight: 400 }}>Core #{index}</h2>
        <div>
          <h4 className={styles.h4}>Landing</h4>
          <h5 className={styles.h5}>
            {data.landing_success ? "Successful" : "Failed"}
          </h5>
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
  if (type === "payload" && data.discriminator === "payload") {
    return (
      <div className={styles.con}>
        <h2 style={{ fontWeight: 400 }}>Payload #{index}</h2>
        <div>
          <h4 className={styles.h4}>Name</h4>
          <h5 className={styles.h5}>{data.name}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>Customers</h4>
          <h5 className={styles.h5}>{data.customers.join(",")}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>MANUFACTURER</h4>
          <h5 className={styles.h5}>{data.manufacturers.join(",")}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>TYPE</h4>
          <h5 className={styles.h5}>{data.type}</h5>
        </div>
        <div>
          <h4 className={styles.h4}>ORBIT</h4>
          <h5 className={styles.h5}>{data.orbit}</h5>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Info;
