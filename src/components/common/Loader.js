import React from "react";
import styled from "styled-components";

function Loader({ strokeMain, width, height }) {
  console.log(strokeMain);
  return (
    <LoaderMain
      width={width}
      height={height}
      strokeMain={strokeMain}
      viewBox="0 0 30 30"
    >
      <circle
        className="path"
        cx="15"
        cy="15"
        r="10"
        fill="none"
        strokeWidth="2"
      />
    </LoaderMain>
  );
}

const LoaderMain = styled.svg`
  animation: rotate 2s linear infinite;
  width: ${({ width }) => width || "30px"};
  height: ${({ height }) => height || "30px"};

  & .path {
    stroke: ${({ strokeMain }) => strokeMain || "#ffffff"};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Loader;
