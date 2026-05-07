import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palette.primary.dark};
  height: 341px;
  padding: 48px 64px;
  margin-top: 30px;
  gap: 12px;

  @media screen and (max-width: 834px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 16px;
    gap: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    color: #f0f4ef;
  }
`;

export const MapImage = styled.img`
  max-width: 100%;
  height: auto;
`;
