import type { ButtonProps } from "@mui/material";
import { BaseHeader, BaseParagraph } from "../../styles/styles";
import Button from "../Button/Button";

type Props = {
  paragraph: React.ReactNode;
  header: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
  onButtonClick?: () => void;
};

const InfoContainer = ({
  paragraph,
  header,
  buttonText,
  buttonProps,
  onButtonClick,
}: Props) => {
  return (
    <>
      <BaseHeader>{header}</BaseHeader>
      <BaseParagraph>{paragraph}</BaseParagraph>
      {buttonText && (
        <Button {...buttonProps} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default InfoContainer;
