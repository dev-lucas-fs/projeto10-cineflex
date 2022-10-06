import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const Tittle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  letter-spacing: 0.04em;
  font-style: normal;
`;
