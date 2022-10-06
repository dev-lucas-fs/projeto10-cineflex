import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../../api/cineflex";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Section from "../../components/Section";
import { Container, List, ShowTimeItem, ShowTimeList, Tittle, Weekday } from "./styles";

export default function Movie() {
  const { id } = useParams();
  const [days, setDays] = useState([]);

  useEffect(() => {
    const promise = getMovie(id);

    promise.then(({ data }) => {
      setDays(data.days);
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
    </Container>
  );
}
