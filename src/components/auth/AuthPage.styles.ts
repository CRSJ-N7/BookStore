import styled from "@emotion/styled";
import { StyledAdornment } from "../../shared/styles/styles";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  gap: 60px;

  @media screen and (max-width: 834px) {
    margin: 40px 16px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 413px;
`;

export const SwitchAuth = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-inline: 10px;
`;

export const AuthImage = styled.img`
  width: 100%;
  max-width: 612px;
  min-width: 400px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    min-width: 0;
  }
`;

export const LoginAdornment = styled(StyledAdornment)`
  top: 37%;
`;
