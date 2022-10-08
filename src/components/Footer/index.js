import React from "react";
import Movie from "../Movie";

import { Container, ContainerMovie, ContainerText, Text } from "./styles";

export default function Footer({ image, texts }) {
  return (
    <Container>
      <ContainerMovie>
        <Movie image={image} />
      </ContainerMovie>
      <ContainerText>
        {texts.map((text) => (
          <Text>{text}</Text>
        ))}
      </ContainerText>
    </Container>
  );
}
