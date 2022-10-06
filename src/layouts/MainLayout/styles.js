import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & > *:nth-child(1) {
    grid-row: 1/2;
  }

  & > *:nth-child(2) {
    grid-row: 2/3;
  }
`;
