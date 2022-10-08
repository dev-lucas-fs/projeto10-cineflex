import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  overflow-y: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  justify-content: center;
`;

export const Item = styled.li`
  width: 100%;
  max-width: 130px;
  cursor: pointer;
`;
