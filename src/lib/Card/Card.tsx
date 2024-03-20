import React from "react";
import "./Card.css";

export interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <article className="Card">
      <h2>{title}</h2>
    </article>
  );
}
