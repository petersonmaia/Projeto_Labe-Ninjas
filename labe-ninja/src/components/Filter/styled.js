import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
  padding: 0 25vw 0 25vw;
  margin-top: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 860px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5px;
    height: 200px;
  }
`;