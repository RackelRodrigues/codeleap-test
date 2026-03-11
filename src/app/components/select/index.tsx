import React, { useState, ComponentProps } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./styles.css";

type OptionType = {
  label: string;
  value: string;
};

interface SelectProps extends ComponentProps<"select"> {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionType[];
  placeholder?: string;
}

export default function Select({
  value,
  onChange,
  options,
  placeholder,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-wrapper">
      <select
        value={value}
        onChange={(e) => {
          onChange?.(e);
          setIsOpen(false);
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="arrow-icon">
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
  );
}
