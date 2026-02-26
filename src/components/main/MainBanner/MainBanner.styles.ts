import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  background: #f0f4ef;
  margin-inline: 80px;
  justify-content: space-between;
  position: relative;
  padding: 50px;
`;

export const MainImage = styled.img`
  align-self: flex-end;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
