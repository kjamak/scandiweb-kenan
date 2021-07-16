import { Col } from "react-grid-system";
import styled from "styled-components";

export const StyledCol = styled(Col)`
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  height: 100vh;
`;
