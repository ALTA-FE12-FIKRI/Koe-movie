import React, { Component, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

class Button extends Component<ButtonProps> {
  render() {
    const { label } = this.props;
    return (
      <button className="bg-gray-600 border border-black-500">{label}</button>
    );
  }
}

export default Button;
