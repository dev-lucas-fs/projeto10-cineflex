import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: calc(100vh - 64px);
  grid-template-rows: 1fr auto;
  padding: 20px 0 0 0;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const SeatList = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;
`;

const colors = {
  unavailable: "#FBE192",
  available: "#C3CFD9",
  selected: "#1AAE9E",
};

export const Seat = styled.li`
  width: 26px;
  height: 26px;
  font-size: 12px;
  border-radius: 50%;
  border: 1px solid #808f9d;
  background: ${(props) => colors[props.status]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectedSeat = styled.li``;

export const UnavailableSeat = styled.li``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  padding: 10px 15px;
`;

export const Label = styled.label`
  color: #293845;
  font-size: 18px;
  font-weight: 400;
`;

export const ContainerSeats = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ContainerSeat = styled.div`
  letter-spacing: -0.013em;
  font-size: 13px;
  color: #4e5a65;
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
