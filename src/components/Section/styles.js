import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Tittle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  letter-spacing: 0.04em;
  font-style: normal;
  text-align: center;
`;
