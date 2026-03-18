import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 80px;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SwitchAuth = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: green;
  margin-inline: 10px;
`;

export const AuthImage = styled.img`
  width: 612px;
  height: 522px;
`;
