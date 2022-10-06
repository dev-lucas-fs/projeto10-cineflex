import React from "react";
import { Container, Image } from "./styles";

export default function Movie({ image }) {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}
