import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  background: #f0f4ef;
  margin-inline: 80px;
  justify-content: space-between;
  position: relative;
  padding: 50px;

  @media screen and (max-width: 1111px) {
    margin-inline: 16px;
  }
`;

export const MainImage = styled.img`
  align-self: flex-end;

  @media screen and (max-width: 864px) {
    aspect-ratio: 364/328;
  }
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
