import styled from "@emotion/styled";
import { BaseParagraph } from "../../../shared/styles/styles";

export const Wrapper = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: minmax(0, 420px) minmax(0, 1fr);
  grid-template-areas:
    "cover top"
    "cover bottom"
    "cover . ";

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "cover top"
      "bottom bottom";
    grid-template-columns: 120px minmax(0, 1fr);
  }
`;

export const Cover = styled.img`
  grid-area: cover;
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  object-fit: cover;
`;

export const InfoTop = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

export const InfoBottom = styled.div`
  grid-area: bottom;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(20px, 3vw, 40px);
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Author = styled.h3`
  margin: 0;
  font-size: clamp(14px, 2vw, 24px);
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.primary.main};

  overflow-wrap: break-word;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const RateArrow = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 231px;
`;

export const StyledBaseParagraph = styled(BaseParagraph)`
  && {
    color: ${({ theme }) => theme.palette.secondary.dark};
    font-size: 16px;
  }
`;
