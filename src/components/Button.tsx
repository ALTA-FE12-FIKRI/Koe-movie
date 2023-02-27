import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClickFav?: React.MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ label, onClickFav, ...props }) => {
  return (
    <button className="bg-gray-600 border border-black-500" {...props} onClick={onClickFav}>
      {label}
    </button>
  );
};

export default Button;
