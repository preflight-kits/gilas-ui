import React from "react";
import { IButtonProps } from "./Button.interface";

export const Button: React.FC<IButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};
