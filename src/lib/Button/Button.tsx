import React from "react";
import { IButtonProps } from "./Button.interface";
import * as styles from "./Button.css";

export const Button: React.FC<IButtonProps> = ({ label }) => {
  return <button className={styles.Button}>{label}</button>;
};
