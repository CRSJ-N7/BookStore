import styled from "@emotion/styled";

export const AuthWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  align-items: center;
  background: #f0f4ef;

  margin-inline: 80px;
  padding: 50px 50px 0 50px;
  margin-top: 15px;

  position: relative;
  z-index: 1;

  @media (max-width: 1111px) {
    margin-inline: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  min-width: 0;

  @media (max-width: 768px) {
    order: 1;
    align-items: flex-start;
    text-align: left;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  max-width: 500px;
  height: auto;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 834px) {
    top: 0;
    bottom: unset;
  }
`;

export const AuthImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  align-self: end;

  min-width: 0;

  @media (max-width: 768px) {
    order: 2;
  }
`;
