import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5ECE7B; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


*{
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; }

     
  body {
    margin: 0;
    top:0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Raleway', sans-serif;

  }
  a{
    text-decoration: none;
    color: black;
  }
  .flag{
    width: 20px;
    height: 20px;
  }
`;

export default GlobalStyle;
