import type { ButtonProps } from "@mui/material";
import { BaseHeader, BaseParagraph } from "../../styles/styles";
import Button from "../Button/Button";
import { ButtonWrapper } from "./InfoContainer.styles";

type Props = {
  paragraph: React.ReactNode;
  header: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
  banner?: boolean;
  onButtonClick?: () => void;
};

const InfoContainer = ({
  paragraph,
  header,
  buttonText,
  banner,
  buttonProps,
  onButtonClick,
}: Props) => {
  return (
    <>
      <BaseHeader>{header}</BaseHeader>
      <BaseParagraph>{paragraph}</BaseParagraph>
      {buttonText && (
        <ButtonWrapper>
          <Button {...buttonProps} onClick={onButtonClick} banner={banner}>
            {buttonText}
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default InfoContainer;
