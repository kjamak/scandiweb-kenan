import styled from "styled-components";

const sizes = ["4rem", "2.25rem", "1.5rem", "1.125rem", "0.875rem", "2rem"];

export const Heading = styled.div.attrs(({ level }) => ({
  role: "heading",
  "aria-level": level || 1,
}))`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ level }) => sizes[level - 1]};
  font-family: "Raleway", sans-serif;
`;
export const Text = styled.p`
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: "Raleway", sans-serif;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
`;
