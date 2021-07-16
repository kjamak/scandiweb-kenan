import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;

  top: 0;
  margin-top: 80px;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 100%;

  background-color: rgba(168, 172, 176, 0.49);
  @media (max-height: 690px) {
    height: 120%;
  }
`;

export const Card = styled.div`
  position: absolute;
  display: flex;
  z-index: 999;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  padding: 16px;

  width: 325px;
  height: 540px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Products = styled.div`
  overflow-y: auto;
  height: 340px;
`;

export const TextWrapper = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
