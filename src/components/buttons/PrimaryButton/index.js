import styled from "styled-components";

export default styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
  border: none;
  outline: none;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.02em;
  border-radius: 3px;
`;
