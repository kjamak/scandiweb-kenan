import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
  padding: 16px;
  ${({ hovered }) =>
    hovered && "box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);"};

  :hover {
    cursor: pointer;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 330px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imgURL }) => imgURL});
`;

export const CartButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  bottom: 0;
  right: 0;
  margin-bottom: 70px;
  margin-right: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  img {
    height: 24px;
    width: 24px;
  }
`;

export const InStock = styled.div`
  background: #ffffff;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 330px;
`;
