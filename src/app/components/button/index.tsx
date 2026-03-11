import { ComponentProps } from "react";
import "./styles.css";

interface props extends ComponentProps<"button"> {}

const Button = ({ className, ...props }: props) => {
  return <button className={`button ${className}`} {...props} />;
};

export default Button;
