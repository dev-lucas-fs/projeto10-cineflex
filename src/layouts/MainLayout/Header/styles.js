import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 34px;
  font-weight: 400;
`;
