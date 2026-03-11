import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  margin-inline: 80px;
  margin-bottom: 40px;
  margin-top: 24px;
`;

export const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 630px;
`;

export const CatalogText = styled.p`
  font-weight: 500;
  font-family: "Poppins";
  cursor: pointer;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
`;

export const ProfileIcons = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const SvgTestWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
export const CartIconMainEllipse = styled.img`
  position: relative;
  width: 48px;
  height: 48px;
`;

export const CartIconSecondEllipse = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  right: -7px;
  top: -7px;
`;

export const CartIcon = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  z-index: 2;
  left: 11px;
  top: 11px;
`;

export const Quantity = styled.p`
  position: absolute;
  left: 38px;
  top: -3px;
  z-index: 5;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #344966;
`;
