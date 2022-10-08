import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px 10px;
  align-items: center;
`;

export const Tittle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #247a6b;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DataTittle = styled.h3`
  color: #293845;
  font-size: 22px;
  letter-spacing: 0.04em;
  font-weight: 700;
`;

export const DataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DataText = styled.h4`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.04em;
  color: #293845;
`;
