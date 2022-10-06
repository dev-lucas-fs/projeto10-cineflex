import React from "react";
import Header from "./Header";
import { Container } from "./styles";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
