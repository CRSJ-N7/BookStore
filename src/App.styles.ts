import styled from "@emotion/styled";

export const GlobalContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    text-align: center;
  }

  img {
    width: 400px;
    height: 200px;
  }
`;
