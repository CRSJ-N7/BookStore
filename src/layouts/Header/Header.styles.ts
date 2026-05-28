import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  margin-inline: 80px;
  margin-bottom: 40px;
  margin-top: 24px;
  gap: 25px;

  @media (max-width: 834px) {
    margin-inline: 16px;
  }

  @media (max-width: 530px) {
    flex-wrap: wrap;
    height: auto;
    row-gap: 16px;
    margin-inline: 16px;
  }

  @media (max-width: 366px) {
    margin-inline: 8px;
    gap: 6px;
    row-gap: 8px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  position: relative;
  margin-inline: 5px;

  @media (max-width: 834px) {
    width: 100%;
  }
  @media (max-width: 834px) {
    margin-top: 17px;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  max-width: 800px;
  align-items: center;
  justify-content: center;

  @media (max-width: 530px) {
    order: 3;
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const CatalogText = styled.p`
  font-weight: 500;
  font-family: "Poppins";
  cursor: pointer;

  @media (max-width: 530px) {
    font-size: 14px;
    order: 1;
  }

  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

export const RightSlot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;

  @media (max-width: 830px) {
    order: 2;
    gap: 10px;
    max-width: 200px;
  }

  @media (max-width: 550px) {
    order: 2;
    gap: 7px;
    max-width: 150px;
  }

  @media (max-width: 350px) {
    max-width: 150x;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;

  @media (max-width: 830px) {
    order: 2;
    gap: 7px;
  }

  @media (max-width: 530px) {
    order: 2;
  }

  @media (max-width: 350px) {
    gap: 7px;
  }
`;

export const ProfileIcons = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 60%;

  @media screen and (max-width: 830px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 530px) {
    width: 33px;
    height: 32px;
  }
`;

export const HeaderStyledAdornment = styled.div`
  position: absolute;
  left: 20px;
  top: 52%;
  transform: translateY(-50%);

  img {
    width: 22px;
    height: 22px;
    opacity: 0.6;
  }
  z-index: 1;
`;

export const InputContainer = styled.div`
  position: relative;
  min-width: 0;
  max-width: 630px;
  width: 100%;
`;

export const ProfileIconsBlanked = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 830px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 530px) {
    width: 33px;
    height: 32px;
  }
`;

export const SvgTestWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
export const CartIconMainEllipse = styled.img`
  position: relative;
  width: 48px;
  height: 48px;

  @media screen and (max-width: 830px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 530px) {
    width: 33px;
    height: 32px;
  }
`;

export const CartIconSecondEllipse = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  right: -7px;
  top: -7px;

  @media (max-width: 830px) {
    width: 20px;
    height: 20px;
    right: -3.5px;
    top: -5px;
  }

  @media (max-width: 530px) {
    width: 14px;
    height: 14px;
    right: -3px;
    top: -3px;
  }
`;

export const CartIcon = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  z-index: 2;
  left: 11px;
  top: 11px;

  @media screen and (max-width: 830px) {
    width: 20px;
    height: 20px;
    left: 10px;
    top: 10px;
  }

  @media screen and (max-width: 530px) {
    left: 7.5px;
    top: 7.5px;
    width: 17px;
    height: 17px;
  }
`;

export const Quantity = styled.p`
  position: absolute;
  left: 38px;
  top: -3px;
  z-index: 5;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};

  @media screen and (max-width: 830px) {
    width: 20px;
    height: 20px;
    left: 30px;
    top: -4px;
  }

  @media screen and (max-width: 530px) {
    left: 26px;
    top: -3px;
    width: 17px;
    height: 17px;
    font-size: 10px;
  }
`;

export const BellWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const BellIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 830px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 530px) {
    width: 33px;
    height: 32px;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: #e53935;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 280px;
  background: white;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;

  @media screen and (max-width: 530px) {
    width: 200px;
  }

  @media screen and (max-width: 420px) {
    width: 200px;
  }
`;

export const NotificationEmpty = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.palette.secondary.light};
  text-align: center;
  font-size: 14px;
`;

export const NotificationItem = styled.div<{ isRead: boolean }>`
  padding: 12px 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
  cursor: pointer;
  font-size: 14px;
  background: ${({ isRead }) =>
    isRead
      ? "${({ theme }) => theme.palette.primary.main}"
      : "${({ theme }) => theme.palette.primary.main}"};
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.light};
  }
`;
