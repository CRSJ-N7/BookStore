import styled from "@emotion/styled";

export const UserProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-inline: 80px;
  gap: 110px;
  @media screen and (max-width: 834px) {
    margin-inline: 16px;
    gap: 30px;
  }

  @media screen and (max-width: 684px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  max-height: fit-content;
  max-width: fit-content;
`;

export const ProfilePicture = styled.img`
  display: block;
  width: 100%;
  max-width: 305px;
  height: auto;
  border-radius: 10%;
`;

export const PhotoUploader = styled.img`
  position: absolute;
  bottom: 25px;
  right: 25px;
  z-index: 2;
  cursor: pointer;
`;
export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;
  min-width: 0;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 522px;
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: normal;
  }
`;

export const InputLabel = styled.span`
  position: absolute;
  font-family: "Poppins", sans-serif;
  top: 8px;
  left: 70px;
  font-size: 14px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.palette.primary.main};
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
  font-size: 16px;

  @media screen and (max-width: 834px) {
    font-size: 14px;
  }
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
