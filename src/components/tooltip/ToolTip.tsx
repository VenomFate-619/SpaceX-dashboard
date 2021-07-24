import React, { useRef } from "react";
import styles from "./toolTip.module.css";
interface Props {
  text: string;
  children: React.ReactNode;
}

const ToolTip: React.FC<Props> = ({ text, children }) => {
  const display = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    display.current?.classList.toggle(styles.show);
  };

  return (
    <div
      className={styles.toolTipCon}
      onMouseEnter={handleShow}
      onMouseLeave={handleShow}
    >
      {children}
      <div className={styles.toolTip} ref={display}>
        {text}
      </div>
    </div>
  );
};

export default ToolTip;
