import type { ButtonProps } from "@mui/material";
import { BaseHeader, BaseParagraph } from "../../styles/styles";
import Button from "../Button/Button";

type Props = {
  paragraph: React.ReactNode;
  header: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
};

const InfoContainer = ({
  paragraph,
  header,
  buttonText,
  buttonProps,
}: Props) => {
  return (
    <>
      <BaseHeader>{header}</BaseHeader>
      <BaseParagraph>{paragraph}</BaseParagraph>
      {buttonText && <Button {...buttonProps}>{buttonText}</Button>}
    </>
  );
};

export default InfoContainer;
