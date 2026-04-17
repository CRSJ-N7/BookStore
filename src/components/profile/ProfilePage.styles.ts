import styled from "@emotion/styled";

export const UserProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-inline: 80px;
  gap: 110px;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 305px;
  height: 305px;
`;

export const ProfilePicture = styled.img`
  display: block;
  max-width: 305px;
  max-height: 305px;
  border-radius: 10%;
`;

export const PhotoUploader = styled.img`
  position: absolute;
  bottom: 45px;
  right: 25px;
  z-index: 2;
  cursor: pointer;
`;

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const ChangeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ChangeInfo = styled.p`
  color: #8d9f4f;
  text-decoration-line: underline;
  text-decoration-style: solid;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
`;

export const FloatingLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 53px;
  font-size: 12px;
  font-family: Poppins;
  color: #344966;
  z-index: 2;
`;
