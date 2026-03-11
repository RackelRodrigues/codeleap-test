import "./styles.css";
import { ComponentProps } from "react";

interface ContextProps extends ComponentProps<"div"> {}

export function Root({ ...props }: ContextProps) {
  return <div className="input-root">{props.children}</div>;
}

interface InputProps extends ComponentProps<"input"> {
  isError?: boolean;
}
export function Field({ isError, ...props }: InputProps) {
  return <input className="input-field" {...props} />;
}
