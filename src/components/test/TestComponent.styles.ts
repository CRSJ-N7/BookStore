import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  gap: 2px;
`;

export const GridItem = styled.div`
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const GridBookContainer = styled.div`
  display: grid;
  padding: 2px;
`;

export const GridBookItem = styled.div`
  font-size: 18px;
  font-style: italic;
  color: ${({ theme }) => theme.palette.primary.main};
`;
