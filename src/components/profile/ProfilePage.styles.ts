import Input from "@mui/material/Input";
import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 305px;
  height: 305px;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const PhotoUploader = styled.img`
  position: absolute;
  bottom: 15px;
  right: 15px;
  z-index: 2;
  cursor: pointer;
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

export const ChangeParagraph = styled.p`
  color: #8d9f4f;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;

export const ProfileInput = styled(Input)`
  width: 630px;
  height: 64px;
  padding-inline: 24px;
  background-color: #f0f4ef;
  border-radius: 16px;
  text-underline-offset: none;
`;
