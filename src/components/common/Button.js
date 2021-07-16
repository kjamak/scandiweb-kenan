import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "52px"};
  transition: width 0.5s;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme, disabled }) =>
    disabled ? "lightgray" : theme.colors.primary};
  :hover {
    cursor: pointer;
  }
`;

export const BorderButton = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "45px"};
  margin-right: 10px;
  padding: 10px;
  font-weight: 400;
  transition: width 0.5s;
  font-family: "Raleway", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  border: 1px solid #1d1f22;
  color: ${({ theme, selected }) => (selected ? "white" : theme.colors.text)};
  background-color: ${({ theme, selected }) =>
    selected ? "black" : theme.colors.background};

  :hover {
    cursor: pointer;
  }
`;

export const ColorButton = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "45px"};
  margin-right: 10px;
  padding: 10px;
  font-weight: 400;
  transition: width 0.5s;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border: ${({ selected }) =>
    selected ? "3px solid #1d1f22" : "1px solid #1d1f22"};

  background-color: ${({ color }) => color};

  :hover {
    cursor: pointer;
  }
`;
