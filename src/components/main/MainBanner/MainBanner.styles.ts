import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  align-items: center;
  background: ${({ theme }) => theme.palette.primary.light};

  margin-inline: 80px;
  padding: 50px 50px 0px 50px;

  position: relative;

  @media (max-width: 1111px) {
    margin-inline: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  align-self: end;

  min-width: 0;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: clamp(200px, 30vw, 500px);
  height: auto;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 834px) {
    top: 0;
    right: 0;
    left: unset;
    bottom: unset;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;
