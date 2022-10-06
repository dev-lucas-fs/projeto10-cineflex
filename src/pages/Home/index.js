import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../api/cineflex";
import Movie from "../../components/Movie";
import Section from "../../components/Section";
import { Container, Item, List } from "./styles";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = getMovies();

    promise.then(({ data }) => {
      setMovies(data);
    });

    promise.catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <Container>
      <Section text="Selecione um filme">
        <List>
          {movies.map(({ id, posterURL }) => (
            <Item key={id}>
              <Link to={`/movie/${id}`}>
                <Movie image={posterURL} />
              </Link>
            </Item>
          ))}
        </List>
      </Section>
    </Container>
  );
}
