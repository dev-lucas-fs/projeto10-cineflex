import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {
  Container,
  DataContainer,
  DataText,
  DataTextContainer,
  DataTittle,
  Tittle,
} from "./styles";

export default function Success() {
  const { state } = useLocation();
  const data = state;

  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>
        Pedido feito
        <br />
        com sucesso!
      </Tittle>
      <DataContainer>
        <DataTittle>Filme e sessão</DataTittle>
        <DataTextContainer>
          <DataText>{data.movie.tittle}</DataText>
          <DataText>
            {data.movie.date} {data.movie.time}
          </DataText>
        </DataTextContainer>
      </DataContainer>
      <DataContainer>
        <DataTittle>Ingressos</DataTittle>
        <DataTextContainer>
          {data.seats.map((seat, i) => (
            <DataText key={i}>Assento {seat}</DataText>
          ))}
        </DataTextContainer>
      </DataContainer>
      <DataContainer>
        <DataTittle>Comprador</DataTittle>
        <DataTextContainer>
          <DataText>Nome: {data.customer.name}</DataText>
          <DataText>CPF {data.customer.cpf}</DataText>
        </DataTextContainer>
      </DataContainer>
      <PrimaryButton onClick={() => navigate("/")}>Voltar para Home</PrimaryButton>
    </Container>
  );
}
