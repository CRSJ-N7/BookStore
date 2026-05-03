import styled from "@emotion/styled";
import { BaseHeader } from "../shared/styles/styles";

export const StyledBaseHeader = styled(BaseHeader)`
  margin: 80px;

  @media screen and (max-width: 834px) {
    font-size: 32px;
    margin: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 18px;
    margin: 16px;
  }
`;
