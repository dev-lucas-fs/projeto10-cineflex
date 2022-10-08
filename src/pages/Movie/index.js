import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie, getMovies } from "../../api/cineflex";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import { Container, List, ShowTimeItem, ShowTimeList, Tittle, Weekday } from "./styles";

export default function Movie() {
  const { id } = useParams();
  const [days, setDays] = useState([]);
  const [footer, setFooter] = useState(false);
  useEffect(() => {
    const promise = getMovie(id);
    const promiseFooter = getMovies();
    promise.then(({ data }) => {
      setDays(data.days);
    });
    promiseFooter.then(({ data }) => {
      setFooter(data.filter((movie) => movie.id === Number(id))[0]);
    });
  }, []);

  return (
    <Container>
      <Section text="Selecione o horário">
        <List>
          {days.map((day) => (
            <Weekday>
              <Tittle>{`${day.weekday} - ${day.date}`}</Tittle>
              <ShowTimeList>
                {day.showtimes.map((showtime) => (
                  <ShowTimeItem key={showtime.id}>
                    <Link to={`/seats/${showtime.id}`}>
                      <PrimaryButton>{showtime.name}</PrimaryButton>
                    </Link>
                  </ShowTimeItem>
                ))}
              </ShowTimeList>
            </Weekday>
          ))}
        </List>
      </Section>
      {footer !== false ? <Footer image={footer.posterURL} texts={[footer.title]} /> : ""}
    </Container>
  );
}
