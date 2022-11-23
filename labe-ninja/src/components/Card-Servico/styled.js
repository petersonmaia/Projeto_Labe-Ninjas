import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  width: 1fr;
  /* height: 25vh; */
  border: 1px solid GRAY;
  padding: 10px;
  border-radius: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Div = styled.div`
  width: 98vw;
`;

export const CardContainer = styled.div`
  padding: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
