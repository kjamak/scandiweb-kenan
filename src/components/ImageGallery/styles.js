import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const SmallImage = styled.div`
  height: 100px;
  width: 100px;

  margin-bottom: 30px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imgURL }) => imgURL});

  :hover {
    cursor: pointer;
  }

  @media (max-width: 992px) {
    flex: 0 0 auto;
  }
`;

export const LargeImage = styled.div`
  width: 80%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imgURL }) => imgURL});
  margin-right: 40px;
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

export const ImagesContainer = styled.div`
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 992px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    height: 100px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
    div {
      margin-right: 30px;
    }
  }
`;
