import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 1px solid lightgray;
  padding-top: 20px;
  display: flex;
  margin-bottom: 30px;
`;

export const AttributeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  flex: 0.35;
  display: flex;
  justify-content: flex-end;
`;

export const Side = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuantityIncreaser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImg = styled.div`
  background-size: cover;
  margin-left: 10px;
  background-position: center;
  height: 185px;
  width: 140px;
  background-image: url(${({ imgURL }) => imgURL});
`;

export const AttributeButton = styled.div`
  width: ${({ width }) => width || "24px"};
  height: 24px;
  padding: 10px;
  font-weight: 400;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  transition: width 0.5s;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border: 1px solid #1d1f22;
  color: ${({ theme, selected }) => (selected ? "white" : theme.colors.text)};
  background-color: ${({ theme, color }) => color || theme.colors.background};

  :hover {
    cursor: pointer;
  }
`;

export const QuantityButton = styled.div`
  width: 24px;
  height: 24px;

  padding: 10px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.5s;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border: 1px solid #1d1f22;
  color: ${({ theme, selected }) => (selected ? "white" : theme.colors.text)};
  background-color: ${({ theme, selected }) =>
    selected ? "black" : theme.colors.background};

  :hover {
    cursor: pointer;
  }
`;

export const ColorWrapper = styled.div`
  margin-right: 10px;
`;
