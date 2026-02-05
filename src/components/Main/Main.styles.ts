import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  background: #f0f4ef;
  padding: 24px;
  position: relative;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextParagraph = styled.p`
  color: #344966;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  z-index: 2;
`;

export const MainImage = styled.img``;
export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;
