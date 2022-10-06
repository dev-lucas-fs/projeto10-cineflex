import React from "react";
import { Container, Tittle } from "./styles";

export default function Section({ text, children }) {
  return (
    <Container>
      <Tittle>{text}</Tittle>
      {children}
    </Container>
  );
}
