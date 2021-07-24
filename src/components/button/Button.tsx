import React from "react";
import './button.css'
interface Props {
  text: string;
  style?: string;
  border?: string;
  size?: string;
}

const Button: React.FC<Props> = ({text,size,style,border}) => {
  return (<button className="btn"   >
      {text}
  </button>);
};

export default Button;
