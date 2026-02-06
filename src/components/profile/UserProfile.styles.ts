import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ProfilePicture = styled.img`
  width: 305px;
  height: 305px;
`;

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputWithLabelWrapper = styled.div`
  position: relative;
  width: 630px;
`;

export const InputLabel = styled.span`
  position: absolute;
  font-family: "Poppins", sans-serif;
  top: 8px;
  left: 70px;
  font-size: 14px;
  letter-spacing: 0.75px;
  color: #344966;
  pointer-events: none;
  z-index: 2;
`;
