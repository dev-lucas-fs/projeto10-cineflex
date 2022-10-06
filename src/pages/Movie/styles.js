import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 30px 25px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Tittle = styled.h2`
  letter-spacing: 0.02em;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  font-style: normal;
`;

export const Weekday = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ShowTimeList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const ShowTimeItem = styled.li``;
