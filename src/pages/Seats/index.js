import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSeats, postSeats } from "../../api/cineflex";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import {
  Container,
  ContainerContent,
  ContainerSeat,
  ContainerSeats,
  Form,
  Input,
  InputGroup,
  Label,
  Seat,
  SeatList,
} from "./styles";

export default function Seats() {
  const [seats, setSeats] = useState(false);
  const [data, setData] = useState({
    ids: [],
    name: "",
    cpf: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const promise = getSeats(id);

    promise.then(({ data }) => {
      setSeats(data);
    });
  }, []);

  function updateIds(id) {
    setData({
      ...data,
      ids: data.ids.includes(id) ? data.ids.filter((i) => id !== i) : [...data.ids, id],
    });
  }

  function handleForm(e) {
    e.preventDefault();
    const isCPF = (cpf) =>
      cpf.length === 11 && cpf.split("").filter((n) => "0123456789".includes(n)).length === 11;
    const isName = (name) => name.trim().length > 1;

    if (isCPF(data.cpf) && isName(data.name)) {
      const promise = postSeats(data);

      promise.then((res) => {
        navigate("/success", {
          state: {
            movie: {
              name: seats.movie.tittle,
              date: seats.day.date,
              time: seats.name,
            },
            seats: seats.seats.reduce((prev, curr) => {
              if (data.ids.includes(curr.id)) prev.push(curr.name);

              return prev;
            }, []),

            customer: {
              name: data.name,
              cpf: data.cpf,
            },
          },
        });
      });
    }
  }

  return (
    <Container>
      <ContainerContent>
        {seats ? (
          <Section text="Selecione o(s) assento(s)">
            <SeatList>
              {seats.seats.map((seat) =>
                seat.isAvailable ? (
                  <Seat
                    status={data.ids.includes(seat.id) ? "selected" : "available"}
                    onClick={() => updateIds(seat.id)}
                  >
                    {seat.name}
                  </Seat>
                ) : (
                  <Seat status="unavailable" onClick={() => updateIds(seat.id)}>
                    {seat.name}
                  </Seat>
                )
              )}
            </SeatList>
            <ContainerSeats>
              <ContainerSeat>
                <Seat status="selected" />
                Selecionado
              </ContainerSeat>
              <ContainerSeat>
                <Seat status="available" />
                Disponivel
              </ContainerSeat>
              <ContainerSeat>
                <Seat status="unavailable" />
                Indisponivel
              </ContainerSeat>
            </ContainerSeats>
          </Section>
        ) : (
          ""
        )}
        <Form onSubmit={handleForm}>
          <div>
            <InputGroup>
              <Label>Nome do comprador:</Label>
              <Input
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </InputGroup>
            <InputGroup>
              <Label>CPF do comprador:</Label>
              <Input
                required
                type="number"
                value={data.cpf}
                onChange={(e) => setData({ ...data, cpf: e.target.value })}
              />
            </InputGroup>
          </div>
          <PrimaryButton>Reservar assento(s)</PrimaryButton>
        </Form>
      </ContainerContent>

      {seats !== false ? (
        <Footer
          image={seats.movie.posterURL}
          texts={[seats.movie.title, `${seats.day.weekday} - ${seats.name}`]}
        />
      ) : (
        ""
      )}
    </Container>
  );
}
