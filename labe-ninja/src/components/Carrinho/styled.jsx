import styled from "styled-components";

export const BalaoCarrinho = styled.div`
  display: ${({ mostrar }) => (mostrar ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: 60px;
  right: 20px;
  left: auto;
  min-height: 100px;
  min-width: 300px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #fbb34c;
  padding: 20px;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 296px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid white;
  }
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 295px;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 11px solid #fbb34c;
  }
  & > h2 {
    margin: 15px auto;
  }
`;

export const CardCarrinho = styled.div`
  background-color: #ffeacd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fbb34c;
  border-radius: 5px;
  width: 92%;
  padding: 10px;
  margin-bottom: 5px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div > span:first-child {
    font-weight: bold;
  }
`;

export const TituloCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const FinalCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;